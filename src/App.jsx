import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSectionChange = (newSection) => {
    if (newSection === activeSection || isTransitioning) return
    
    setIsTransitioning(true)
    
    // Add a small delay to make the transition feel smoother
    setTimeout(() => {
      setActiveSection(newSection)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 200)
  }

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return <Hero setActiveSection={handleSectionChange} />
      case 'about':
        return (
          <section className="bg-secondary min-h-screen flex items-center">
            <div className="container py-16 md:py-20">
              <About />
            </div>
          </section>
        )
      case 'projects':
        return (
          <section className="bg-primary min-h-screen flex items-center">
            <div className="container py-16 md:py-20">
              <Projects />
            </div>
          </section>
        )
      case 'resume':
        return (
          <section className="bg-secondary min-h-screen flex items-center">
            <div className="container py-16 md:py-20">
              <Resume />
            </div>
          </section>
        )
      case 'contact':
        return (
          <section className="bg-primary min-h-screen flex items-center">
            <div className="container py-16 md:py-20">
              <Contact />
            </div>
          </section>
        )
      default:
        return <Hero setActiveSection={handleSectionChange} />
    }
  }

  return (
    <div className="min-h-screen flex bg-navy">
      {/* Vertical Sidebar */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={handleSectionChange}
        isTransitioning={isTransitioning}
      />
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-80 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.4,
              ease: "easeInOut"
            }}
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
        
        {/* Loading overlay during transition */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-navy/20 backdrop-blur-sm z-10 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-coffee border-t-transparent rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}