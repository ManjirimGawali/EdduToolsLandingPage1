'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqItems: FAQItem[]
}

export default function FAQSection({ faqItems }: FAQSectionProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
              variants={itemVariants}
            >
              <motion.button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() =>
                  setExpandedIdx(expandedIdx === idx ? null : idx)
                }
              >
                <h3 className="font-bold text-lg text-gray-900 text-left">
                  {item.question}
                </h3>
                <motion.div
                  animate={{
                    rotate: expandedIdx === idx ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-600 flex-shrink-0" />
                </motion.div>
              </motion.button>

              <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{
                  height: expandedIdx === idx ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 py-4 bg-blue-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
