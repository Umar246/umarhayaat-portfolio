"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import {
  FaLocationArrow,
  FaDownload,
  // FaGithub,
  // FaLinkedin,
} from "react-icons/fa6";
import { motion } from "framer-motion";
const Hero = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    if (link.startsWith("#")) {
      const targetId = link.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Umar Hayaat_Resume.pdf";
    link.download = "Umar_Hayaat_CV.pdf";
    link.click();
  };
  return (
    <div
      className="pb-20 pt-36 relative min-h-screen flex items-center"
      id="hero"
    >
      {/* Enhanced Background container */}
      <div className="absolute inset-0 z-0">
        {/* Multiple Spotlight effects for better visual appeal */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vh]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
          <Spotlight
            className="top-40 right-10 h-[60vh] w-[40vh]"
            fill="cyan"
          />
        </div>
        {/* Enhanced Grid background with gradient overlay */}
        <div className="relative flex h-full w-full items-center justify-center dark:bg-grid-white/[0.2] bg-white dark:bg-black-100">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:60px_60px]",
              "[background-image:lineargradient(to_right,#e4e4e7_1px,transparent_1px),lineargradient(to_bottom,#e4e4e7_1px,transparent_1px)]",

              "dark:[background-image:lineargradient(to_right,#262626_1px,transparent_1px),lineargradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />

          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radialgradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
          {/* Floating particles animation */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced Content with animations */}
      <div className="flex justify-center relative z-10 w-full">
        <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col items-center justify-center text-center">
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bggradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>

              <span className="text-sm text-purple-300 font-medium">
                Available for Freelance Projects
              </span>
            </div>
          </motion.div>
          {/* Main Heading with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            {/* <h1 className="text-4xl md:text-6xl text-white lg:text-7xl font-bold bggradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text  leading-tight">
              Muhammad Umar Hayaat
            </h1> */}
          </motion.div>
          {/* Professional Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-300 font-semibold">
              MERN Stack & React Native Developer
            </h2>
            <div className="flex items-center justify-center mt-2 space-x-2">
              <span className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"></span>
              <span className="text-blue-300 text-sm font-medium">
                2+ Years Experience
              </span>
              <span className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </div>
          </motion.div>
          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <TextGenerateEffect
              className="text-center text-lg md:text-xl lg:text-2xl max-w-4xl"
              words="Transforming Ideas into Powerful Digital Solutions with Modern Web & Mobile Technologies"
            />
            <p className="text-center text-gray-300 md:tracking-wider mt-4 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              I&apos;m Umar Hayaat, passionate about creating seamless user
              experiences through innovative web applications and mobile
              solutions. Specialized in building scalable, performance-optimized
              applications using the latest technologies.
            </p>
          </motion.div>
          {/* Tech Stack Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-5 md:mb-0"
          >
            <p className="text-purple-300 text-sm mb-3 font-medium">
              SPECIALIZED IN
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "React Native",
                "TypeScript",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/20 toblue-500/20 border border-purple-500/30 rounded-full text-sm text-purple-200 backdrop-blur-sm hover:scale-105 transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-center justifycenter mb-8"
          >
            <a onClick={(e) => handleSmoothScroll(e, "#projects")}>
              <MagicButton
                title="View My Projects"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="gap-2 px-6 py-3 text-base"
              />
            </a>
            <button
              onClick={handleDownloadCV}
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-purple-500/50 text-purple-300 md:mt-10 rounded-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              <FaDownload className="w-4 h-4 group-hover:animate-bounce" />
              <span className="font-medium">Download CV</span>
            </button>
          </motion.div>
          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/Umar246"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20to-blue-500/20 border border-purple-500/30 text-purple-300 hover:text-white
hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/umarhayaat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20
to-blue-500/20 border border-purple-500/30 text-purple-300 hover:text-white
hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </motion.div> */}
          {/* Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-purple-500/50 rounded-full
flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-purple-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
