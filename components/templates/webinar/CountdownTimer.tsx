'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  endDate?: Date
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const target = endDate || new Date(now.getTime() + 48 * 60 * 60 * 1000) // 2 days from now
      const difference = target.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-4 sm:p-6 min-w-20 sm:min-w-28 flex items-center justify-center"
        key={value}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <span className="text-3xl sm:text-4xl font-bold">
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-sm sm:text-base font-semibold text-gray-600 mt-2">
        {label}
      </span>
    </motion.div>
  )

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Offer Ends In
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Grab your spot before it's too late!
          </p>

          {/* Timer */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </motion.div>

          {/* CTA */}
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Spot Now
          </motion.button>

          {/* Urgency Text */}
          <motion.p
            className="text-red-600 font-semibold mt-4 animate-pulse"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            ⚠️ Only 25 spots available for this cohort
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
