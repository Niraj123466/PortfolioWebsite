import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "FastAPI", "REST", "WebSocket"],
  },
  {
    category: "AI & Systems",
    skills: ["LangChain", "RAG Pipelines", "Multi-agent", "Vector DBs", "Embeddings", "FastMCP"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "Firebase", "Appwrite"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "AWS EC2", "Git", "GitHub", "Postman", "Linux"],
  },
  {
    category: "Core CS",
    skills: ["DSA", "OS", "DBMS", "Networks", "OOP"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">Skills</span>
          <h2
            className="text-foreground font-semibold mt-1 mb-12"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Tech Stack
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
            {skillGroups.map(({ category, skills }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + i * 0.07,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <p className="text-[10px] font-mono text-primary tracking-widest uppercase mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
