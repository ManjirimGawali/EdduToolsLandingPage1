"use client";

import { motion } from "framer-motion";
import * as cohort from "@/lib/data/cohortnew/ai_saas";
// Compatibility: some modules export SUCCESS_STORIES as a named export,
// others export it as default or under a different key. Ensure we have an array.
const SUCCESS_STORIES: any[] = (cohort as any).SUCCESS_STORIES ?? (cohort as any).default ?? (cohort as any).successStories ?? [];
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? SUCCESS_STORIES.length - 1 : prev - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      // use cubic bezier array for easing; cast to any to satisfy TS types
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
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
            Success Stories
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See how professionals like you transformed their careers and doubled
            or tripled their salaries
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {SUCCESS_STORIES.map((story, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0 transition-all duration-300 ${
                  idx === currentIndex ? "ring-2 ring-green-500" : ""
                }`}
              >
                {/* Header with initials and name */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: story.color }}
                  >
                    {story.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white">{story.name}</p>
                    <p className="text-white/60 text-sm">{story.company}</p>
                  </div>
                </div>

                {/* Salary transformation */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">From:</span>
                    <span className="text-white font-bold">{story.fromSalary}</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                      initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">To:</span>
                    <span className="text-green-400 font-bold text-lg">
                      {story.toSalary}
                    </span>
                  </div>
                </div>

                {/* Role and testimonial */}
                <p className="text-white/70 text-sm font-semibold mb-3">
                  {story.role}
                </p>
                <p className="text-white/80 text-base leading-relaxed italic">
                  &quot;{story.testimonial}&quot;
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-green-500/50 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {SUCCESS_STORIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-green-500"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-green-500/50 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-white/60 text-sm">
            {currentIndex + 1} of {SUCCESS_STORIES.length}
          </div>
        </div>
      </div>
    </section>
  );
}
