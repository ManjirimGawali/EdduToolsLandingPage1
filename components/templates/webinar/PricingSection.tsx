'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingProps {
  originalPrice: string
  discountedPrice: string
  gst: string
  savings: string
  savingsPercent: string
  guarantee: string
  features: string[]
}

export default function PricingSection(props: PricingProps) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Special Launch Price
          </h2>
          <p className="text-xl text-gray-600">
            Limited time offer for early birds
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Savings Badge */}
          <motion.div
            className="text-center mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-red-100 text-red-700 px-6 py-2 rounded-full font-bold text-lg">
              Save {props.savingsPercent}
            </span>
          </motion.div>

          {/* Price */}
          <div className="text-center mb-8">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 line-through text-2xl mb-2">
                {props.originalPrice}
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold text-gray-900">
                  {props.discountedPrice}
                </span>
                <span className="text-lg text-gray-600">{props.gst}</span>
              </div>
              <p className="text-green-600 font-bold text-lg mt-2">
                You save: {props.savings}
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-xl hover:shadow-xl transition-shadow mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Enroll Now
          </motion.button>

          {/* Guarantee */}
          <motion.div
            className="text-center mb-8 p-4 bg-green-50 rounded-lg border border-green-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-green-700 font-bold text-lg">✓ {props.guarantee}</p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg text-gray-900 mb-4">What You Get:</h3>
            {props.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.7 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
