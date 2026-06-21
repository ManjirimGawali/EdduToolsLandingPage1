"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MENTOR } from "@/lib/data/cohortnew/ai_saas";

export function MentorGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % MENTOR.gallery.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? MENTOR.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Your <span className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">Mentor</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {MENTOR.name} brings years of experience in AI SaaS product building and global distribution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-green-400/50 bg-gradient-to-br from-slate-800 to-slate-900 w-80 h-96 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={MENTOR.gallery[currentIndex]}
                    alt={`${MENTOR.name} ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-green-600/40 backdrop-blur-md rounded-full hover:bg-green-600/60 transition-all z-10 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-green-600/40 backdrop-blur-md rounded-full hover:bg-green-600/60 transition-all z-10 shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {MENTOR.gallery.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? "bg-gradient-to-r from-green-400 to-orange-400 w-8"
                        : "bg-white/30 w-2"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="mt-4 text-center text-white/70">
              <p className="text-sm">{currentIndex + 1} of {MENTOR.gallery.length}</p>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {MENTOR.name}
              </h3>
              <p className="text-cyan-400 text-lg font-semibold">
                {MENTOR.title}
              </p>
            </div>

            <p className="text-white/80 text-lg leading-relaxed">
              {MENTOR.bio}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {MENTOR.stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-green-500/10 to-orange-500/10 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-6 h-6 text-green-400" />
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Achievements */}
            <div className="pt-4">
              <h4 className="text-white font-bold mb-4">Key Achievements:</h4>
              <ul className="space-y-2">
                {MENTOR.achievements.slice(0, 4).map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-orange-400 rounded-full" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
