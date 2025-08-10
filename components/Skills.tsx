'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench, BookOpen, Zap } from 'lucide-react'

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90, color: "from-orange-500 to-red-600" },
        { name: "Python", level: 80, color: "from-blue-500 to-cyan-600" },
        { name: "C++", level: 88, color: "from-blue-600 to-indigo-700" },
        { name: "JavaScript", level: 92, color: "from-yellow-500 to-orange-600" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" }
      ]
    },
    {
      icon: Database,
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 88, color: "from-gray-500 to-gray-700" },
        { name: "REST APIs", level: 92, color: "from-blue-500 to-indigo-600" },
        { name: "MongoDB", level: 85, color: "from-green-600 to-green-800" },
        { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-800" }
      ]
    },
    {
      icon: Zap,
      title: "Frontend & UI",
      skills: [
        { name: "React", level: 92, color: "from-cyan-500 to-blue-600" },
        { name: "React Native", level: 85, color: "from-blue-500 to-indigo-600" },
        { name: "TailwindCSS", level: 88, color: "from-cyan-500 to-teal-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-600" },
        { name: "Responsive Design", level: 92, color: "from-purple-500 to-pink-600" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "Docker", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "AWS (EC2, S3)", level: 80, color: "from-orange-500 to-orange-700" },
        { name: "GitHub Actions", level: 82, color: "from-gray-600 to-gray-800" },
        { name: "Deployment", level: 88, color: "from-green-500 to-green-700" },
        { name: "CI/CD", level: 80, color: "from-purple-500 to-purple-700" }
      ]
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      skills: [
        { name: "VS Code", level: 95, color: "from-blue-500 to-blue-700" },
        { name: "Git/GitHub", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "Postman", level: 88, color: "from-orange-500 to-orange-700" },
        { name: "pgAdmin", level: 85, color: "from-blue-600 to-blue-800" },
        { name: "Cursor", level: 90, color: "from-purple-500 to-purple-700" }
      ]
    },
    {
      icon: BookOpen,
      title: "Academic & Concepts",
      skills: [
        { name: "Data Structures", level: 95, color: "from-green-500 to-green-700" },
        { name: "Algorithms", level: 92, color: "from-blue-500 to-blue-700" },
        { name: "DBMS", level: 88, color: "from-purple-500 to-purple-700" },
        { name: "Operating Systems", level: 85, color: "from-indigo-500 to-indigo-700" },
        { name: "Computer Networks", level: 82, color: "from-teal-500 to-teal-700" }
      ]
    }
  ]

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number; color: string }, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {skill.name}
        </span>
        <span className="text-sm font-bold text-accent-500 dark:text-accent-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white/20 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  )

  const renderIcon = (IconComponent: React.ComponentType<any>) => {
    return <IconComponent className="h-6 w-6 text-white" />
  }

  return (
    <section id="skills" className="section-padding">
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
            <span className="text-slate-800 dark:text-slate-200">Technical </span>
            <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            A comprehensive skill set developed through hands-on projects, 
            competitive programming, and continuous learning in modern technologies.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 hover:border-accent-300/50 transition-all duration-500"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl">
                  {renderIcon(category.icon)}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl p-8 border border-primary-200/50 dark:border-primary-700/30">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
              Additional Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Competitive Programming
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Expert in DSA with 1400+ LeetCode problems solved
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Performance Optimization
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Database indexing, React Query, and API optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Cloud Deployment
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  AWS, Docker, and production deployment expertise
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My journey in technology is driven by curiosity and a passion for solving complex problems. 
              I'm constantly exploring new technologies and methodologies to stay at the forefront of software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
