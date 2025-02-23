"use client";
import { motion } from "framer-motion";
import { BookOpenText, Scale, LineChart } from "lucide-react";
import Link from "next/link";
import ResumeDownload from "../components/download/ResumeDownload";

const ServicesPage = () => {
    const staggerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1 }
        })
      };
  const services = [
    {
      title: "Bookkeeping & Accounting",
      icon: <BookOpenText className="w-8 h-8" />,
      description: "Seamless financial record-keeping for businesses of all sizes",
      features: [
        "Financial statement preparation",
        "Bank & credit card reconciliation",
        "Accounts payable & receivable management",
        "Payroll processing",
        "Month-end & year-end closing"
      ]
    },
    {
      title: "Tax Preparation & Compliance",
      icon: <Scale className="w-8 h-8" />,
      description: "Expert tax solutions to minimize liabilities and ensure compliance",
      features: [
        "Individual & business tax returns",
        "Sales tax & VAT filing",
        "Tax planning & strategy",
        "IRS & CRA compliance",
        "Audit support & representation"
      ]
    },
    {
      title: "Virtual CFO Services",
      icon: <LineChart className="w-8 h-8" />,
      description: "Strategic financial leadership to help businesses grow",
      features: [
        "Financial forecasting & budgeting",
        "Cash flow management",
        "Business performance analysis",
        "Investment & funding strategy",
        "Profitability improvement"
      ]
    }
  ];

  // ... keep the existing motion configurations and other code the same ...

  return (
    <div className="min-h-screen bg-gradient-to-b mt-10 from-dark_bg to-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Updated Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Empowering <span className="bg-gradient-to-r from-purplish to-yellowish bg-clip-text text-transparent">Businesses</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            With accurate financial management and strategic insights for sustainable growth
          </p>
        </motion.div>

        {/* Services Grid - Now using the actual services data */}
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

        {/* Updated CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-gray-200/20 mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Tailored Financial Solutions
            </h3>
            <p className="text-zinc-300 mb-6">
              Let's develop a customized strategy to optimize your financial operations and drive growth.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purplish to-yellowish text-dark_bg font-medium px-8 py-3 rounded-lg"
              >
                Start Your Financial Transformation
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Keep background effects the same */}
        <ResumeDownload />
      </div>
    </div>
  );
};

export default ServicesPage;