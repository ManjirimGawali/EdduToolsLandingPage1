'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  price: string
  badge: string
  socialProof: Array<{ label: string; subLabel: string }>
}

export default function Hero({ title, subtitle, ctaText, price, badge, socialProof }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-blue-700 rounded-full animate-pulse"></span>
              {badge}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
              </motion.button>
              <motion.button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:border-gray-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Price */}
            <motion.div
              className="pt-4"
              variants={itemVariants}
            >
              <p className="text-gray-600">
                <span className="text-3xl font-bold text-gray-900">{price}</span>
              </p>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex items-center gap-6 pt-8 border-t border-gray-200"
              variants={itemVariants}
            >
              {socialProof.map((proof, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-bold text-gray-900">{proof.label}</span>
                  <span className="text-sm text-gray-600">{proof.subLabel}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - App Mockups */}
          <motion.div
            className="relative h-96 md:h-[500px] flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full h-full">
              {/* Background gradient circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

              {/* App mockup images */}
              <motion.div
                className="absolute left-0 top-12 w-40 h-72 bg-white rounded-3xl shadow-2xl border-8 border-gray-100 overflow-hidden"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Image
                  src="/app-login.png"
                  alt="App Login"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute right-0 top-20 w-40 h-72 bg-white rounded-3xl shadow-2xl border-8 border-gray-100 overflow-hidden"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <Image
                  src="/app-dashboard.png"
                  alt="App Dashboard"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
