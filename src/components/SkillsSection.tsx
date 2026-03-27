import { motion, useInView } from "framer-motion";
import { useRef, lazy, Suspense } from "react";
import { Code, Globe, Brain, Wrench, Cloud, Cpu, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const SkillsSphere = lazy(() => import("./SkillsSphere"));

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Web",
    icon: Globe,
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Appwrite"],
  },
  {
    title: "AI & Systems",
    icon: Brain,
    skills: ["LangChain", "RAG", "Vector DBs", "Multi-agent"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Docker", "Git", "GitHub", "Postman"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Firebase"],
  },
  {
    title: "Core CS",
    icon: Cpu,
    skills: ["DSA", "OS", "DBMS", "Networks", "OOP"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Ownership", "Technical Communication", "Problem Solving", "Time Management"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section id="skills" className="py-24 bg-surface/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        {/* 3D Sphere on desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Suspense fallback={<div className="h-[500px]" />}>
              <SkillsSphere />
            </Suspense>
          </motion.div>
        )}

        {/* Grid below (always visible) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground font-mono hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
