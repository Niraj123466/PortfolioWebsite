import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
        <Terminal className="w-4 h-4 text-primary" />
        <span>niraj.dev © {new Date().getFullYear()}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Designed & Built by Niraj More
      </p>
    </div>
  </footer>
);

export default Footer;
