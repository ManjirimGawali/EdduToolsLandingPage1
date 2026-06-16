'use client';

import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cohortData } from '@/lib/data/cohort';

export function Curriculum() {
  const [expandedModule, setExpandedModule] = useState(0);

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl -z-10 opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl -z-10 opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Learning Path
          </h2>
          <p className="text-lg text-gray-600">Master AI SaaS development module by module</p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {cohortData.modules.map((module, moduleIndex) => (
            <motion.div
              key={moduleIndex}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: moduleIndex * 0.05 }}
            >
              <button
                onClick={() =>
                  setExpandedModule(
                    expandedModule === moduleIndex ? -1 : moduleIndex
                  )
                }
                className="w-full px-6 sm:px-8 py-5 bg-gradient-to-r from-white to-blue-50/30 hover:from-blue-50 hover:to-blue-100/30 flex items-center justify-between transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {moduleIndex + 1}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-left">
                    {module.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedModule === moduleIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedModule === moduleIndex ? 'auto' : 0,
                  opacity: expandedModule === moduleIndex ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="px-6 sm:px-8 py-6 bg-gradient-to-br from-blue-50/50 via-white to-white border-t border-gray-200 space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start gap-3 text-gray-700 font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.08 }}
                    >
                      <motion.div
                        className="text-blue-600 mt-0.5 flex-shrink-0"
                        whileInView={{ scale: 1.2 }}
                        transition={{ type: 'spring' }}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
