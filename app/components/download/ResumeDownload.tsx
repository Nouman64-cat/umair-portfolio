"use client";
import { motion } from "framer-motion";
import { DownloadCloud } from "lucide-react";

const ResumeDownload = () => {
  const resumeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const handleDownload = () => {
    // Using standard anchor tag download
    const link = document.createElement("a");
    link.href = "/muhammad_umair_resume.pdf";
    link.download = "Muhammad_Umair_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={resumeVariants}
      className="backdrop-blur-lg bg-white/10 mt-10 rounded-xl p-8 border border-gray-200/20 shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purplish mb-4"
          >
            <DownloadCloud className="w-12 h-12" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            Download Resume
          </h3>
          <p className="text-zinc-300 text-sm max-w-md">
            Get a comprehensive overview of my professional experience,
            technical skills, and educational background in PDF format.
          </p>
        </div>

        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={resumeVariants}
          onClick={handleDownload}
          className="w-full max-w-xs bg-gradient-to-r from-purplish via-purplish/80 to-purplish_dark hover:from-purplish/90 hover:via-purplish/70 hover:to-purplish_dark/90 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all group"
        >
          <DownloadCloud className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="group-hover:translate-x-1 transition-transform">
            Download PDF
          </span>
        </motion.button>

        <p className="text-zinc-400 text-xs mt-2">
          File size: 1.2MB • Updated: August 2024
        </p>
      </div>
    </motion.div>
  );
};

export default ResumeDownload;
