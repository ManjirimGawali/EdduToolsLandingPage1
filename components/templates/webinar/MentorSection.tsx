'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MentorSectionProps {
  name: string
  designation: string
  bio: string
  achievements: string[]
}

export default function MentorSection({
  name,
  designation,
  bio,
  achievements,
}: MentorSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="relative h-96 md:h-[500px] flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"></div>
            <motion.div
              className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/mentor-hrishikesh.png"
                alt={name}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                variants={itemVariants}
              >
                {name}
              </motion.h3>
              <p className="text-xl text-blue-600 font-semibold">{designation}</p>
            </div>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              {bio}
            </motion.p>

            {/* Achievements */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="font-bold text-gray-900 text-lg">Achievements</h4>
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn From {name}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
