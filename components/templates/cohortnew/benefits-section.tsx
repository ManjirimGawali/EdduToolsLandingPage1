"use client";

import { motion } from "framer-motion";
import { PAIN_POINTS } from "@/lib/data/cohortnew/ai_saas";
import { Zap } from "lucide-react";

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const icons = ["🚀", "🔧", "📊", "💡", "🎯", "⚡"];

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-0 top-1/2 w-96 h-96 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Who Is This <span className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">Cohort For?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Perfect if you're struggling with any of these challenges
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PAIN_POINTS.map((point, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="group relative p-6 md:p-8 rounded-2xl backdrop-blur-md border border-green-400/30 bg-gradient-to-br from-green-500/10 to-slate-900 hover:border-orange-400/50 transition-all duration-300 shadow-lg"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Icon */}
              <div className="text-4xl mb-4">{icons[idx]}</div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                {point}
              </h3>

              {/* Accent line */}
              <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-orange-400 rounded-full group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
