import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Niraj123466", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/niraj-more-839b64382/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&to=moreniraj49@gmail.com",
    label: "Email",
  },
];

const footerLinks = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left — brand + copyright */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-foreground tracking-tight">
            NM
          </span>
          <span className="text-border">·</span>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Niraj More
          </span>
        </div>

        {/* Center — nav links */}
        <nav className="flex items-center gap-5" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 hover-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right — socials + back to top */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <span className="w-px h-4 bg-border mx-1" aria-hidden="true" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
