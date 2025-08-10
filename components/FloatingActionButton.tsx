'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowUp, Mail, Download, MessageCircle, X } from 'lucide-react'

interface ActionButton {
  icon: React.ComponentType<{ className?: string }>
  label: string
  action: () => void
  color: string
}

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const actions: ActionButton[] = [
    {
      icon: ArrowUp,
      label: 'Scroll to Top',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Send Email',
      action: () => window.location.href = 'mailto:harshit.raj2023@gmail.com',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Download,
      label: 'Download Resume',
      action: () => {
        // Open resume in new tab
        window.open('https://drive.google.com/file/d/1bw4dKyI65PCyKu9_yjVrDMDP4JwgJQ7C/view?usp=drive_link', '_blank')
      },
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      label: 'Quick Chat',
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <motion.button
                  onClick={action.action}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-gradient-to-r ${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  title={action.label}
                >
                  <action.icon className="w-5 h-5" />
                </motion.button>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 + 0.1 }}
                  className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap"
                >
                  {action.label}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        title={isExpanded ? 'Close' : 'Quick Actions'}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
