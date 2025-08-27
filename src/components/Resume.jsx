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
    <section id="resume" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-darker/50 to-navy/30 rounded-3xl" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-coffee to-sky rounded-2xl flex items-center justify-center relative overflow-hidden"
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
                <FaFileAlt className="text-2xl text-white relative z-10" />
              </motion.div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-light">
                  My <span className="text-coffee">Resume</span>
                </h2>
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-coffee to-sky mt-2"
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
              className="text-lg text-light/80 max-w-lg"
            >
              View or download my resume to learn more about my education, skills, and experience.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              onClick={handleDownload}
              className="flex items-center gap-3 px-6 py-4 btn-primary text-white rounded-2xl font-semibold text-lg shadow-lg relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaDownload />
              </motion.div>
              Download PDF
              
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
              className="flex items-center gap-3 px-6 py-4 btn-secondary rounded-2xl font-semibold text-lg relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye />
              View Online
              
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

        {/* Enhanced decorative elements */}
        <motion.div
          className="absolute -top-8 -right-8 w-32 h-32 bg-coffee/10 rounded-full blur-xl"
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
          className="absolute -bottom-8 -left-8 w-40 h-40 bg-sky/10 rounded-full blur-xl"
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
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-coffee/60 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-sky/70 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
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
    </section>
  )
}