import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />
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
        return <Hero setActiveSection={setActiveSection} />
    }
  }

  return (
    <div className="min-h-screen flex bg-navy">
      {/* Vertical Sidebar */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-80">
        {renderContent()}
      </main>
    </div>
  )
}