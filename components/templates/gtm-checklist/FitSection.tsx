"use client";

import { motion } from "framer-motion";
import type { FitData }  from "../../../lib/data/gtm-checklist/types";

interface FitSectionProps {
  data: FitData;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  // use numeric easing array to satisfy framer-motion's Transition type
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as any },
  },
};

export default function FitSection({ data }: FitSectionProps) {
  return (
    <section className="bg-[#080810] py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {data.sectionTitle}
          </h2>
          <p className="mt-3 text-xl text-slate-400">{data.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-3 sm:grid-cols-2"
        >
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group flex items-center gap-4 overflow-hidden rounded-xl border border-white/8 bg-white/3 px-5 py-4 backdrop-blur-sm transition-all duration-200 hover:border-violet-500/25 hover:bg-white/5"
            >
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-violet-500/40 bg-violet-500/10">
                  <svg className="h-3 w-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-slate-300">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing call */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              {data.closingText}
            </span>
          </p>

          <a
            href={data.ctaHref}
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-violet-500/40"
          >
            {data.ctaText}
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
