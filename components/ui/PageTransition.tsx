// PageTransition.tsx
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode; // Especifica el tipo de children
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence>
      <div  key={pathname}>
      <motion.div
       
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
      
      />
      {children}

      </div>
     
    </AnimatePresence>
  );
};