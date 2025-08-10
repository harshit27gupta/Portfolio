'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, Instagram, FileText, Phone, MapPin, User, Briefcase, FolderOpen, Code, Award, MessageCircle } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/harshit27gupta',
    icon: Github,
    color: 'hover:text-gray-800 dark:hover:text-gray-200'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harshit-27gupta/',
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/harshitraj6133/',
    icon: Instagram,
    color: 'hover:text-pink-500'
  },
  {
    name: 'Email',
    url: 'mailto:harshit.raj2023@gmail.com',
    icon: Mail,
    color: 'hover:text-red-500'
  },
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1bw4dKyI65PCyKu9_yjVrDMDP4JwgJQ7C/view?usp=drive_link',
    icon: FileText,
    color: 'hover:text-green-500'
  }
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Harshit Gupta
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full-Stack Developer passionate about creating innovative solutions and building the future of web technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About', icon: User },
                { name: 'Experience', icon: Briefcase },
                { name: 'Projects', icon: FolderOpen },
                { name: 'Skills', icon: Code },
                { name: 'Contact', icon: MessageCircle }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <span>{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <p>harshit.raj2023@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <p>+91 9129978996</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-400" />
                <p>Lucknow, UP</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"
        />

        {/* Bottom Section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0"
          >
            <span>© 2024 Harshit Gupta. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and Next.js</span>
          </motion.div>
        </div> */}
      </div>
    </footer>
  )
}
