import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe2 } from "lucide-react";

const roles = [
  {
    title: "Development Co-Head",
    org: "Google Developer Student Club",
    period: "Aug 2024 – Present",
    icon: Users,
    points: [
      "Mentored juniors in full-stack development and cloud tools, articulating complex concepts clearly.",
      "Organized workshops and hands-on sessions on modern web frameworks and deployment strategies.",
    ],
  },
  {
    title: "Web Dev Head",
    org: "NEURA — AI Research Community",
    period: "Jun 2024 – Present",
    icon: Globe2,
    points: [
      "Organized peer learning sessions to grow student interest in system design and development.",
      "Led collaborative projects that bridge AI research with practical web applications.",
    ],
  },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Leadership</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Roles & <span className="text-gradient">Responsibility</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map(({ title, org, period, icon: Icon, points }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-primary">{period}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mt-3">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{org}</p>
              <ul className="space-y-2">
                {points.map((point, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
