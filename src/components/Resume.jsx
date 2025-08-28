import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa'

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    // Use the public folder path that will work with GitHub Pages
    link.href = import.meta.env.BASE_URL + 'resume.pdf'
    link.download = 'Sunil_Bhattarai_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = () => {
    // Use the public folder path that will work with GitHub Pages
    window.open(import.meta.env.BASE_URL + 'resume.pdf', '_blank')
  }

  return (
    <section id="resume" className="py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-darker/50 to-navy/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
            <motion.div
              className="absolute -top-4 md:-top-8 -right-4 md:-right-8 w-20 md:w-32 h-20 md:h-32 bg-coffee/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-24 md:w-40 h-24 md:h-40 bg-sky/10 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.6, 0.2],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            {/* Floating particles */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-2 md:w-3 h-2 md:h-3 bg-coffee/60 rounded-full"
              animate={{
                y: [0, -15, 0],
                x: [0, 12, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/5 w-1.5 md:w-2 h-1.5 md:h-2 bg-sky/70 rounded-full"
              animate={{
                y: [0, -12, 0],
                x: [0, -8, 0],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:flex-row lg:justify-between text-center lg:text-left"
            >
              {/* Content Section */}
              <div className="max-w-lg w-full lg:w-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4 md:mb-6"
                >
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-coffee to-sky rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-sky/20 to-coffee/20"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <FaFileAlt className="text-lg md:text-2xl text-white relative z-10" />
                  </motion.div>
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light">
                      My <span className="text-coffee">Resume</span>
                    </h2>
                    <motion.div 
                      className="w-12 md:w-16 h-1 bg-gradient-to-r from-coffee to-sky mt-1 md:mt-2 mx-auto lg:mx-0"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base md:text-lg text-light/80 leading-relaxed text-center lg:text-left"
                >
                  View or download my resume to learn more about my education, skills, and experience.
                </motion.p>
              </div>

              {/* Buttons Section */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col w-full sm:w-auto sm:flex-row gap-3 md:gap-4 min-w-0"
              >
                <motion.button 
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 btn-primary text-white rounded-xl md:rounded-2xl font-semibold text-sm md:text-base lg:text-lg shadow-lg relative overflow-hidden min-w-0"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex-shrink-0"
                  >
                    <FaDownload className="text-sm md:text-base" />
                  </motion.div>
                  <span className="truncate">Download PDF</span>
                  
                  {/* Button shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                
                <motion.button 
                  onClick={handleView}
                  className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 btn-secondary rounded-xl md:rounded-2xl font-semibold text-sm md:text-base lg:text-lg relative overflow-hidden min-w-0"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEye className="flex-shrink-0 text-sm md:text-base" />
                  <span className="truncate">View Online</span>
                  
                  {/* Button glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sky/10 to-coffee/10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}