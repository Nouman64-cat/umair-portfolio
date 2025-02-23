"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const organizations = ["Cedar Financials", "TCP Software", "CareerTweakrz", "BookTax Solution", "Virtuous Bookkeeping Inc."];

const Organizations = () => {
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <section className="py-12 bg-gradient-to-b from-zinc-900 to-dark_bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center mb-8"
        >
          <Briefcase className="w-8 h-8 text-bluish mb-4" />
          <h3 className="text-xl font-semibold text-zinc-300">
            Trusted by Leading Organizations
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              className="group backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-gray-200/20 hover:border-bluish/30 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-center h-32">
                <span className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {org}
                </span>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-200/20 to-transparent group-hover:via-bluish/50 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;