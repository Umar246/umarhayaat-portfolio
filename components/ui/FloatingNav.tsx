"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"; // Changed from "motion/react"
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // Set initial visibility to true
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Always show navbar when at the very top
      if (current <= 0) {
        setVisible(true);
        return;
      }

      const previous = scrollYProgress.getPrevious() ?? 0;
      const direction = current - previous;

      // Show on scroll up, hide on scroll down
      if (direction < 0) {
        setVisible(true);
      } else {
        // Only hide if we're not at the very top
        if (current > 0.1) {
          setVisible(false);
        }
      }
    }
  });

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    if (link.startsWith("#")) {
      const targetId = link.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100; // Adjust offset as needed
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-10  inset-x-0 mx-auto border border-white/[0.2] bg-black-100 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 md:px-10 py-5 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              onClick={(e) => handleSmoothScroll(e, navItem.link)}
              className={cn(
                "relative cursor-pointer text-neutral-50 items-center flex md:space-x-1  hover:text-neutral-300 "
              )}
              // onClick={(e) => {
              //   // Prevent default to handle smooth scroll manually
              //   e.preventDefault();
              //   const target = document.querySelector(navItem.link);
              //   if (target) {
              //     target.scrollIntoView({ behavior: 'smooth' });
              //   }
              // }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-xs md:text-sm">{navItem.name}</span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
