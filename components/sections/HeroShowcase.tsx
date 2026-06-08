'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { cohortData } from '@/lib/data/cohort';

const floatingBadges = [
  'AI SaaS',
  'GTM',
  'Launch',
  'Automation',
  'Revenue',
  'Global Market',
];

export function HeroShowcase() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Premium animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-transparent opacity-20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-200 via-blue-200 to-transparent opacity-15 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">Limited Spots Available</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Build AI SaaS
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Products That Generate Revenue
            </motion.span>
            <br />
            Get Paid In Dollars.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {cohortData.hero.subheadline}
          </motion.p>
        </motion.div>

        {/* Floating badges */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingBadges.map((badge, index) => (
            <motion.div
              key={badge}
              className="absolute px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-sm font-semibold text-gray-700 shadow-lg"
              initial={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 100 - 50,
                y: Math.sin(Date.now() / 1000 + index) * 30,
                opacity: 0.7,
              }}
              transition={{
                duration: 3.5 + index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: `${15 + index * 13}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
            >
              {badge}
            </motion.div>
          ))}
        </div>

        {/* Mentor image with premium styling */}
        <motion.div
          className="mt-16 z-20 relative w-full max-w-md px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur">
            <motion.img
              src={cohortData.mentor.image}
              alt={cohortData.mentor.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating info badge with gradient */}
          <motion.div
            className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-2xl p-4 border border-gray-200/50 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="font-bold text-gray-900">{cohortData.mentor.name}</p>
            <p className="text-sm text-gray-600">{cohortData.mentor.title}</p>
          </motion.div>
        </motion.div>

        {/* Premium CTA Buttons */}
        <motion.div
          className="mt-20 flex flex-col sm:flex-row gap-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 flex items-center gap-2 group hover:scale-105 active:scale-95">
            {cohortData.hero.cta1}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95">
            {cohortData.hero.cta2}
          </button>
        </motion.div>

        {/* Limitation text */}
        <motion.p
          className="mt-8 text-gray-600 font-medium z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {cohortData.hero.limitation}
        </motion.p>

        {/* Limited seats badge with animation */}
        <motion.div
          className="mt-6 px-5 py-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-full text-red-700 font-semibold text-sm z-20 shadow-sm flex items-center gap-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Rocket className="w-4 h-4" />
          Limited Seats For Serious Builders
        </motion.div>
      </div>
    </div>
  );
}
