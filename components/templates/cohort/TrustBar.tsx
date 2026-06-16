'use client';

import { motion } from 'framer-motion';

const trustItems = [
  'Live Sessions',
  'Build With Mentors',
  'Launch Support',
  'Real Product Building',
  'Global Opportunities',
];

export function TrustBar() {
  return (
    <section className="relative py-8 bg-white border-y border-slate-200 overflow-hidden">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-8 pr-8 whitespace-nowrap"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...trustItems, ...trustItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 text-gray-700 font-medium text-lg"
            >
              <span>{item}</span>
              <span className="text-gray-300">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
