"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark_bg via-zinc-900 to-dark_bg px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.span
            variants={fadeInVariants}
            className="mb-6 inline-block bg-purplish/20 px-8 py-2 rounded-full text-sm font-medium text-purple-300 ring-1 ring-purple-500/30"
          >
            Accounting and Taxation Specialist
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeInVariants}
            className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-purple-400 to-yellowish bg-clip-text text-transparent">
              Muhammad Umair
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInVariants}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            Empowering businesses with precision-driven accounting, taxation,
            and financial automation.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInVariants} className="mt-8">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transform rounded-lg bg-gradient-to-r from-yellowish to-amber-500 px-8 py-4 text-lg font-medium text-dark_bg shadow-lg shadow-yellowish/20 transition-all hover:shadow-yellowish/30"
              >
                Schedule Consultation
                <span className="ml-3 opacity-80">→</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-20 top-40 h-[200px] w-[200px] rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute right-32 top-60 h-[300px] w-[300px] rounded-full bg-yellowish/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
