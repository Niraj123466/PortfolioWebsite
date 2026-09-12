import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 5, suffix: "★", label: "HackerRank", sub: "C++ & Python" },
  { value: 220, suffix: "+", label: "LeetCode", sub: "Problems solved" },
  { value: 3, suffix: "rd", label: "Hackathon", sub: "Hacksprints 6.0" },
  { value: 4, suffix: "+", label: "Certifications", sub: "Industry certs" },
];

const certifications = [
  "5-star coder on HackerRank (C++, Python)",
  "Solved 220+ DSA problems on LeetCode",
  "3rd place — Hacksprints 6.0 (AI Resume Screening System)",
  "Certified: Full Stack Development",
  "Certified: Docker & Containerization",
  "Certified: React.js & Node.js",
  "Certified: Cloud Computing",
];

const Counter = ({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span
      className="font-mono font-bold text-foreground"
      style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.04em" }}
    >
      {count}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">Achievements</span>
          <h2
            className="text-foreground font-semibold mt-1 mb-12"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Milestones
          </h2>

          {/* Stats strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden mb-16">
            {stats.map(({ value, suffix, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-background p-8 text-center"
              >
                <Counter target={value} suffix={suffix} inView={inView} />
                <p className="text-sm font-medium text-foreground mt-1">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-label mb-5">Highlights & Certifications</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
