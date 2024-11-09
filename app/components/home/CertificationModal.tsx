// components/CertificationModal.tsx
"use client";
import React from "react";

interface Certification {
  certificationTitle: string;
  certificationIssuedBy: string;
  certificationIssuedDate: string;
  certificationTags: string | string[];
  certificationDetails: string;
}

const CertificationModal = ({
  certification,
  onClose,
  loading,
}: {
  certification: Certification;
  onClose: () => void;
  loading: boolean;
}) => {
  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-dark_bg p-6 rounded-lg max-w-lg w-full transform transition-transform duration-300 scale-100 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">
          {certification.certificationTitle}
        </h2>
        <div className="flex justify-between mb-3">
          <p className="text-gray-400 text-[12px] mb-1">
            Issued by: {certification.certificationIssuedBy}
          </p>
          <p className="text-gray-400 text-[12px] mb-2">
            Issued: {certification.certificationIssuedDate}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Handle tags as a string or an array */}
          {typeof certification.certificationTags === "string"
            ? certification.certificationTags.split(" ").map((tag, index) => (
                <span key={index} className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full">
                  {tag}
                </span>
              ))
            : certification.certificationTags.map((tag: string, index: number) => (
                <span key={index} className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full">
                  {tag}
                </span>
              ))}
        </div>

        <p className="text-gray-400 mb-4">{certification.certificationDetails}</p>
        
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
