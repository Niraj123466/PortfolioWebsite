import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Intern",
    company: "Scrobits Technologies LLP",
    period: "Nov 2024 – Present",
    location: "Pune",
    points: [
      "Built MahaAMRUT AI Chatbot — production-grade multi-agent system for Maharashtra's government tourism initiative, serving citizen queries in English & Marathi",
      "Engineered a 3-tier caching architecture (SQL template + Redis result + semantic cosine-similarity cache) achieving 70%+ cache hit rate and sub-5s response times",
      "Implemented RAG pipeline with hybrid vector backends (Weaviate + Pinecone) and human-in-the-loop WebSocket escalation for real-time admin handoff",
      "Built standalone FastMCP server with Google Gemini embeddings and 4 specialized agent prompts (Query, Analyst, Reranker, Evaluator)",
      "Containerized with Docker Compose and deployed on AWS EC2; stack: Python, LangChain, Supabase (PostgreSQL), Redis, Docker",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Coneixement India Pvt Ltd",
    period: "Jan 2025 – June 2025",
    location: "Pune",
    points: [
      "Built scalable features in College Shodh using Next.js, enhancing performance and responsiveness",
      "Designed RESTful APIs and optimized request handling to support concurrent user load",
      "Ensured fault-tolerance and data accuracy by integrating robust backend validation and error handling",
      "Collaborated cross-functionally in Agile sprints to deliver critical modules",
    ],
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-surface/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10 glow-primary" />

              {/* Card */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-mono text-xs">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exp.company} · {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
