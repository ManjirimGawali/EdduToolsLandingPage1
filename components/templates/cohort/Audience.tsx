'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { CohortData } from '@/lib/data/cohort/types';
interface AudienceProps {
  audience: CohortData["audience"];
}

export function Audience({
  audience,
}: AudienceProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who This Is For
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audience.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              <motion.div
                className="h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <p className="text-gray-900 font-medium leading-relaxed">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
