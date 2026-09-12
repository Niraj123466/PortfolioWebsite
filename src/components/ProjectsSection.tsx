import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "MahaAMRUT AI Chatbot",
    tagline: "Production-grade multi-agent system for Maharashtra government tourism.",
    description:
      "Built a government-deployed AI chatbot serving citizen queries in English & Marathi. Architected a 3-tier caching system (SQL template + Redis + semantic cosine-similarity) achieving 70%+ cache hit rate and sub-5s response times. Implemented RAG with hybrid vector backends and real-time WebSocket escalation to human agents.",
    tech: "Python · LangChain · FastMCP · Weaviate · Pinecone · Redis · Docker · AWS EC2",
    category: "AI Systems",
    github: null,
    live: null,
    featured: true,
  },
  {
    num: "02",
    title: "AI-Powered Resume Screening",
    tagline: "NLP system that semantically matches resumes to job descriptions.",
    description:
      "Built an NLP-based SaaS platform using BERT to compute semantic similarity between resumes and job descriptions. Integrated Razorpay for payment processing. Won 3rd place at Hacksprints 6.0 hackathon.",
    tech: "React.js · Node.js · Python · Firebase · Razorpay · BERT",
    category: "AI · Full Stack",
    github: "https://github.com/Niraj123466/AI-Powered-Resume-Screening",
    live: null,
    featured: true,
  },
  {
    num: "03",
    title: "Google Drive MCP Server",
    tagline: "Enables AI agents to query private structured knowledge semantically.",
    description:
      "Built a Model Context Protocol server enabling AI systems to access private Google Drive data through semantic search. Implemented a two-stage retrieval pipeline for improved accuracy and reduced retrieval cost using Gemini embeddings.",
    tech: "Python · FastMCP · Google Drive API · Gemini · Pinecone",
    category: "AI Infrastructure",
    github: "https://github.com/Niraj123466/gdrivemcp",
    live: null,
    featured: false,
  },
  {
    num: "04",
    title: "Anonymous Messaging Platform",
    tagline: "Real-time anonymous communication with AI-assisted replies.",
    description:
      "Full-stack application with authentication, real-time messaging, and ChatGPT-powered smart reply suggestions. Focused on privacy, concurrency handling, and responsive design.",
    tech: "Next.js · NextAuth · Tailwind CSS · ChatGPT API",
    category: "Full Stack",
    github: "https://github.com/Niraj123466/Anonymous-messages",
    live: null,
    featured: false,
  },
];

const ProjectCard = ({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.1 + index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 pt-10 pb-12 border-t border-border"
    >
      {/* Left column — project metadata */}
      <div className={`${isEven ? "" : "md:order-2"}`}>
        <span
          className="project-number select-none"
          aria-hidden="true"
        >
          {project.num}
        </span>
        <div className="mt-2">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
            {project.category}
          </span>
          <div className="flex items-center gap-3 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors duration-200 hover-underline"
                aria-label={`GitHub repository for ${project.title}`}
              >
                GitHub
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors duration-200 hover-underline"
                aria-label={`Live demo of ${project.title}`}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right column — content */}
      <div className={`${isEven ? "" : "md:order-1"}`}>
        <h3
          className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 font-medium">
          {project.tagline}
        </p>
        <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        <p className="text-xs text-muted-foreground/60 font-mono">{project.tech}</p>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4"
        >
          <span className="section-label">Work</span>
          <h2
            className="text-foreground font-semibold mt-1"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Selected Projects
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="mt-4">
          {featured.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* More work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-10 border-t border-border"
        >
          <p className="text-label mb-0">More Work</p>
        </motion.div>

        <div>
          {more.map((project, i) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={i + featured.length}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
