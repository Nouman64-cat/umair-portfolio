// components/ProjectModal.tsx
"use client";
import React from "react";

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-dark_bg p-6 rounded-lg max-w-2xl w-full transform transition-transform duration-300 scale-100 shadow-xl">
        <h2 className="text-2xl font-medium text-white mb-4">{project.title}</h2>
        <p className="text-gray-400 text-[12px] mb-2">Completed: {project.completionDate}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.hashtags.map((tag: string, index: number) => (
            <span key={index} className="text-xs bg-gray-700 text-white font-normal py-1 px-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 mb-6">{project.details}</p>
        <button
          onClick={onClose}
          className="bg-purplish text-white font-medium py-2 px-4 rounded-md hover:bg-purple-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
