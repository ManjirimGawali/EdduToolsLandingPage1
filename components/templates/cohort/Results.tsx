'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { CohortData } from '@/lib/data/cohort/types';
interface ResultsProps {
  results: CohortData["results"];
}
export function Results({
  results,
}: ResultsProps) {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

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
            Results You Should Expect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Within 60–90 days, many participants aim to:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <motion.div
                className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 12 }}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {result.metric}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
