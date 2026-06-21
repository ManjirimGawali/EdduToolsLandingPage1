'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Achievement } from '@/lib/data/cohort/types';
interface AchievementsProps {
  achievements: Achievement[];
}
export function Achievements({
  achievements,
}: AchievementsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What You&apos;ll Achieve Inside The Cohort
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            By the end of the program, you will have:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.1 * index }}
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
                <p className="text-gray-900 font-semibold leading-relaxed">
                  {achievement.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-gray-600 font-semibold text-lg mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          This is not theory.
          <br />
          You will build and launch during the cohort.
        </motion.p>
      </div>
    </section>
  );
}
