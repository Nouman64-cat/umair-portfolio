// components/Projects.tsx
"use client";
import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";

import { fetchAllProjects, fetchProjectById } from "@/graphql";
import { Project } from "@/app/interfaces/projects";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch all projects on component mount
    const getProjects = async () => {
      const data = await fetchAllProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  // Fetch specific project by ID for the modal
  const openModal = async (id: string) => {
    setLoading(true);
    const project = await fetchProjectById(id);
    setSelectedProject(project);
    setLoading(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section className="py-12 bg-dark_bg text-white px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purplish via-bluish to-pinkish bg-clip-text text-transparent">
          Our Projects
        </h2>
        <p className="text-gray-400 mt-2">
          Explore some of the impactful projects we've delivered for our clients.
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-subdark p-6 rounded-lg text-white shadow-lg w-full md:w-1/3"
          >
            <h3 className="text-2xl text-zinc-400 font-medium mb-2">{project.projectTitle}</h3>
            <p className="text-gray-400 text-[12px] mb-2">Completed: {project.projectDate}</p>
            <p className="text-gray-400 text-[12px] mb-4">{project.projectShortDescription}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {/* Split tags into an array and map them */}
              {typeof project.projectTags === "string"
                ? project.projectTags.split(" ").map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))
                : project.projectTags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
            </div>
            <button
              onClick={() => openModal(project.id)} // Fetch specific project on click
              className="bg-purplish text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-purple-600 transition mt-6"
            >
              View detail →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} loading={loading} />
      )}
    </section>
  );
};

export default Projects;
