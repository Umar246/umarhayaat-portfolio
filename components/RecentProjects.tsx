"use client";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import ProjectDetail from "./ProjectDetail";
import { AnimatePresence } from "framer-motion";
import { on } from "events";
const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };
  const handleCloseDetail = () => {
    setSelectedProject(null);
  };
  return (
    <>
      <div className="py-20 text-white" id="projects">
        <h1 className="heading">
          A showcase of my <span className="text-purple">recent projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center 
sm:w-96 w-[80vw] cursor-pointer"
              key={item.id}
              onClick={
                item?.liveLink
                  ? () => window.open(item.liveLink, "_blank")
                  : () => handleProjectClick(item.id)
              }
            >
              <PinContainer
                title={`${
                  item.liveLink ? item.liveLink : "View Details"
                }`}
                href="#"
                className="text-xs shrink-0"
              >
                <div
                  className="relative flex items-center justify-center sm:w-96 w-
[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
                >
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    {/* Background pattern */}
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0"
                    />
                  </div>
                  {/* <div
                    className="z-10 absolute bottom-0 w-full h-16 bg-purple/20
rounded-lg flex items-center justify-center"
                  >
                    <span className="text-purple text-sm">Project Image</span>
                  </div> */}
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.slice(0, 5).map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 
lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      View Details
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            projectId={selectedProject}
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default RecentProjects;
