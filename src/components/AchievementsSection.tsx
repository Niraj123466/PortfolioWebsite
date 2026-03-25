import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Trophy, Award, BookOpen } from "lucide-react";

const stats = [
  { icon: Star, value: 5, suffix: "★", label: "HackerRank Rating" },
  { icon: BookOpen, value: 220, suffix: "+", label: "LeetCode Problems" },
  { icon: Trophy, value: 3, suffix: "rd", label: "Hackathon Place" },
  { icon: Award, value: 4, suffix: "+", label: "Certifications" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
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
    <span className="text-4xl font-black text-foreground">
      {count}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Milestones & <span className="text-gradient">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300 text-center"
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <Counter target={value} suffix={suffix} inView={inView} />
              <p className="text-sm text-muted-foreground mt-2">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <p className="font-mono text-primary text-xs mb-4 tracking-widest uppercase text-center">Highlights & Certifications</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "5-star coder on HackerRank (C++, Python)",
              "Solved 220+ DSA problems on LeetCode",
              "3rd place at Hacksprints 6.0 (AI Resume System)",
              "Certified: Full Stack Development",
              "Certified: Docker & Containerization",
              "Certified: React.js & Node.js",
              "Certified: Cloud Computing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
