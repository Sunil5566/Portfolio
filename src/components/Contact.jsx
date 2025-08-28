import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaUser, FaComment, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('') // Clear error when user types
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Using mailto as fallback
      const mailtoLink = `mailto:bhattaraisunil591@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=From: ${encodeURIComponent(form.name)}%0D%0AEmail: ${encodeURIComponent(form.email)}%0D%0A%0D%0A${encodeURIComponent(form.message)}`
      window.location.href = mailtoLink
      
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError('Could not send message. Please try emailing directly: bhattaraisunil591@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-darker/30 rounded-3xl" />
      
      <div className="relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Contact <span className="text-coffee">Me</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-coffee to-sky mx-auto mb-6 md:mb-8" />
          <p className="text-base md:text-lg text-light/80 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? Send me a message and I'll get back to you soon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <FaUser className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-coffee/60 text-sm md:text-base" />
              <input 
                required 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-dark/50 border border-sky/20 rounded-xl md:rounded-2xl focus:border-sky focus:outline-none transition-all text-light placeholder-light/60 text-sm md:text-base"
                disabled={loading}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-coffee/5 to-sky/5 rounded-xl md:rounded-2xl opacity-0 pointer-events-none"
                whileFocus={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <FaEnvelope className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-coffee/60 text-sm md:text-base" />
              <input 
                required 
                name="email" 
                type="email" 
                value={form.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-dark/50 border border-sky/20 rounded-xl md:rounded-2xl focus:border-sky focus:outline-none transition-all text-light placeholder-light/60 text-sm md:text-base"
                disabled={loading}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky/5 to-coffee/5 rounded-xl md:rounded-2xl opacity-0 pointer-events-none"
                whileFocus={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-2 relative"
            >
              <FaComment className="absolute left-3 md:left-4 top-5 md:top-6 text-coffee/60 text-sm md:text-base" />
              <textarea 
                required 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                placeholder="Your Message" 
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 bg-dark/50 border border-sky/20 rounded-xl md:rounded-2xl focus:border-sky focus:outline-none transition-all text-light placeholder-light/60 resize-none text-sm md:text-base"
                rows={5}
                disabled={loading}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-coffee/5 to-sky/5 rounded-xl md:rounded-2xl opacity-0 pointer-events-none"
                whileFocus={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-2"
            >
              <motion.button 
                type="submit" 
                className="flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 btn-primary text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg mx-auto disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden w-full sm:w-auto min-w-[200px]"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
              >
                <motion.div
                  animate={loading ? { rotate: 360 } : {}}
                  transition={{ duration: 1, repeat: loading ? Infinity : 0 }}
                  className="flex-shrink-0"
                >
                  <FaPaperPlane className="text-sm md:text-base" />
                </motion.div>
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                
                {/* Button pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sky/20 to-coffee/20"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="text-center mt-4 md:mt-6 text-green-400 font-medium bg-green-400/10 py-3 px-4 md:px-6 rounded-xl border border-green-400/20 text-sm md:text-base"
                >
                  Message sent! I'll reply soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="text-center mt-4 md:mt-6 text-red-400 font-medium bg-red-400/10 py-3 px-4 md:px-6 rounded-xl border border-red-400/20 text-sm md:text-base"
                >
                  {error}
                </motion.div>
              )}
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 md:mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-dark/40 to-darker/40 border border-sky/20 rounded-xl md:rounded-2xl p-4 md:p-6 inline-block backdrop-blur-sm">
              <p className="text-light/80 mb-2 text-sm md:text-base">Or email me directly:</p>
              <motion.a 
                href="mailto:bhattaraisunil591@gmail.com" 
                className="text-coffee hover:text-sky font-semibold text-base md:text-lg transition-colors inline-flex items-center gap-2 break-all sm:break-normal"
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope className="text-xs md:text-sm flex-shrink-0" />
                <span>bhattaraisunil591@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced background decorations */}
        <motion.div
          className="absolute top-12 md:top-20 right-12 md:right-20 w-3 md:w-4 h-3 md:h-4 bg-coffee/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 md:bottom-32 left-8 md:left-16 w-2 md:w-3 h-2 md:h-3 bg-sky/50 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 12, 0],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-6 md:left-10 w-1.5 md:w-2 h-1.5 md:h-2 bg-teal/60 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  )
}