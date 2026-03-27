import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground grid-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 px-4"
      >
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-card border border-border mb-8 glow-border">
          <Compass className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tighter text-gradient">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Lost in Space
        </h2>
        
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another universe.
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all glow-primary"
        >
          <Home className="w-5 h-5" />
          Return to Base
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
