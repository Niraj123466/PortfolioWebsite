import { Terminal, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Niraj123466", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/niraj-more-839b64382/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=moreniraj49@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center gap-2 font-mono font-bold text-primary text-lg mb-3">
            <Terminal className="w-5 h-5" />
            <span>niraj.dev</span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building scalable AI systems and full-stack applications that solve meaningful problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Quick Links</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Connect</p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Niraj More. Designed & Built with ❤️
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group"
        >
          Back to top
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
