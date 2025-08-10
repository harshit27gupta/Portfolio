'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, FileText, MessageCircle } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harshit-27gupta/',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/harshit27gupta',
    icon: Github,
    color: 'from-gray-800 to-gray-900'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/harshitraj6133/',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600'
  },
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1bw4dKyI65PCyKu9_yjVrDMDP4JwgJQ7C/view?usp=drive_link',
    icon: FileText,
    color: 'from-green-500 to-green-600'
  }
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'harshit.raj2023@gmail.com',
    link: 'mailto:harshit.raj2023@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9129978996',
    link: 'tel:+919129978996'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Lucknow, UP',
    link: '#'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MessageCircle className="h-12 w-12 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Connect
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Get in touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">{info.title}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Follow me</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center justify-center space-y-2 p-6 rounded-lg bg-gradient-to-r ${social.color} hover:shadow-lg transition-all duration-300`}
                >
                  <social.icon className="w-6 h-6 text-white" />
                  <span className="font-medium text-white text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
            <span className="text-lg">Available for new opportunities</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
