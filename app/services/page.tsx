"use client";
import { motion } from "framer-motion";
import { BadgeCheck, LineChart, LockKeyhole, Scale, Shell, WalletCards } from "lucide-react";
import Link from "next/link";
const ServicesPage = () => {
  const services = [
    {
      title: "Tax Strategy & Consulting",
      icon: <Scale className="w-8 h-8" />,
      description: "Comprehensive tax planning solutions for businesses and individuals",
      features: ["Tax optimization", "Compliance management", "Cross-border taxation", "Audit defense"]
    },
    {
      title: "Financial Planning",
      icon: <LineChart className="w-8 h-8" />,
      description: "Strategic wealth management and investment advisory services",
      features: ["Retirement planning", "Portfolio management", "Risk analysis", "Estate planning"]
    },
    {
      title: "Audit & Assurance",
      icon: <BadgeCheck className="w-8 h-8" />,
      description: "Reliable financial auditing and compliance verification",
      features: ["Internal audits", "Regulatory compliance", "Financial reporting", "Process improvement"]
    },
    {
      title: "Corporate Finance",
      icon: <WalletCards className="w-8 h-8" />,
      description: "Strategic financial solutions for business growth",
      features: ["M&A advisory", "Valuation services", "Capital raising", "Financial modeling"]
    },
    {
      title: "Risk Management",
      icon: <LockKeyhole className="w-8 h-8" />,
      description: "Comprehensive risk assessment and mitigation strategies",
      features: ["Enterprise risk", "Cybersecurity", "Insurance advisory", "Fraud prevention"]
    },
    {
      title: "Digital Finance Solutions",
      icon: <Shell className="w-8 h-8" />,
      description: "Modern financial technology integration",
      features: ["Automation systems", "Cloud accounting", "Blockchain solutions", "AI forecasting"]
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
    <div className="min-h-screen bg-gradient-to-b from-dark_bg to-zinc-900 py-20 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-purplish to-yellowish bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Delivering tailored financial solutions through innovative strategies and cutting-edge technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-gray-200/20 shadow-xl hover:bg-white/15 transition-all"
            >
              <div className="text-purplish mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-zinc-300 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-zinc-400 text-sm">
                    <span className="w-2 h-2 bg-yellowish rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-gray-200/20 mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Custom Solutions for Complex Challenges
            </h3>
            <p className="text-zinc-300 mb-6">
              Have unique financial requirements? Let's develop a personalized strategy for your success.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purplish to-yellowish text-dark_bg font-medium px-8 py-3 rounded-lg"
              >
                Discuss Your Needs
              </motion.button>
            </Link>
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

export default ServicesPage;