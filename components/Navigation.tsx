'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code, Github, Linkedin, Mail, Instagram } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/30'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <Code className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold">
              <span className="text-slate-800">Harshit</span>
              <span className="gradient-text"> Gupta</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/harshit27gupta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-full bg-slate-100 hover:bg-primary-100 text-slate-600 hover:text-primary-600 transition-all duration-200"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/harshit-27gupta/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-full bg-slate-100 hover:bg-primary-100 text-slate-600 hover:text-primary-600 transition-all duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/harshitraj6133/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-full bg-slate-100 hover:bg-primary-100 text-slate-600 hover:text-primary-600 transition-all duration-200"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:harshit.raj2023@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-full bg-slate-100 hover:bg-primary-100 text-slate-600 hover:text-primary-600 transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 hover:bg-primary-100 text-slate-600 hover:text-primary-600 transition-all duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50"
          >
            <div className="container-custom px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-slate-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/50">
                <motion.a
                  href="https://github.com/harshit27gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-slate-100 text-slate-600"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/harshit-27gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-slate-100 text-slate-600"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/harshitraj6133/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-slate-100 text-slate-600"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:harshit.raj2023@gmail.com"
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-slate-100 text-slate-600"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
