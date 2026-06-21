'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CohortData } from '@/lib/data/cohort/types';
interface FinalCTAProps {
  finalCTA: CohortData["finalCTA"];
}
export function FinalCTA({
  finalCTA,
}: FinalCTAProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-16 text-center text-white overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating elements */}
          <motion.div
            className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"
            animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {finalCTA.headline}
          </motion.h2>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-blue-100">
              {finalCTA.description1}
            </p>
            <p className="text-xl text-blue-100">
              {finalCTA.description2}
            </p>
          </motion.div>

          <motion.button
            className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-slate-50 transition-colors inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {finalCTA.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.p
            className="text-blue-100 text-sm sm:text-base font-medium mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {finalCTA.footer}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
