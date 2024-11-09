// components/Certifications.tsx
"use client";
import React, { useState } from "react";
import CertificationModal from "./CertificationModal";


const certifications = [
  {
    title: "Certified Web Developer",
    issuer: "Coursera",
    issueDate: "August 2022",
    description:
      "A comprehensive certification covering front-end and back-end development skills.",
    details:
      "This certification includes extensive coursework in HTML, CSS, JavaScript, and frameworks such as React and Node.js. It also covers best practices in responsive design, performance optimization, and web security.",
    credentialsLink: "https://example.com/certificate/12345",
    tags: ["#WebDevelopment", "#FullStack", "#JavaScript", "#React"],
  },
  {
    title: "Data Science Professional",
    issuer: "IBM",
    issueDate: "May 2023",
    description:
      "Specialized training in data analysis, machine learning, and data visualization.",
    details:
      "This certification focuses on data science techniques, including data wrangling, statistical analysis, machine learning, and visualization using Python and associated libraries.",
    credentialsLink: "https://example.com/certificate/67890",
    tags: ["#DataScience", "#MachineLearning", "#DataAnalysis"],
  },
  {
    title: "Project Management Professional",
    issuer: "PMI",
    issueDate: "January 2023",
    description:
      "Advanced project management techniques and industry best practices.  according to PMI standards.",
    details:
      "This certification covers all aspects of project management, including initiation, planning, execution, monitoring, and closing, according to PMI standards.",
    tags: ["#ProjectManagement", "#PMI", "#Leadership", "#Planning"],
  },
];

const Certifications = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);

  const openModal = (certification: any) => {
    setSelectedCertification(certification);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCertification(null);
    setModalOpen(false);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 py-8 mt-10 bg-dark_bg px-4">
      {certifications.map((certification, index) => (
        <div
          key={index}
          className="bg-subdark p-6 rounded-lg text-white shadow-lg w-full md:w-1/3"
        >
          <h3 className="text-2xl text-zinc-400 font-medium mb-2">{certification.title}</h3>
          <div className="flex justify-between">
            <p className="text-gray-400 text-[12px] mb-1">Issued by: {certification.issuer}</p>
            <p className="text-gray-400 text-[12px] mb-2">Issued: {certification.issueDate}</p>
          </div>
          <p className="text-gray-400 text-[12px] mb-4">{certification.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {certification.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => openModal(certification)}
            className="bg-purplish text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-purple-600 transition"
          >
            View details →
          </button>
        </div>
      ))}

      {isModalOpen && selectedCertification && (
        <CertificationModal certification={selectedCertification} onClose={closeModal} />
      )}
    </section>
  );
};

export default Certifications;
