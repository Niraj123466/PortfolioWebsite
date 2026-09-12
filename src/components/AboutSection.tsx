import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">About</span>

          <div className="grid lg:grid-cols-[1fr_340px] gap-16 lg:gap-20 items-start mt-4">
            {/* Left — text content */}
            <div>
              {/* Pull quote */}
              <h2
                className="text-foreground font-semibold mb-8 leading-tight"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                Engineer. Builder. Problem Solver.
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
                <p>
                  Software Engineer with strong foundations in Data Structures,
                  Algorithms, Operating Systems, and Object-Oriented Programming.
                  Proficient in C++, Python, and system-level thinking — with
                  experience building scalable, distributed full-stack applications
                  using React.js, Node.js, and MongoDB.
                </p>
                <p>
                  Passionate about solving complex technical problems, building
                  mission-critical tools, and working in agile environments. Adept
                  at handling ambiguous problems, learning fast, and delivering
                  high-impact software.
                </p>
              </div>

              {/* Education */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-label mb-3">Education</p>
                <p
                  className="text-foreground font-semibold mb-1"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  B.E. — Artificial Intelligence & Data Science
                </p>
                <p className="text-sm text-muted-foreground">
                  Marathwada Mitra Mandal's College of Engineering, Pune
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-1.5">
                  2022 – Present · CGPA:{" "}
                  <span className="text-primary">9.21</span>
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { value: "9.21", label: "CGPA" },
                  { value: "220+", label: "LeetCode" },
                  { value: "5★", label: "HackerRank" },
                  { value: "2", label: "Internships" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p
                      className="text-foreground font-bold font-mono"
                      style={{ fontSize: "1.5rem", letterSpacing: "-0.03em" }}
                    >
                      {value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:sticky lg:top-24"
            >
              <div
                className="relative overflow-hidden rounded-sm"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src="/ProfilePic.png"
                  alt="Niraj More"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Subtle image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-muted-foreground font-mono">
                  Niraj More · Pune, India
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
