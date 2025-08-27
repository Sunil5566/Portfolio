import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'

const MOCK = [
  {
    id: 'proj-1',
    title: 'Portfolio',
    desc: 'Personal portfolio built with React and Tailwind CSS with responsive design.',
    tech: ['React', 'Tailwind'],
    github: null,
    live: null,
    category: 'Website'
  },
  {
    id: 'proj-2',
    title: 'Project for 4th semester',
    desc: 'Project for 4th semester',
    tech: ['Java', 'Spring Boot'],
    github: null,
    live: null,
    category: 'Java'
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [showProjects, setShowProjects] = useState(false)
  const tags = ['All', 'Website', 'Java']

  const filtered = MOCK.filter((p) => 
    filter === 'All' || p.category === filter
  )

  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-darker/30 rounded-3xl" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-coffee">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coffee to-sky mx-auto mb-8" />
          <p className="text-lg text-light/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <motion.button 
            onClick={() => setShowProjects(!showProjects)}
            className={`px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 relative overflow-hidden ${
              showProjects 
                ? 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white' 
                : 'btn-primary text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: showProjects ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {showProjects ? <FaEyeSlash /> : <FaEye />}
            </motion.div>
            {showProjects ? 'Hide Projects' : 'View Projects'}
            
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-coffee/20 to-sky/20"
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex justify-center gap-3 mb-8 flex-wrap"
              >
                {tags.map((tag, index) => (
                  <motion.button 
                    key={tag}
                    onClick={() => setFilter(tag)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-6 py-3 rounded-full font-medium transition-all relative overflow-hidden ${
                      filter === tag 
                        ? 'bg-coffee text-white shadow-lg shadow-coffee/25' 
                        : 'bg-dark/50 hover:bg-dark/70 text-light border border-sky/20 hover:border-sky/40'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                    {filter === tag && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-sky/20 to-coffee/20"
                        layoutId="activeFilter"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>

              <motion.div 
                layout
                className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((project, index) => (
                    <motion.article
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -50, scale: 0.9 }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ y: -8, rotateX: 2 }}
                      className="project-card rounded-2xl p-8 group relative overflow-hidden"
                    >
                      {/* Background gradient effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-coffee/5 to-sky/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0, rotate: 180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      <div className="flex items-start justify-between mb-4 relative z-10">
                        <motion.h3 
                          className="font-bold text-2xl text-coffee group-hover:text-sky transition-colors"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.div
                          className="w-3 h-3 bg-coffee rounded-full relative"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              '0 0 0 0 rgba(139, 69, 19, 0.7)',
                              '0 0 0 10px rgba(139, 69, 19, 0)',
                              '0 0 0 0 rgba(139, 69, 19, 0)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>

                      <motion.p 
                        className="text-light/80 mb-6 leading-relaxed relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.desc}
                      </motion.p>

                      <motion.div 
                        className="flex items-center gap-2 flex-wrap mb-6 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.tech && project.tech.map((tech, techIndex) => (
                          <motion.span 
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-sm bg-gradient-to-r from-coffee/10 to-sky/10 border border-coffee/30 px-3 py-1 rounded-full text-coffee font-medium hover:border-sky/30 hover:text-sky transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.div 
                        className="flex gap-4 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {project.live ? (
                          <motion.a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-sky/30 hover:border-sky hover:bg-sky/10 transition-all text-sm font-medium text-sky"
                            whileHover={{ scale: 1.05, x: 2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </motion.a>
                        ) : (
                          <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 opacity-50 cursor-not-allowed text-sm text-gray-400">
                            <FaExternalLinkAlt /> No Demo
                          </span>
                        )}
                        
                        {project.github ? (
                          <motion.a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full btn-primary text-white text-sm font-medium"
                            whileHover={{ scale: 1.05, x: 2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub /> Source Code
                          </motion.a>
                        ) : (
                          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-600 text-white opacity-50 cursor-not-allowed text-sm">
                            <FaLock /> Private
                          </span>
                        )}
                      </motion.div>

                      {/* Decorative corner elements */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sky/10 to-transparent"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-coffee/10 to-transparent"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                    </motion.article>
                  ))}
                </AnimatePresence>

                {filtered.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full text-center py-12"
                  >
                    <motion.div
                      className="w-16 h-16 bg-coffee/20 rounded-full mx-auto mb-4 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <FaEyeSlash className="text-coffee text-2xl" />
                    </motion.div>
                    <p className="text-light/60 text-lg">No projects found for this filter.</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background decorative elements */}
        <motion.div
          className="absolute top-10 right-10 w-2 h-2 bg-sky rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-3 h-3 bg-coffee/60 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  )
}