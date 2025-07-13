"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

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
          const offsetTop = targetElement.offsetTop - 100; // Adjust offset as needed
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    };
  return (
    <div className="pb-20 pt-36 relative" id="hero">
      {/* Background container with z-0 to position behind content */}
      <div className="absolute inset-0 z-0">
        {/* Spotlight effects */}
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
        </div>

        {/* Grid background */}
        <div className="relative flex h-screen w-full items-center justify-center dark:bg-grid-white/[0.3] bg-white dark:bg-black-100">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:60px_60px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient overlay */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        </div>
      </div>

      {/* Content with higher z-index to appear above background */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-whiten uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[23px] md:text-3xl lg:text-5xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center text-white md:tracking-wider my-4 text-sm md:text-lg">
            Hi I&apos;m Umar Hayaat, a MERN Stack Developer based in Pakistan.
          </p>
          <a  onClick={(e) => handleSmoothScroll(e, "#projects")}>
            <MagicButton
              title="Explore my work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="gap-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;