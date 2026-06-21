"use client";

import { motion } from "framer-motion";
import { MODULES } from "@/lib/data/cohortnew/ai_saas";

export function ProgramSection() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What You&apos;ll <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Learn & Build</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A comprehensive curriculum covering everything from product ideation to global distribution and monetization.
          </p>
        </motion.div>

        {/* Learning Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {MODULES.map((module, idx) => {
            const IconComponent = module.icon;
            return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="group relative p-6 md:p-8 rounded-2xl backdrop-blur-md border border-green-400/30 bg-gradient-to-br from-green-500/10 to-slate-900 hover:border-orange-400/50 overflow-hidden shadow-lg"
            >
              {/* Gradient backgrounds */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Number badge */}
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-orange-500/20 group-hover:from-green-500/30 group-hover:to-orange-500/30 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-orange-500/20 rounded-lg p-2 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-full h-full text-green-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300 leading-snug">
                  {module.title}
                </h3>

                {/* Items */}
                <ul className="space-y-2 text-white/70 text-sm">
                  {module.items.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow indicator */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-green-400 text-sm font-semibold group-hover:text-orange-400 flex items-center gap-2">
                    Explore
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-green-500 to-orange-400 group-hover:w-full transition-all duration-300" />
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
