// components/CertificationModal.tsx
"use client";
import React from "react";
import { FaLink } from "react-icons/fa6";

const CertificationModal = ({
  certification,
  onClose,
}: {
  certification: any;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-dark_bg p-6 rounded-lg max-w-2xl w-full transform transition-transform duration-300 scale-100 shadow-xl">
        <div className="flex items-center mb-4">
          {certification.credentialsLink ? (
            <a
              href={certification.credentialsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purplish flex items-center transition"
            >
              <h2 className="text-2xl font-bold text-inherit">
                {certification.title}
              </h2>
              <FaLink className="ml-2 text-2xl mb-2" />
            </a>
          ) : (
            <h2 className="text-2xl font-bold text-white">{certification.title}</h2>
          )}
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-gray-400 text-[12px] mb-1">
            Issued by: {certification.issuer}
          </p>
          <p className="text-gray-400 text-[12px] mb-2">
            Issued: {certification.issueDate}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {certification.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 mb-4">{certification.details}</p>
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

export default CertificationModal;
