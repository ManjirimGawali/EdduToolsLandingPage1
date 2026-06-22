"use client";

import { motion, type Variants } from "framer-motion";
import type { CohortData } from "@/lib/data/cohortnew/index";

interface FAQSectionProps {
  faqs: CohortData["faqs"];
}
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/60">
            Everything you need to know about the webinar
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="w-full group"
              >
                <div className="p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-green-500/50 transition-all duration-300 text-left">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: openIndex === idx ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-green-400 flex-shrink-0" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openIndex === idx ? 1 : 0,
                      height: openIndex === idx ? "auto" : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-white/10">
                      <p className="text-white/80 text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
            <p className="text-white/80 mb-4">
              Can&apos;t find your answer? Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 hover:bg-green-500/30 transition-all duration-300">
                WhatsApp
              </button>
              <button className="px-6 py-3 rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-300 hover:bg-blue-500/30 transition-all duration-300">
                Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
