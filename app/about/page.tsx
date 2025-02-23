"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ResumeDownload from "../components/download/ResumeDownload";

const AboutPage = () => {
  const skills = [
    "Bookkeeping",
    "Tax Preparation",
    "Tax Compliance",
    "GIFI Mapping",
    "IRS & CRA Filings",
    "Financial Analysis",
    "QuickBooks",
    "Xero",
    "Oracle ERP",
    "Stripe Atlas",
    "Freshbooks",
    "Pro Connect"
  ];

  const experience = [
    {
      title: "Founder & CEO | Booktax Solutions Inc.",
      company: "Booktax Solutions Inc.",
      period: "2025 - Present",
      description:
        "Providing bookkeeping, tax, and financial advisory services to businesses in the US, Canada, and the UK.",
    },
    {
      title: "Billing Specialist | TCP Software",
      company: "TCP Software",
      period: "2024 - Present",
      description:
        "Overseeing revenue operations, financial reporting, and account reconciliations.",
    },
    {
        title: "Senior Accountant | Cedar Financial",
        company: "Cedar Financials",
        period: "2022 - 2024",
        description:
          "Led accounting, financial statement preparation, and tax compliance.",
      },
      {
        title: "Bookkeeper | Virtuous Bookkeeping",
        company: "Virtuous Bookkeeping Inc.",
        period: "2021 - 2022",
        description:
          "Managed client accounts, reconciliations, and financial records using QuickBooks and Xero.",
      },
  ];

  const education = [
    {
      degree: "BS Accounting & Taxation",
      university: "University of Punjab",
      period: "2021 - 2025",
    },
    {
      degree: "ACCA",
      university: "ACCA",
      period: "2025 - Present",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark_bg to-zinc-900 py-20 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-8 mb-16"
        >
          <div className=" space-y-6">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-gray-200/20 shadow-xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                Hi, I'm Muhammad Umair 👋
              </h1>
              <p className="text-zinc-300 text-lg leading-relaxed">
              A tax and accounting professional specializing in bookkeeping, taxation, FP&A, and financial modeling. As the founder of Booktax Solutions Inc., I help businesses streamline financial operations, optimize tax strategies, and drive growth. With expertise in QuickBooks, Xero, and Oracle ERP, I deliver precision-driven financial solutions for clients across the US, Canada, and the UK.
              </p>
              <Link href="https://www.linkedin.com/in/umair0007/">
                <button className="mt-6 px-6 py-3 bg-bluish/90 hover:bg-bluish flex justify-center items-center gap-3 text-white rounded-lg transition-all">
                  Let's Connect
                  <div>

                  <Linkedin />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code2 className="mr-3 w-8 h-8 text-bluish" />
            Financial Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-lg bg-white/10 rounded-xl p-4 border border-gray-200/20 text-center"
              >
                <span className="text-zinc-300 text-sm font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="mr-3 w-8 h-8 text-bluish" />
              Professional Journey
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-gray-200/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-bluish text-sm mb-2">{exp.company}</p>
                  <p className="text-zinc-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-zinc-300 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 w-8 h-8 text-bluish" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-gray-200/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-bluish text-sm mb-2">{edu.university}</p>
                  <p className="text-zinc-400 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
          <ResumeDownload />
      </div>
    </div>
  );
};

export default AboutPage;
