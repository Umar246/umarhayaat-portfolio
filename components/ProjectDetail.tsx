import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft, FaTimes } from "react-icons/fa";
import { projects } from "@/data";

interface ProjectDetailProps {
  projectId: number;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectId,
  onClose,
}) => {
  const project = projects.find((p) => p.id === projectId);
  const [selectedImage, setSelectedImage] = useState(0);
  if (!project) return null;

  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black-100 hide-scrollbar"
    >
      <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white hover:text-purple transition-colors"
            >
              <FaArrowLeft /> Back to Projects
            </button>
            {/* <button
              onClick={onClose}
              className="text-white hover:text-purple transition-colors"
            >
              <FaTimes size={24} />
            </button> */}
          </div>

          {/* Title & Status */}
          <div className="text-center mb-10 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  {
                    Completed: "bg-green-500/20 text-green-400",
                    default: "bg-yellow-500/20 text-yellow-400",
                  }[project.status] || "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple/20 text-purple">
                {project.category}
              </span>
            </div>
            <p className="text-base sm:text-lg text-white-200 max-w-2xl mx-auto">
              {project.shortDescription}
            </p>
          </div>

          {/* Image & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gallery */}
            <div className="w-full">
              <div className="relative mb-4">
                <img
                  src={project.images[selectedImage]}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  className="w-full h-auto  object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-purple"
                        : "border-transparent hover:border-white/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6 px-2">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-1 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple rounded-full"></div>
                      <span className="text-white-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm py-4 text-purple">
                  Sorry, due to privacy concerns, the live demo is not
                  available. However, you can still explore the source code
                  on GitHub.
                </p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors">
                    <FaGithub /> View Source Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Overview & Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <div className="lg:col-span-2 px-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Project Overview
              </h2>
              <p className="text-white-200 text-sm sm:text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            <div className="px-2">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Technologies Used
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-white-200 text-sm">
                    • {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
