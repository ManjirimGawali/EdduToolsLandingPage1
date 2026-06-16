'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface Curriculum {
  title: string
  description: string
  lessons: number
}

interface CurriculumSectionProps {
  curriculum: Curriculum[]
}

export default function CurriculumSection({ curriculum }: CurriculumSectionProps) {
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
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You&apos;ll Learn
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive curriculum covering all essentials
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {curriculum.map((module, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
              variants={itemVariants}
            >
              <motion.button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setExpandedIdx(expandedIdx === idx ? null : idx)
                }
              >
                <div className="text-left">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </div>
                <motion.div
                  animate={{
                    rotate: expandedIdx === idx ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-600" />
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
                <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
                  <p className="text-gray-700 mb-3">
                    {module.lessons} comprehensive lessons covering all aspects of{' '}
                    {module.title}.
                  </p>
                  <motion.button
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Preview Module →
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
