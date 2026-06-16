'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface StudentResult {
  name: string
  role: string
  before: string
  after: string
  metric: string
}

interface StudentResultsProps {
  results: StudentResult[]
}

export default function StudentResults({ results }: StudentResultsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  const getImagePath = (name: string) => {
    const nameMap: { [key: string]: string } = {
      'Priya Sharma': '/testimonial-priya.png',
      'Rohan Verma': '/testimonial-rohan.png',
      'Ananya Patel': '/testimonial-ananya.png',
    }
    return nameMap[name] || '/testimonial-priya.png'
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real students like you
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              variants={cardVariants}
              whileHover={{ y: -12 }}
            >
              {/* Image */}
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src={getImagePath(result.name)}
                  alt={result.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {result.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">
                  {result.role}
                </p>

                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">
                      Before
                    </p>
                    <p className="text-gray-700">{result.before}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">
                      After
                    </p>
                    <p className="text-gray-700">{result.after}</p>
                  </div>
                </div>

                <motion.div
                  className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-3 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-purple-700 font-bold">{result.metric}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
