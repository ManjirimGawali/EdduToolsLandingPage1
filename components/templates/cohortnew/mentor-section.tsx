"use client";

import { motion } from "framer-motion";
import { MENTOR } from "@/lib/data/cohortnew/ai_saas";
import { ChevronRight } from "lucide-react";

export function MentorSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
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
            Meet Your Mentor
          </h2>
          <p className="text-lg text-white/60">
            Learn directly from someone who has walked the path you want to take
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Name and Title */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {MENTOR.name}
              </h3>
              {/* Use a safe lookup for designation to avoid TS errors if property name differs */}
              {(() => {
                const designation = (MENTOR as any).designation || (MENTOR as any).title || (MENTOR as any).role || "";
                return (
                  <p className="text-lg text-green-400 font-semibold">{designation}</p>
                );
              })()}
            </div>

            {/* Headline */}
            {(() => {
              const headline = (MENTOR as any).headline || (MENTOR as any).tagline || (MENTOR as any).summary || "";
              return (
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight">{headline}</p>
              );
            })()}

            {/* About */}
            <div className="space-y-4">
              {((MENTOR as any).about || []).map((paragraph: any, idx: number) => (
                <p
                  key={idx}
                  className="text-white/80 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 py-8"
            >
              {MENTOR.stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-4 rounded-xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-5 h-5 text-green-400" />
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Brands */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-white/60 text-sm font-semibold mb-4 uppercase tracking-wide">
                Worked with leading brands
              </p>
              <div className="flex flex-wrap gap-3">
                {((MENTOR as any).brands || []).map((brand: any, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white/70 text-sm hover:bg-white/10 hover:border-green-500/50 transition-all duration-300"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50">
                <span className="relative flex items-center justify-center gap-2">
                  {MENTOR.cta.text}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Achievement Card */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            {/* Main Achievement Card */}
            <motion.div
              className="relative p-8 md:p-10 rounded-3xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-orange-500/10 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                animate={{
                  opacity: [0, 0.1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-4">🏆</div>
                <div className="flex items-start gap-3">
                  <div>
                    {(() => {
                      const achievement = (MENTOR as any).achievement || (MENTOR as any).achievements?.[0] || { title: "", description: "" };
                      return (
                        <>
                          <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-white/80 text-base md:text-lg">
                            {achievement.description}
                          </p>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-blue-500 to-orange-500" />
            </motion.div>

            {/* Testimonial/Trust Card */}
            <motion.div
              className="p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">⭐</div>
                <p className="text-white font-bold">25,000+ Students Transformed</p>
              </div>
              <p className="text-white/70 text-sm">
                Trusted by professionals across India and globally to unlock their
                international career potential
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
