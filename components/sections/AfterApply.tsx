'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cohortData } from '@/lib/data/cohort';

export function AfterApply() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Happens After You Apply
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Timeline */}
          <div className="space-y-8">
            {cohortData.process.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline node */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index + 1}
                  </motion.div>
                  {index < cohortData.process.length - 1 && (
                    <motion.div
                      className="w-1 h-20 bg-gradient-to-b from-blue-400 to-transparent mt-2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                    />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  className="flex-grow pt-2 pb-8"
                  whileHover={{ x: 8 }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-gray-600">{step.description}</p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
