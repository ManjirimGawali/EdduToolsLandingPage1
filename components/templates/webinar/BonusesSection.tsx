'use client'

import { motion } from 'framer-motion'

interface Bonus {
  title: string
  description: string
  actualValue: string
  bonusValue: string
}

interface BonusesSectionProps {
  bonuses: Bonus[]
}

export default function BonusesSection({ bonuses }: BonusesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exclusive Bonuses
          </h2>
          <p className="text-xl text-gray-600">
            Worth ₹10,000+ in added value
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bonuses.map((bonus, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {bonus.title}
                </h3>
                <p className="text-gray-600">{bonus.description}</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-blue-200">
                <div>
                  <p className="text-sm text-gray-500 line-through">
                    {bonus.actualValue}
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {bonus.bonusValue}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  Included
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold">
            Total Bonus Value: <span className="text-2xl">₹10,000+</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
