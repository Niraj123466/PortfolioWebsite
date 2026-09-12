import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const roles = [
  {
    title: "Development Co-Head",
    org: "Google Developer Student Club",
    period: "Aug 2024 – Present",
    current: true,
    points: [
      "Mentored juniors in full-stack development and cloud tools, articulating complex concepts clearly.",
      "Organized workshops and hands-on sessions on modern web frameworks and deployment strategies.",
    ],
  },
  {
    title: "Web Dev Head",
    org: "NEURA — AI Research Community",
    period: "Jun 2024 – Present",
    current: true,
    points: [
      "Organized peer learning sessions to grow student interest in system design and development.",
      "Led collaborative projects bridging AI research with practical web applications.",
    ],
  },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">Community</span>
          <h2
            className="text-foreground font-semibold mt-1 mb-12"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Leadership & Community
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
            {roles.map(({ title, org, period, current, points }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="bg-background p-8"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="text-foreground font-semibold mb-0.5"
                      style={{ letterSpacing: "-0.015em" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{org}</p>
                  </div>
                  {current && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-primary/10 text-primary text-[10px] font-mono font-medium shrink-0">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      Active
                    </span>
                  )}
                </div>

                <p className="font-mono text-xs text-muted-foreground mb-4">{period}</p>

                <ul className="space-y-2.5">
                  {points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-primary/60 mt-[0.45rem] shrink-0"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
