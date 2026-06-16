'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cohortData } from '@/lib/data/cohort';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % cohortData.testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = cohortData.testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl -z-10 opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl -z-10 opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Loved by Builders & Creators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our participants have achieved
          </p>
        </motion.div>

        <motion.div
          className="relative bg-white rounded-3xl p-8 sm:p-14 border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-96 flex flex-col justify-between backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
          >
            {/* Premium stars */}
            <motion.div className="flex gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -10, rotate: -180 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: i * 0.08, type: 'spring' }}
                >
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                </motion.div>
              ))}
            </motion.div>

            {/* Quote with improved typography */}
            <p className="text-xl sm:text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            {/* Author with enhanced styling */}
            <div className="flex items-center gap-4">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {testimonial.name.charAt(0)}
              </motion.div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Premium navigation dots */}
          <motion.div
            className="flex justify-center gap-3 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {cohortData.testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-3 h-3 shadow-lg' 
                    : 'bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
