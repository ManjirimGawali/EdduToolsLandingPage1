'use client';

import { motion } from 'framer-motion';
import { cohortData } from '@/lib/data/cohort';

export function Differentiators() {
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
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Makes This Different
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most AI courses teach tools. This cohort focuses on:
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cohortData.differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              <motion.div
                className="flex gap-6 items-start bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
                whileHover={{ x: 8 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.number}
                </motion.div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>

              {/* Timeline line */}
              {index < cohortData.differentiators.length - 1 && (
                <motion.div
                  className="absolute left-6 top-full w-0.5 h-4 bg-gradient-to-b from-blue-400 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
