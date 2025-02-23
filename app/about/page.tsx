"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "GraphQL",
    "AWS",
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc",
      period: "2021 - Present",
      description:
        "Leading development of enterprise-level web applications and mentoring junior developers.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2019 - 2021",
      description:
        "Developed responsive web interfaces and collaborated with UX teams to implement design systems.",
    },
  ];

  const education = [
    {
      degree: "MSc Computer Science",
      university: "Stanford University",
      period: "2017 - 2019",
    },
    {
      degree: "BSc Software Engineering",
      university: "MIT",
      period: "2013 - 2017",
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
                Hi, I'm Umair Aslam 👋
              </h1>
              <p className="text-zinc-300 text-lg leading-relaxed">
                A passionate full-stack developer with 6+ years of experience in
                creating scalable web applications. Specialized in modern
                JavaScript ecosystems and cloud-native architectures. I bridge
                the gap between technical excellence and business value,
                delivering solutions that drive measurable results.
              </p>
              <button className="mt-6 px-6 py-3 bg-bluish/90 hover:bg-bluish text-white rounded-lg transition-all">
                Let's Connect
              </button>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code2 className="mr-3 w-8 h-8 text-bluish" />
            Technical Expertise
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

        {/* Footer Note */}
        <div className="mt-16 text-center text-zinc-400 text-sm">
          <p>© 2024 Umair Aslam. All rights reserved.</p>
          <p className="mt-2">
            Continuously learning and growing in the ever-evolving world of
            technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
