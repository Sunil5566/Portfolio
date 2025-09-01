import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare, FaJava, FaDatabase, FaGithub, FaPython } from 'react-icons/fa'
import { SiC, SiTailwindcss, SiSpringboot } from 'react-icons/si'

const skills = [
  { 
    name: 'HTML', 
    icon: <FaHtml5 className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/30'
  },
  { 
    name: 'CSS', 
    icon: <FaCss3Alt className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/30'
  },
  { 
    name: 'Bootstrap', 
    icon: <FaBootstrap className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500/30'
  },
  { 
    name: 'JavaScript', 
    icon: <FaJsSquare className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-yellow-400 to-yellow-500',
    borderColor: 'border-yellow-500/30'
  },
  { 
    name: 'React', 
    icon: <FaReact className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-400/30'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-teal-400 to-cyan-500',
    borderColor: 'border-teal-400/30'
  },
  { 
    name: 'C programming', 
    icon: <SiC className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-blue-600 to-indigo-700',
    borderColor: 'border-blue-600/30'
  },
  { 
    name: 'Java', 
    icon: <FaJava className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-red-500 to-orange-600',
    borderColor: 'border-red-500/30'
  },
  {
    name: 'Python',
    icon: <FaPython className="text-2xl md:text-3xl lg:text-4xl" />,
    color: 'from-yellow-400 to-yellow-500',
    borderColor: 'border-yellow-500/30'
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="text-2xl md:text-3xl lg:text-4xl" />,
    color: 'from-green-600 to-green-700',
    borderColor: 'border-green-600/30'
  },
  { 
    name: 'Github', 
    icon: <FaGithub className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-gray-600 to-gray-800',
    borderColor: 'border-gray-600/30'
  },
  { 
    name: 'Databases', 
    icon: <FaDatabase className="text-2xl md:text-3xl lg:text-4xl" />, 
    color: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-500/30'
  }
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-darker/50 to-navy/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
            <motion.div
              className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-20 md:w-32 h-20 md:h-32 bg-coffee/5 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-24 md:w-40 h-24 md:h-40 bg-sky/5 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                About <span className="text-coffee">Me</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-coffee to-sky mx-auto mb-6 md:mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12 md:mb-16"
            >
              <div className="bg-gradient-to-r from-coffee/10 to-sky/10 rounded-xl md:rounded-2xl p-6 md:p-8 border border-coffee/20">
                <p className="text-base md:text-lg lg:text-xl text-light/90 leading-relaxed text-center">
                  I am a BCA student from Nepathya College (Tribhuvan University). I love building web applications and learning new technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                  Skills / <span className="text-coffee">Expertise</span>
                </h3>
                <p className="text-light/80 mb-6 md:mb-8 text-sm md:text-base">Technologies I've worked with</p>
                <motion.div
                  className="w-12 md:w-16 h-1 bg-gradient-to-r from-sky to-teal mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -4,
                      rotateY: 3
                    }}
                    className={`skill-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center group cursor-pointer ${skill.borderColor} border-2 relative overflow-hidden bg-darker/30 backdrop-blur-sm`}
                  >
                    {/* Background glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-sky/5 to-coffee/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl bg-gradient-to-br ${skill.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -5, 5, 0],
                        scale: 1.15
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white">
                        {skill.icon}
                      </div>
                    </motion.div>
                    <h4 className="font-semibold text-sm md:text-base lg:text-lg text-light group-hover:text-coffee transition-colors relative z-10 px-1">
                      {skill.name}
                    </h4>
                    
                    {/* Floating particles effect */}
                    <motion.div
                      className="absolute top-2 md:top-4 right-2 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-sky/40 rounded-full"
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <motion.div
                      className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-1 md:w-1.5 h-1 md:h-1.5 bg-coffee/40 rounded-full"
                      animate={{
                        y: [0, -6, 0],
                        x: [0, 4, 0],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.15
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}