import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// Import the image using Vite's asset handling
import profileImage from '../assets/profile.jpg'

export default function Hero({ setActiveSection }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Student', 'Frontend Developer', 'Aspiring Full Stack Developer']
  
  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    let timeout
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1))
      }, 50)
      
      if (displayText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1))
      }, 100)
      
      if (displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      }
    }
    
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, texts])

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden pt-20 lg:pt-0">
      {/* Advanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-sky/20 floating-shape"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-coffee/20 floating-shape"
          animate={{
            y: [0, 40, 0],
            x: [0, -15, 0],
            rotate: [0, -180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-20 h-20 bg-teal/20 floating-shape"
          animate={{
            y: [0, -25, 0],
            x: [0, 30, 0],
            rotate: [0, 270, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-cream/10 floating-shape"
          animate={{
            y: [0, 20, 0],
            x: [0, -25, 0],
            rotate: [0, -360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Orbiting elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-sky/30 rounded-full orbiting-element"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-coffee/40 rounded-full orbiting-element"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />

        {/* Pulsating dots */}
        <motion.div
          className="absolute top-1/2 left-12 w-4 h-4 bg-sky rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-24 w-3 h-3 bg-coffee rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-coffee relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Sunil Bhattarai
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-coffee to-sky"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl text-light/80 mb-8 leading-relaxed mx-auto lg:mx-0 text-center lg:text-left"
          >
            <span className="text-sky font-semibold">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-coffee"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              type="button"
              className="px-6 lg:px-8 py-3 lg:py-4 rounded-full btn-primary text-white font-semibold text-base lg:text-lg inline-flex items-center justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 69, 19, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection && setActiveSection('projects')}
              style={{ display: 'inline-block' }}
            >
              View My Work
            </motion.button>
            <motion.button
              type="button"
              className="px-6 lg:px-8 py-3 lg:py-4 rounded-full btn-secondary text-light font-semibold text-base lg:text-lg inline-flex items-center justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 191, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection && setActiveSection('contact')}
              style={{ display: 'inline-block' }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end order-first lg:order-last"
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-coffee/40 shadow-2xl relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-coffee/20 to-sky/20 rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-sky/30 rounded-full"
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <img 
                src={profileImage} 
                alt="Sunil Bhattarai" 
                className="object-cover w-full h-full relative z-10"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzJFMkUyRSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM4QjQ1MTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
                  console.log('Profile image failed to load, using placeholder')
                }}
              />
            </div>
            
            {/* Enhanced floating decorations */}
            <motion.div
              className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 w-10 h-10 lg:w-12 lg:h-12 bg-coffee/60 rounded-full flex items-center justify-center"
              animate={{ 
                y: [-15, 15, -15],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-cream rounded-full" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-6 h-6 lg:w-8 lg:h-8 bg-sky/70 rounded-full flex items-center justify-center"
              animate={{ 
                y: [15, -15, 15],
                rotate: [360, 180, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            >
              <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full animate-pulse-glow" />
            </motion.div>
            <motion.div
              className="absolute top-1/4 -left-3 lg:-left-4 w-5 h-5 lg:w-6 lg:h-6 bg-teal/50 rounded-full"
              animate={{ 
                x: [-10, 10, -10],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            />
            <motion.div
              className="absolute bottom-1/3 -right-3 lg:-right-4 w-3 h-3 lg:w-4 lg:h-4 bg-cream/70 rounded-full"
              animate={{ 
                x: [10, -10, 10],
                y: [5, -5, 5],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator - Hidden on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-coffee rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-coffee rounded-full mt-2"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-sky/20 to-transparent rounded-full"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}