'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cohortData } from '@/lib/data/cohort';

export function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 blur-3xl rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 mb-4">
            FAQ
          </span>

          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before joining the cohort.
          </p>
        </motion.div>

        {/* FAQ Cards */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cohortData.faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: expandedFAQ === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {expandedFAQ === index && (
                  <motion.div
                    key="content"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-100 px-6 py-5 bg-slate-50">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}