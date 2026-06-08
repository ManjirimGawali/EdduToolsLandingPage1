'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cohortData } from '@/lib/data/cohort';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const expiryDate = new Date(cohortData.offer.expiryDate).getTime();
      const now = new Date().getTime();
      const difference = expiryDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({
    value,
    label,
    delay,
  }: {
    value: number;
    label: string;
    delay: number;
  }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 sm:p-6 min-w-16 sm:min-w-20 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-2xl sm:text-4xl font-bold text-blue-600">
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <p className="text-xs sm:text-sm font-medium text-gray-600 mt-2 uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Offer Ends In
          </h2>
        </motion.div>

        {/* Timer grid */}
        <motion.div
          className="flex justify-center gap-4 sm:gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TimeUnit value={timeLeft.days} label="Days" delay={0.3} />
          <TimeUnit value={timeLeft.hours} label="Hours" delay={0.4} />
          <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.5} />
          <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.6} />
        </motion.div>

        {/* Urgency messages */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-sm sm:text-base font-medium text-gray-700">
              Limited Seats Available For Serious Builders
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-sm sm:text-base font-medium text-gray-700">
              Price Increases After Timer Ends
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
