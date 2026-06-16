'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { cohortData } from '@/lib/data/cohort';

export function MentorGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet The Mentor
          </h2>
          <p className="text-gray-600">
            A glimpse into the journey and experience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cohortData.mentor.gallery.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              variants={itemVariants}
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image}
                alt={`Mentor gallery ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                >
                  <ZoomIn className="w-6 h-6 text-black" />
                </motion.div>
              </div>
              <div className="absolute inset-0 border border-white/20 rounded-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedImage ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        pointerEvents={selectedImage ? 'auto' : 'none'}
        onClick={() => setSelectedImage(null)}
      >
        <motion.div
          className="relative max-w-3xl w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: selectedImage ? 1 : 0.8, opacity: selectedImage ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {selectedImage && (
            <>
              <img
                src={selectedImage}
                alt="Enlarged"
                className="w-full h-auto rounded-xl shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop';
                }}
              />
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-slate-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
