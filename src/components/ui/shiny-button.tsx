"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, type AnimationProps } from "framer-motion";
import React from "react";

// Enhanced glass shine animation properties
const animationProps = {
  initial: { "--x-pos": "100%", scale: 0.98 },
  animate: { "--x-pos": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1.5,
    duration: 1.8,
    ease: [0.4, 0, 0.2, 1], // Custom easing for smoother glass effect
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium transition-all duration-300 ease-in-out",
        "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10",
        "shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]",
        "dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]",
        className,
      )}
      style={{
        "--x-pos": "100%",
      } as React.CSSProperties}
      {...animationProps}
      {...props}
    >
      {/* Content layer */}
      <span className="relative z-20 block text-sm uppercase tracking-wide text-foreground/90 font-medium mix-blend-overlay dark:mix-blend-normal">
        {children}
      </span>
      
      {/* Glass reflection - main shine effect */}
      <span
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black, black)",
          maskImage: "linear-gradient(to bottom, black, black)"
        } as React.CSSProperties}
      >
        <span 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(255, 255, 255, 0) 20%, 
                        rgba(255, 255, 255, 0.7) 25%, 
                        rgba(255, 255, 255, 0) 30%, 
                        transparent 100%)`,
            transform: "translateX(var(--x-pos))",
            backgroundSize: "200% 100%",
          } as React.CSSProperties}
        />
      </span>
      
      {/* Glass edge highlight */}
      <span
        className="absolute inset-0 rounded-[inherit] p-px z-10 opacity-50"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.1))",
        } as React.CSSProperties}
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton"; 