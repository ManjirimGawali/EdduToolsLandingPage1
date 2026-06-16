'use client';

import { motion } from 'framer-motion';
import { Linkedin, Calendar } from 'lucide-react';
import { cohortData } from '@/lib/data/cohort';

export function MentorProfile() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={cohortData.mentor.image}
                alt={cohortData.mentor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Floating stats */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-2xl font-bold text-blue-600">100+</p>
              <p className="text-sm text-gray-600">Products Launched</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              {cohortData.mentor.name}
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              {cohortData.mentor.title}
            </p>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {cohortData.mentor.bio}
            </motion.p>

            {/* Key points */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              {[
                { label: 'AI execution', value: '5+ years' },
                { label: 'Products shipped', value: '10+ live products' },
                { label: 'Community', value: '10,000+ followers' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="font-semibold">{item.label}:</span>
                  <span>{item.value}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={cohortData.mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <button className="px-6 py-3 bg-slate-100 text-gray-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Discovery Call
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
