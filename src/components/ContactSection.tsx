import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:moreniraj49@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-24 bg-surface/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase text-center">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a conversation about tech.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all glow-primary flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="space-y-6">
              <p className="text-sm text-muted-foreground">Or reach out directly:</p>
              {[
                { icon: Mail, label: "moreniraj49@gmail.com", href: "mailto:moreniraj49@gmail.com" },
                { icon: Github, label: "github.com/Niraj123466", href: "https://github.com/Niraj123466" },
                { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/niraj-more-839b64382/" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors flex-1">{label}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
