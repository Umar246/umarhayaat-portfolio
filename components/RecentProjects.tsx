"use client";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { projects } from "@/data";
import ProjectDetail from "./ProjectDetail";
import { AnimatePresence, motion } from "framer-motion";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import MagicButton from "./ui/MagicButton";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  const handleLiveView = (e: React.MouseEvent, liveLink: string) => {
    e.stopPropagation();
    window.open(liveLink, "_blank");
  };

  const handleGithubView = (e: React.MouseEvent, githubLink: string) => {
    e.stopPropagation();
    window.open(githubLink, "_blank");
  };

  // Decide which projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <div className="py-20 mt-10 md:mt-20 text-white" id="projects">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="heading mb-4">
            A showcase of my{" "}
            <span className="text-purple">recent projects</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
            Explore my latest work featuring modern web applications, mobile
            solutions, and innovative digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {displayedProjects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredProject(item.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-full">
                <div className="relative h-32 md:h-64 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === item.id ? 1 : 0,
                      y: hoveredProject === item.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 flex gap-3 z-10"
                  >
                    {item.liveLink && (
                      <button
                        onClick={(e) => handleLiveView(e, item.liveLink!)}
                        className="flex-1 flex items-center justify-center gap-2 px-2 py-2 bg-purple-600/90 hover:bg-purple-700 cursor-pointer text-white rounded-lg transition-colors duration-200 backdrop-blur-sm"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span className="text-sm font-medium">
                          <span className="hidden md:inline">Live</span> Demo
                        </span>
                      </button>
                    )}
                    <button
                      onClick={(e) => handleGithubView(e, item.githubLink)}
                      className="flex-1 flex items-center justify-center gap-2 px-2 py-2 bg-gray-700/70 hover:bg-gray-700 text-white cursor-pointer rounded-lg transition-colors duration-200 backdrop-blur-sm"
                    >
                      <FaGithub className="w-3 h-3" />
                      <span className="text-sm font-medium hidden md:inline">
                        Code
                      </span>
                    </button>
                    {!item.liveLink && (
                      <button
                        onClick={() => handleProjectClick(item.id)}
                        className="px-4 py-2 bg-purple-600/90 hover:bg-purple-700 cursor-pointer text-white rounded-lg transition-colors flex items-center justify-center gap-2 flex-1 duration-200 backdrop-blur-sm"
                      >
                        <FaEye className="w-3 h-3" />
                        <span className="text-sm font-medium">Details</span>
                      </button>
                    )}
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.shortDescription}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30">
                          +{item.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-end pt-3">
                    <span
                      className={`px-8 py-2 rounded-full w-full text-center md:w-auto text-xs font-medium backdrop-blur-sm ${
                        item.status === "Completed"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-14"
        >
          {/* <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? (
              <MdExpandLess className="w-4 h-4" />
            ) : (
              <MdExpandMore className="w-4 h-4" />
            )}
          </button> */}

          <MagicButton
            title={showAll ? "Show Less" : "Show More"}
            icon={
              showAll ? (
                <MdExpandLess className="w-4 h-4" />
              ) : (
                <MdExpandMore className="w-4 h-4" />
              )
            }
            position="right"
            otherClasses="gap-2 px-6 py-3 text-base"
            handleClick={() => setShowAll(!showAll)}
          />

          {/* <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
          >
            <span className="font-medium">Start a Project</span>
            <FaLocationArrow className="w-4 h-4" />
          </a> */}
        </motion.div>
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
