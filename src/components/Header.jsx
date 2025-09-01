import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope, 
  FaGithub, FaInstagram, FaFacebook, FaBars, FaTimes 
} from 'react-icons/fa'

const NAV = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'resume', label: 'Resume', icon: <FaFileAlt /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Sunil5566', icon: <FaGithub />, color: 'hover:text-gray-300' },
  { name: 'Instagram', url: 'https://www.instagram.com/s_u_n05/', icon: <FaInstagram />, color: 'hover:text-pink-400' },
  { name: 'Facebook', url: 'https://www.facebook.com/sunil.bhattarai.12576', icon: <FaFacebook />, color: 'hover:text-sky' }
]

export default function Header({ activeSection, setActiveSection, isTransitioning }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex fixed left-0 top-0 w-80 h-screen bg-gradient-to-b from-darker to-navy border-r border-sky/20 flex-col z-50 overflow-y-auto"
      >
        <div className="p-8 text-center border-b border-sky/10">
          <h1 className="text-xl font-bold text-coffee mb-1">sunilbhattarai556.com.np</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            {NAV.map((nav, i) => (
              <motion.button
                key={nav.id}
                onClick={() => setActiveSection(nav.id)}
                disabled={isTransitioning}
                className={`w-full flex items-center gap-4 p-4 rounded-xl font-medium transition-all relative overflow-hidden group ${
                  activeSection === nav.id 
                    ? 'bg-gradient-to-r from-coffee/20 to-sky/20 text-coffee border border-coffee/30' 
                    : 'text-light/70 hover:text-light hover:bg-dark/30'
                } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.6 }}
                whileHover={!isTransitioning ? { scale: 1.02 } : {}}
                whileTap={!isTransitioning ? { scale: 0.98 } : {}}
              >
                <span className="text-xl">{nav.icon}</span>
                <span>{nav.label}</span>
                
                {/* Loading indicator for active button during transition */}
                {isTransitioning && activeSection === nav.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-coffee/10 to-sky/10"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-sky/10">
          <div className="flex justify-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`w-10 h-10 rounded-full bg-gradient-to-br from-dark/60 to-darker/80 border border-sky/20 flex items-center justify-center text-lg text-light/70 transition-all ${social.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-light/40 mt-6 text-center">© 2025 Sunil Bhattarai</p>
        </div>
      </motion.aside>

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-darker/90 backdrop-blur-md border-b border-sky/20 flex items-center justify-between px-4 py-3 z-50">
        <h1 className="text-lg font-bold text-coffee">sunilbhattarai556.com.np</h1>
        <button onClick={() => setMobileMenuOpen(true)} className="text-light text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-gradient-to-b from-darker to-navy shadow-xl z-50 flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="absolute top-4 right-4 text-light text-3xl"
            >
              <FaTimes />
            </button>

            {/* Navigation */}
            <nav className="flex-1 mt-16 px-6 space-y-4">
              {NAV.map((nav, i) => (
                <motion.button
                  key={nav.id}
                  onClick={() => {
                    setActiveSection(nav.id)
                    setMobileMenuOpen(false)
                  }}
                  disabled={isTransitioning}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-lg font-medium transition-colors ${
                    activeSection === nav.id
                      ? "bg-coffee/20 text-coffee"
                      : "text-light/70 hover:text-light hover:bg-dark/40"
                  } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                  whileHover={!isTransitioning ? { scale: 1.02 } : {}}
                  whileTap={!isTransitioning ? { scale: 0.98 } : {}}
                >
                  <span className="text-xl">{nav.icon}</span>
                  {nav.label}
                </motion.button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="px-6 py-4 border-t border-sky/20 flex justify-center gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-dark/50 border border-sky/20 text-light/70 text-lg ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}