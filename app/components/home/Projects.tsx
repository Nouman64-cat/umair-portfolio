// components/Projects.tsx
"use client";
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Inspection and Testing",
    description:
      "Ensure safety, quality, and compliance with our thorough inspection and testing services.",
    details:
      "Our advanced facilities and skilled professionals deliver accurate evaluations, helping you meet standards and safeguard your business. Trust us for reliable results.",
    completionDate: "March 2023",
    hashtags: ["#Safety", "#QualityControl", "#Compliance", "#Inspection", "#RiskAssessment", "#Industrial"],
  },
  {
    title: "Training and Certification",
    description:
      "Equip your team with top skills through our comprehensive training programs.",
    details:
      "We offer certifications to ensure your workforce has the latest knowledge and best practices. Achieve excellence and lead your field with our expert-led courses.",
    completionDate: "July 2023",
    hashtags: ["#Education", "#SkillDevelopment", "#Certification", "#WorkforceTraining", "#ProfessionalGrowth", "#Learning"],
  },
  {
    title: "Consulting",
    description:
      "Unlock your business’s potential with our expert consulting. We provide custom solutions.",
    details:
      "From planning to execution, we’re here to support your journey to lasting success.",
    completionDate: "October 2023",
    hashtags: ["#Business", "#Consulting", "#Strategy", "#Growth", "#Planning", "#Innovation", "#Optimization"],
  },
];

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 py-8 mt-10 bg-dark_bg px-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-subdark p-6 rounded-lg text-white shadow-lg w-full md:w-1/3"
        >
          <h3 className="text-2xl text-zinc-400 font-medium mb-2">{project.title}</h3>
          <p className="text-gray-400 text-[12px] mb-2">Completed: {project.completionDate}</p>
          <p className="text-gray-400 text-[12px] mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.hashtags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => openModal(project)}
            className="bg-purplish text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-purple-600 transition mt-6"
          >
            View detail →
          </button>
        </div>
      ))}

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
