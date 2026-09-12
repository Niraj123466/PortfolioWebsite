import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />

      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, hsl(var(--background)) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Status */}
          <motion.div variants={item} className="flex items-center gap-2 mb-10">
            <span
              className="status-dot animate-[status-pulse_2s_ease-in-out_infinite]"
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground font-mono tracking-wide">
              Open to opportunities · Pune, India
            </span>
          </motion.div>

          {/* Name — display typography */}
          <motion.h1
            variants={item}
            className="font-sans font-black text-foreground mb-3"
            style={{
              fontSize: "clamp(2.75rem, 8vw, 5.75rem)",
              letterSpacing: "-0.04em",
              lineHeight: "1.0",
            }}
          >
            Niraj More
          </motion.h1>

          {/* Role line */}
          <motion.p
            variants={item}
            className="text-muted-foreground font-mono text-sm mb-8 tracking-wide"
          >
            <span className="text-primary">Software Engineer</span>
            {" · "}AI Systems{" · "}Full Stack Development
          </motion.p>

          {/* Positioning statement */}
          <motion.p
            variants={item}
            className="text-foreground/80 mb-12 leading-relaxed max-w-xl"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Building production-grade AI systems, multi-agent architectures,
            and scalable full-stack applications. From chatbots that serve
            government initiatives to RAG pipelines in production.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-14">
            <a
              href="#projects"
              className="btn-primary"
              id="hero-view-work-cta"
            >
              Selected Work →
            </a>
            <a
              href="/NirajMore_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              id="hero-resume-cta"
            >
              Resume ↗
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-6">
            {[
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/Niraj123466",
                text: "Niraj123466",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/niraj-more-839b64382/",
                text: "niraj-more",
              },
              {
                label: "LeetCode",
                href: "https://leetcode.com/u/Niraj123466/",
                text: "220+ solved",
              },
            ].map(({ icon: Icon, label, href, text }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {Icon && (
                  <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                )}
                <span className="text-xs font-mono hover-underline">{text}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-6 md:left-12"
        aria-hidden="true"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 animate-float"
          aria-label="Scroll down"
        >
          <span className="font-mono text-[10px] tracking-widest rotate-90 origin-center">
            scroll
          </span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </motion.div>

      {/* Decorative number */}
      <div
        className="absolute right-6 md:right-12 bottom-8 font-mono text-[10px] text-muted-foreground/25 tracking-widest"
        aria-hidden="true"
      >
        01 / 07
      </div>
    </section>
  );
};

export default HeroSection;
