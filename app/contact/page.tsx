"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram, Facebook, Globe } from "lucide-react";
import ResumeDownload from "../components/download/ResumeDownload";

const ContactPage = () => {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-8 h-8" />,
      link: "https://www.linkedin.com/in/umair0007/",
      color: "text-[#0A66C2]",
      hover: "hover:bg-[#0A66C2]/10"
    },
    {
      name: "Email",
      icon: <Mail className="w-8 h-8" />,
      link: "mailto:muhammadumairprofessional@outlook.com",
      color: "text-[#EA4335]",
      hover: "hover:bg-[#EA4335]/10"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      link: "https://www.instagram.com/taxwithumair/",
      color: "text-[#E4405F]",
      hover: "hover:bg-[#E4405F]/10"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-8 h-8" />,
      link: "https://www.facebook.com/jannat.chauhan.90260",
      color: "text-[#1877F2]",
      hover: "hover:bg-[#1877F2]/10"
    },
    {
      name: "Resume",
      icon: <Globe className="w-8 h-8" />,
      link: "./muhammad_umair_resume.pdf",
      color: "text-purplish",
      hover: "hover:bg-purplish/10"
    }
  ];

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-b from-dark_bg to-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-purplish to-yellowish bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Reach out through professional networks or explore my online presence
          </p>
        </motion.div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-gray-200/20 shadow-xl ${platform.hover} transition-all duration-300`}
            >
              <div className={`mb-4 ${platform.color}`}>
                {platform.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {platform.name}
              </h3>
              <p className="text-zinc-300 text-sm">
                {platform.link.includes('mailto') 
                  ? "Direct professional communication"
                  : `Connect via ${platform.name}`}
              </p>
              <div className="mt-4">
                <span className="inline-block text-sm text-zinc-400 group-hover:text-white transition-colors">
                  Visit Profile →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        <ResumeDownload />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-gray-200/20 mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Preferred Communication?
            </h3>
            <p className="text-zinc-300 mb-6">
              Feel free to connect through any platform that suits you best.
              Typically respond within 24 hours.
            </p>
            <div className="flex justify-center gap-4">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-zinc-400 text-sm">
                Available for new connections
              </span>
            </div>
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-purplish/10 rounded-full blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 w-72 h-72 bg-yellowish/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;