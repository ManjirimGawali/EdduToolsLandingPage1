"use client";

import { motion } from "framer-motion";
import type { CohortData } from '@/lib/data/cohort';
interface BenefitsSectionProps {
  painPoints: string[];
   
}

export function BenefitsSection({
  painPoints,
}: BenefitsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: ([0.22, 1, 0.36, 1] as unknown) as any,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const icons = ["🚀", "⚡", "📈", "💡", "🎯", "🔥"];

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Who Is This{" "}
            <span className="text-orange-400">Cohort For?</span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Perfect if you're facing any of these challenges
          </p>
        </motion.div>

        {/* Dynamic Pain Points */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="group relative p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Icon */}
              <motion.div
                className="text-5xl mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: idx * 0.3,
                }}
              >
                {icons[idx % icons.length]}
              </motion.div>

              {/* Pain Point */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                {point}
              </h3>

              {/* Number */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center text-4xl font-bold text-white/10">
                {idx + 1}
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}