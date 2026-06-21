'use client';

import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { CohortData } from '@/lib/data/cohort/types';
interface WhatYouBuildProps {
  products: CohortData["products"];
}
export function WhatYouBuild({
  products,
}: WhatYouBuildProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What You Build During The Cohort
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Depending on your niche, you can build:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <motion.div
                className="h-full bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ y: -6, boxShadow: '0 20px 25px rgba(0,0,0,0.1)' }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 12 }}
                  >
                    <Package className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <p className="font-semibold text-gray-900">{product.title}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-gray-600 font-medium text-lg mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          You leave with a live product — not just notes.
        </motion.p>
      </div>
    </section>
  );
}
