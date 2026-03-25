import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Server, Code2, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI Systems", desc: "Multi-agent & RAG pipelines" },
  { icon: Server, label: "Backend", desc: "Scalable distributed systems" },
  { icon: Code2, label: "Full Stack", desc: "React, Node, Python" },
  { icon: GraduationCap, label: "CGPA 9.21", desc: "AI & Data Science" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Engineer. Builder. <span className="text-gradient">Problem Solver.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Software Engineer with strong foundations in Data Structures, Algorithms, Operating Systems, and Object-Oriented Programming. Proficient in C++, Python, and system-level thinking, with experience building scalable, distributed full-stack applications using React.js, Node.js, and MongoDB.
              </p>
              <p>
                Passionate about solving complex technical problems, building mission-critical tools, and working in agile environments. Adept at handling ambiguous problems, learning fast, and delivering high-impact software.
              </p>
              <div className="pt-2">
                <p className="text-sm font-mono text-primary mb-1">Education</p>
                <p className="text-foreground font-semibold">B.E. in Artificial Intelligence & Data Science</p>
                <p className="text-sm">Marathwada Mitra Mandal's College of Engineering, Pune</p>
                <p className="text-xs text-muted-foreground mt-1">2022 – Present · CGPA: 9.21</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{label}</h3>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
