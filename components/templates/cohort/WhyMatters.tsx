'use client';

import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { CohortData } from '@/lib/data/cohort/types';
interface WhyMattersProps {
  whyMatters: CohortData["whyMatters"];
}
export function WhyMatters({
  whyMatters,
}: WhyMattersProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="relative bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full -z-10 blur-2xl" />

          <motion.div
            className="flex items-start gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Lightbulb className="w-6 h-6 text-white" />
            </motion.div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why This Matters Right Now
              </h2>

              <motion.p
                className="text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {whyMatters}
              </motion.p>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-900 font-semibold mb-4">
                  The skills you'll develop:
                </p>
                <ul className="space-y-2">
                  {[
                    'Identify real market problems',
                    'Build quickly and ship consistently',
                    'Distribute effectively at scale',
                  ].map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
