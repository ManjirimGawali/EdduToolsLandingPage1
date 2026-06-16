'use client'

import { motion } from 'framer-motion'

interface FinalCTAProps {
  title: string
  subtitle: string
  buttonText: string
  urgency: string
}

export default function FinalCTA({
  title,
  subtitle,
  buttonText,
  urgency,
}: FinalCTAProps) {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-shadow mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {buttonText}
          </motion.button>

          {/* Urgency */}
          <motion.p
            className="text-white font-bold text-lg animate-pulse"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            ⚠️ {urgency}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
