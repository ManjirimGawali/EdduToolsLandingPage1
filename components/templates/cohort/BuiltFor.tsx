'use client';

import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { cohortData } from '@/lib/data/cohort';

export function BuiltFor() {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Pain points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
              variants={itemVariants}
            >
              Built For People Who Want
              <br />
              More Than Tutorials
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              You've watched AI videos. Tried no-code tools. Played with ChatGPT
              wrappers.
            </motion.p>

            <motion.p
              className="text-gray-600 font-semibold mb-6"
              variants={itemVariants}
            >
              But still…
            </motion.p>

            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cohortData.painPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                  variants={itemVariants}
                >
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Transformation visual */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm">
              {/* Consumer to Builder transformation */}
              <motion.div
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <p className="text-sm font-semibold text-slate-400 mb-2">
                    BEFORE
                  </p>
                  <p className="text-2xl font-bold">Consumer</p>
                  <p className="text-sm text-slate-300 mt-2">
                    Watching, learning, consuming
                  </p>
                </div>

                <motion.div
                  className="w-full h-0.5 bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 my-8 relative"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    animate={{ x: 10, opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </motion.div>
                </motion.div>

                <div>
                  <p className="text-sm font-semibold text-blue-400 mb-2">
                    AFTER
                  </p>
                  <p className="text-2xl font-bold">Builder</p>
                  <p className="text-sm text-slate-300 mt-2">
                    Shipping, earning, creating
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
