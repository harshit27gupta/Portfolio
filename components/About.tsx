'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Trophy, BookOpen, Users } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const education = {
    institution: "Indian Institute of Information Technology, Allahabad",
    degree: "B.Tech in Information Technology",
    duration: "2022 - 2026",
    cgpa: "7.50/10",
    location: "Allahabad, India"
  }

  const highlights = [
    {
      icon: Trophy,
      title: "Competitive Programming Expert",
      description: "Top 1.14% on LeetCode with 1400+ problems solved"
    },
    {
      icon: BookOpen,
      title: "Strong Academic Foundation",
      description: "Specialized in DSA, DBMS, OS, and Computer Networks"
    },
    {
      icon: Users,
      title: "Passionate Hobbies",
      description: "Lawn Tennis enthusiast, Chess player, and Guitar lover"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white/50 to-slate-50/50 dark:from-slate-800/50 dark:to-slate-900/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-slate-800 dark:text-slate-200">About </span>
            <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A passionate full-stack developer and competitive programming enthusiast, 
            dedicated to creating innovative solutions and solving complex challenges.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
                         <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-accent-300/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  Education
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {education.degree}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    {education.institution}
                  </p>
                  
                                     <div className="grid grid-cols-2 gap-4">
                     <div className="flex items-center space-x-2">
                       <Calendar className="h-5 w-5 text-accent-500" />
                       <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                         {education.duration}
                       </span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <MapPin className="h-5 w-5 text-accent-500" />
                       <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                         {education.location}
                       </span>
                     </div>
                   </div>
                  
                  <div className="mt-4 p-3 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        CGPA
                      </span>
                      <span className="text-2xl font-bold gradient-text">
                        {education.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-accent-300/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default About
