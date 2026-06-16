'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Clock } from 'lucide-react';
import { cohortData } from '@/lib/data/cohort';

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
  }>({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const expiryDate = new Date(cohortData.offer.expiryDate).getTime();
      const now = new Date().getTime();
      const difference = expiryDate - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 shadow-2xl z-40 backdrop-blur-md border-t border-blue-400/30"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Info with premium styling */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Rocket className="w-8 h-8 text-white" />
            </motion.div>
            <div className="text-sm sm:text-base">
              <p className="font-bold text-white text-lg">
                Build Your First AI SaaS Product
              </p>
              <p className="text-xs sm:text-sm text-blue-100">
                Limited seats • Hands-on execution
              </p>
            </div>
          </div>

          {/* Center: Premium Timer */}
          <motion.div
            className="flex items-center gap-2 text-xs sm:text-sm font-mono bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Clock className="w-4 h-4 text-white font-bold" />
            <span className="text-white font-bold">
              {String(timeLeft.hours).padStart(2, '0')}h{' '}
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
          </motion.div>

          {/* Right: Premium CTA Button */}
          <motion.button
            className="px-7 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-xl shadow-lg transition-all flex items-center gap-2 group whitespace-nowrap hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
