'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Star, Target, TrendingUp, Code, Medal, Crown, Zap } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: "Built strong DSA foundations by solving 1400+ problems on LeetCode",
    organization: "LeetCode",
    year: "2025",
    description: "Comprehensive problem-solving experience covering all major data structures and algorithms.",
    icon: Code,
    category: "Competitive Programming"
  },
  {
    id: 2,
    title: "Solved 500+ hard-level problems on Codeforces",
    organization: "Codeforces",
    year: "2025",
    description: "Developed robust algorithmic intuition under timed environments with complex problem-solving.",
    icon: Target,
    category: "Competitive Programming"
  },
  {
    id: 3,
    title: "Achieved Expert rating (1872) on Codeforces",
    organization: "Codeforces",
    year: "2025",
    description: "Consistently ranked in the Top 500 in India among competitive programmers.",
    icon: TrendingUp,
    category: "Competitive Programming"
  },
  {
    id: 4,
    title: "Secured Rank 46/30,000+ in Codeforces Div2 contest",
    organization: "Codeforces",
    year: "2025",
    description: "Outstanding performance in a highly competitive programming contest.",
    icon: Medal,
    category: "Competitive Programming"
  },
  {
    id: 5,
    title: "Ranked in Top 1.14% on LeetCode and awarded Guardian Badge",
    organization: "LeetCode",
    year: "2025",
    description: "Recieved the guardian badge after securing 708 rank in weekly contest 408 .",
    icon: Crown,
    category: "Competitive Programming"
  },
  {
    id: 6,
    title: "Cracked JEE Mains with AIR 5596 (Top 0.75%)",
    organization: "JEE Mains",
    year: "2022",
    description: "Outstanding performance among 750K+ candidates.",
    icon: Trophy,
    category: "Academic Excellence"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="h-12 w-12 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Algorithmic Competitions & Achievements
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones and accomplishments that showcase my dedication to competitive programming and academic excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/50 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-blue-300 mb-2">
                  {achievement.organization}
                </p>
                
                <p className="text-sm text-gray-400 mb-3">
                  {achievement.year}
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full">
            <Star className="w-5 h-5" />
            <span className="font-semibold">More achievements coming soon!</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
