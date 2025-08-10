'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Database, Zap, Users, Shield, Rocket, Globe } from 'lucide-react'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const experiences = [
    {
      company: "AlgoUniversity",
      role: "Software Development Extern",
      duration: "May 2025 - July 2025",
      location: "Remote",
      backed: "Backed by Y-Combinator",
      description: "Built an online judge platform for users to submit and evaluate code solutions with high performance and security.",
      demoLink: "http://algojudge.duckdns.org/",
      achievements: [
        {
          icon: Code,
          title: "Online Judge Platform",
          description: "Designed and implemented user-friendly interface using React",
          metric: "Can handle 500+ code submissions/day with 99.9% uptime"
        },
        {
          icon: Database,
          title: "Backend Engineering",
          description: "Engineered backend using Node.js and Express.js",
          metric: "<200ms response time"
        },
        {
          icon: Shield,
          title: "Security & Rate Limiting",
          description: "Implemented rate limiter and secure code compiler",
          metric: "5 auth attempts/15min"
        },
        {
          icon: Rocket,
          title: "Deployment & DevOps",
          description: "Containerized with Docker and deployed on AWS EC2",
          metric: "30% faster deployment"
        }
      ],
      technologies: ["React", "Node.js", "Express.js", "Docker", "AWS EC2", "Rate Limiting", "Secure Compilation"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      company: "10-x dev",
      role: "Frontend Developer Intern",
      duration: "September 2024 - November 2024",
      location: "Remote",
      description: "Developed scalable broker applications and responsive web platforms within collaborative team environments.",
      achievements: [
        {
          icon: Users,
          title: "Team Collaboration",
          description: "Collaborated within a team of 3 developers",
          metric: "3-person team"
        },
        {
          icon: Globe,
          title: "Scalable Applications",
          description: "Built scalable broker application using React Native",
          metric: "RESTful APIs integration"
        },
        {
          icon: Zap,
          title: "Web Platform",
          description: "Developed responsive React web platform for poster management",
          metric: "Enhanced UX"
        }
      ],
      technologies: ["React.js", "React Native", "Node.js", "Express.js", "PostgreSQL", "RESTful APIs"],
      color: "from-green-500 to-emerald-600"
    }
  ]

  return (
    <section id="experience" className="section-padding">
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
            <span className="text-slate-800 dark:text-slate-200">Work </span>
            <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            From building high-performance online judge platforms to developing scalable applications, 
            I've gained valuable experience in modern web technologies and best practices.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-12 bg-gradient-to-b from-primary-300 to-transparent hidden lg:block" />
              )}

              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className={`p-3 bg-gradient-to-br ${exp.color} rounded-xl`}>
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-lg font-semibold text-primary-600 mb-1">
                        <span>{exp.company}</span>
                        {exp.backed && (
                          <span className="text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                            {exp.backed}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                  {exp.description}
                </p>

                {/* Demo Link */}
                {exp.demoLink && (
                  <div className="flex justify-center mb-8">
                    <motion.a
                      href={exp.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Live Demo</span>
                    </motion.a>
                  </div>
                )}

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-800/50 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-600/30 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 bg-gradient-to-br ${exp.color} rounded-lg`}>
                          <achievement.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                            {achievement.description}
                          </p>
                          <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                            {achievement.metric}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl p-8 border border-primary-200/50 dark:border-primary-700/30">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Ready to work together?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how we can create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
