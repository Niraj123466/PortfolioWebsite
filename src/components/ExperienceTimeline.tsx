import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "AI Intern",
    company: "Scrobits Technologies LLP",
    period: "Nov 2024 – Present",
    location: "Pune",
    current: true,
    points: [
      "Built MahaAMRUT AI Chatbot — production-grade multi-agent system for Maharashtra's government tourism initiative, serving citizen queries in English & Marathi.",
      "Engineered a 3-tier caching architecture (SQL template + Redis result + semantic cosine-similarity cache) achieving 70%+ cache hit rate and sub-5s response times.",
      "Implemented RAG pipeline with hybrid vector backends (Weaviate + Pinecone) and human-in-the-loop WebSocket escalation for real-time admin handoff.",
      "Built standalone FastMCP server with Google Gemini embeddings and 4 specialized agent prompts (Query, Analyst, Reranker, Evaluator).",
      "Containerized with Docker Compose and deployed on AWS EC2; stack: Python, LangChain, Supabase (PostgreSQL), Redis, Docker.",
    ],
    tech: ["Python", "LangChain", "FastMCP", "Redis", "Weaviate", "Pinecone", "Docker", "AWS"],
  },
  {
    role: "Full Stack Development Intern",
    company: "Coneixement India Pvt Ltd",
    period: "Jan 2025 – Jun 2025",
    location: "Pune",
    current: false,
    points: [
      "Built scalable features in College Shodh using Next.js, enhancing performance and responsiveness.",
      "Designed RESTful APIs and optimized request handling to support concurrent user load.",
      "Ensured fault-tolerance and data accuracy by integrating robust backend validation and error handling.",
      "Collaborated cross-functionally in Agile sprints to deliver critical modules.",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "REST API"],
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">Experience</span>
          <h2
            className="text-foreground font-semibold mt-1 mb-12"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Where I've Worked
          </h2>

          {/* Timeline */}
          <div className="relative pl-6 md:pl-8">
            {/* Left edge line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`relative pb-14 ${i < experiences.length - 1 ? "border-b border-border/50 mb-14" : ""}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-6 md:-left-8 top-1.5 w-2 h-2 rounded-full border border-border ${
                    exp.current ? "bg-primary" : "bg-surface"
                  }`}
                  style={{ transform: "translateX(-50%)" }}
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    <h3
                      className="text-foreground font-semibold"
                      style={{ fontSize: "1.05rem", letterSpacing: "-0.015em" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {exp.company}
                      <span className="text-border mx-2">·</span>
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-primary/10 text-primary text-[10px] font-mono font-medium">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[0.875rem] text-muted-foreground leading-relaxed"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-primary/60 mt-[0.45rem] shrink-0"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
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

export default ExperienceTimeline;
