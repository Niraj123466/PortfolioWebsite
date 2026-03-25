import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2, Trophy, Award } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const titles = [
  "AI Systems Engineer",
  "Full Stack Developer",
  "Multi-Agent Architect",
  "Problem Solver",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Particle constellation */}
      <ParticleBackground />
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary text-sm mb-4 tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4">
            Niraj More
          </h1>

          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <span className="text-xl sm:text-2xl font-mono text-gradient font-semibold">
              {titles[titleIndex].slice(0, charIndex)}
            </span>
            <span className="w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </div>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Building scalable AI systems, multi-agent architectures, and real-world applications that solve meaningful problems.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all glow-primary"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-all"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            {[
              { icon: Github, href: "https://github.com/Niraj123466", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/niraj-more-839b64382/", label: "LinkedIn" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=moreniraj49@gmail.com", label: "Email" },
              { icon: Code2, href: "https://www.hackerrank.com/profile/moreniraj49", label: "HackerRank" },
              { icon: Trophy, href: "https://leetcode.com/u/Niraj123466/", label: "LeetCode" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:glow-border transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-float">
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
