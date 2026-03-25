import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />

    <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
      <AboutSection />
    </motion.div>

    <SectionDivider />

    <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
      <ExperienceTimeline />
    </motion.div>

    <SectionDivider flip />

    <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
      <ProjectsSection />
    </motion.div>

    <SectionDivider />

    <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
      <SkillsSection />
    </motion.div>

    <SectionDivider flip />

    <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
      <AchievementsSection />
    </motion.div>

    <SectionDivider />

    <motion.div custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
      <LeadershipSection />
    </motion.div>

    <SectionDivider flip />

    <motion.div custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
      <ContactSection />
    </motion.div>

    <Footer />
  </div>
);

export default Index;
