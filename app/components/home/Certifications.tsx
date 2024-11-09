// components/Certifications.tsx
"use client";
import React, { useState, useEffect } from "react";
import CertificationModal from "./CertificationModal";
import { Certification } from "@/app/interfaces/certification";
import { fetchCertificationById, fetchCertifications } from "@/graphql";

const Certifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCertifications = async () => {
      const data = await fetchCertifications();
      setCertifications(data);
    };

    getCertifications();
  }, []);

  const openModal = async (id: string) => {
    setLoading(true);
    console.log(id)
    const certification = await fetchCertificationById(id);
    setSelectedCertification(certification);
    setLoading(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCertification(null);
    setModalOpen(false);
  };

  return (
    <section className="py-12 bg-dark_bg text-white px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purplish via-bluish to-pinkish">
          Our Certifications
        </h2>
        <p className="text-gray-400 mt-2">
          Recognitions and credentials that showcase our expertise and
          commitment to quality.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="bg-subdark p-6 rounded-lg text-white shadow-lg w-full md:w-1/3"
          >
            <h3 className="text-2xl text-zinc-400 font-medium mb-2">
              {certification.certificationTitle}
            </h3>
            <div className="flex justify-between">
              <p className="text-gray-400 text-[12px] mb-1">
                Issued by: {certification.certificationIssuedBy}
              </p>
              <p className="text-gray-400 text-[12px] mb-2">
                Issued: {certification.certificationIssuedDate}
              </p>
            </div>
            <p className="text-gray-400 text-[12px] mb-4">
              {certification.certificationShortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {(typeof certification.certificationTags === "string"
                ? certification.certificationTags.split(" ")
                : certification.certificationTags
              ).map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => openModal(certification.id)}
              className="bg-purplish text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-purple-600 transition mt-6"
            >
              View detail →
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCertification && (
        <CertificationModal
          certification={selectedCertification}
          onClose={closeModal}
          loading={loading}
        />
      )}
    </section>
  );
};

export default Certifications;
