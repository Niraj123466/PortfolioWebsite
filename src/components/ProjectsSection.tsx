import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Layers, MessageSquare, Database } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Resume Screening Assistant",
    problem: "Recruiters struggle to manually match resumes with job descriptions.",
    solution: "Built an NLP-based system using BERT to compute semantic similarity.",
    tech: ["React.js", "Node.js", "Python (NLP)", "Firebase", "Razorpay"],
    impact: ["Automated resume screening", "SaaS with payment integration", "🏆 3rd place Hackathon"],
    icon: Layers,
    category: "AI",
    github: "https://github.com/Niraj123466/AI-Powered-Resume-Screening",
  },
  {
    title: "Anonymous Messaging Platform",
    problem: "Users want anonymous, secure communication platforms.",
    solution: "Built a real-time chat application with authentication and AI-assisted replies.",
    tech: ["Next.js", "NextAuth", "Tailwind CSS"],
    impact: ["Real-time messaging system", "ChatGPT smart replies", "Privacy & concurrency"],
    icon: MessageSquare,
    category: "Full Stack",
    github: "https://github.com/Niraj123466/Anonymous-messages",
  },
  {
    title: "Google Drive MCP Server",
    problem: "AI systems cannot easily access private structured knowledge.",
    solution: "Built MCP server enabling AI to query Google Drive data using semantic search.",
    tech: ["Python", "FastMCP", "Google Drive API", "Gemini", "Pinecone"],
    impact: ["Two-stage retrieval pipeline", "Improved accuracy", "Reduced retrieval cost"],
    icon: Database,
    category: "AI",
    github: "https://github.com/Niraj123466/gdrivemcp",
  },
];

const categories = ["All", "AI", "Full Stack"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Things I've <span className="text-gradient">Built</span>
          </h2>

          <div className="flex gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {filtered.map((project, i) => (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300 flex flex-col cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = ((y - rect.height / 2) / rect.height) * -8;
                const rotateY = ((x - rect.width / 2) / rect.width) * 8;
                e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <project.icon className="w-8 h-8 text-primary" />
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-1">
                <span className="text-primary font-mono text-xs">Problem:</span> {project.problem}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="text-primary font-mono text-xs">Solution:</span> {project.solution}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-secondary text-muted-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-1">
                {project.impact.map((imp) => (
                  <li key={imp} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {imp}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
