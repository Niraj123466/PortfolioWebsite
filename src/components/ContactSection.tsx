import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle, Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/moreniraj49@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">Contact</span>

          {/* Large editorial heading */}
          <h2
            className="text-foreground font-bold mt-2 mb-6 leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.035em",
            }}
          >
            Let's build something<span className="text-primary">.</span>
          </h2>

          <p className="text-muted-foreground mb-12 max-w-lg leading-relaxed">
            I'm always open to discussing new projects, engineering roles, or
            just having a conversation about AI and software. Drop a message
            below or reach out directly.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-start gap-4 py-8"
                >
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      Message received.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Thanks for reaching out — I'll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono hover-underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs text-muted-foreground font-mono mb-1.5 block">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 bg-transparent border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-xs text-muted-foreground font-mono mb-1.5 block">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 bg-transparent border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-xs text-muted-foreground font-mono mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell me about the project or opportunity..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 bg-transparent border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === "sending"}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-red-400 font-mono">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Direct contact */}
            <div className="space-y-8">
              <div>
                <p className="text-label mb-4">Direct contact</p>
                <div className="space-y-2">
                  {[
                    {
                      icon: Mail,
                      label: "moreniraj49@gmail.com",
                      href: "https://mail.google.com/mail/?view=cm&to=moreniraj49@gmail.com",
                    },
                    {
                      icon: Github,
                      label: "github.com/Niraj123466",
                      href: "https://github.com/Niraj123466",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn Profile",
                      href: "https://www.linkedin.com/in/niraj-more-839b64382/",
                    },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-2.5 border-b border-border/60 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                    >
                      <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0" />
                      <span className="text-sm font-mono">{label}</span>
                      <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-label mb-3">Location</p>
                <p className="text-sm text-muted-foreground">Pune, Maharashtra, India</p>
                <p className="text-xs text-muted-foreground/60 font-mono mt-1">
                  Open to remote · Relocation negotiable
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
