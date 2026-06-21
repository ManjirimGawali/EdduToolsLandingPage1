"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/cohortnew/ai_saas";

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories From Our <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Builders</span>
          </h2>
          <p className="text-white/70 text-lg">
            See how our cohort members built and launched their AI SaaS products
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-green-400/30 p-8 md:p-12 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Avatar and Info */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center md:items-start"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-orange-400 rounded-full blur-xl opacity-50" />
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      width={120}
                      height={120}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-green-400/50"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-green-400 font-semibold mt-1">
                      {currentTestimonial.role}
                    </p>
                    {currentTestimonial.company && (
                      <p className="text-white/70 text-sm mt-1">
                        @ {currentTestimonial.company}
                      </p>
                    )}
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-white/90 text-lg italic leading-relaxed">
                    <p className="text-cyan-300 text-4xl mb-4">"</p>
                    <p>{currentTestimonial.content}</p>
                    <p className="text-cyan-300 text-4xl mt-4 text-right">"</p>
                  </div>

                  {/* Trust Indicator */}
                  <div className="flex items-center gap-3 p-4 bg-cyan-500/10 rounded-xl border border-cyan-400/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-yellow-300 rounded-full flex items-center justify-center">
                      <span className="text-slate-900 font-bold text-sm">✓</span>
                    </div>
                    <p className="text-white/80">Verified Builder</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full border border-cyan-400/50 text-cyan-400 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-gradient-to-r from-cyan-400 to-yellow-300 w-8"
                      : "bg-white/20 w-3 hover:bg-white/40"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full border border-cyan-400/50 text-cyan-400 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <p className="text-white/70 text-sm">
              {currentIndex + 1} of {TESTIMONIALS.length}
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mt-16"
        >
          <div className="p-6 bg-cyan-500/10 rounded-2xl border border-cyan-400/30 text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
              500+
            </p>
            <p className="text-white/70 text-sm mt-2">Products Launched</p>
          </div>
          <div className="p-6 bg-cyan-500/10 rounded-2xl border border-cyan-400/30 text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
              $1M+
            </p>
            <p className="text-white/70 text-sm mt-2">Revenue Generated</p>
          </div>
          <div className="p-6 bg-cyan-500/10 rounded-2xl border border-cyan-400/30 text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
              4.9/5
            </p>
            <p className="text-white/70 text-sm mt-2">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
