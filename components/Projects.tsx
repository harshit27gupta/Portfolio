'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Users, TrendingUp, Database, Globe, Smartphone, Brain, Shield, ScrollText, Clock, Search, Mail, Palette } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: "InkAI",
      subtitle: "AI-Powered Blogging Platform",
      description: "A next-generation, AI-powered blogging platform designed to make content creation, sharing, and discovery smarter and more accessible. Features AI-powered blog generation, AI moderation for comments, role-based dashboards, infinite scroll, advanced search, and newsletter subscription. Successfully deployed with backend on Render and frontend on Vercel, kept alive using UptimeRobot.",
      image: "/api/placeholder/600/400",
      demoLink: "https://ink-ai-1.vercel.app/",
      githubLink: "https://github.com/harshit27gupta/INK_AI",
      features: [
        {
          icon: Brain,
          title: "AI-Powered Blog Generation",
          description: "Instantly generate professional blog content using advanced AI models"
        },
        {
          icon: Shield,
          title: "AI Moderation",
          description: "All comments checked by AI for safety and quality before publishing"
        },
        {
          icon: Users,
          title: "Role-Based Dashboards",
          description: "Separate admin and user dashboards for tailored experiences"
        },
        {
          icon: ScrollText,
          title: "Infinite Scroll & Search",
          description: "Effortlessly browse blogs with infinite scroll and fast pagination"
        },
        {
          icon: Mail,
          title: "Newsletter Subscription",
          description: "Stay updated with the latest posts and news"
        },
        {
          icon: Zap,
          title: "Performance Optimized",
          description: "React Query caching, MongoDB indexing, and code splitting"
        }
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AI Integration", "Vercel", "Render"],
      color: "from-purple-500 to-pink-600",
      featured: true
    },
    {
      title: "PrioritoTask",
      subtitle: "Task Management Application",
      description: "A full-stack task management application built with modern technologies for seamless task organization. Features optimized backend performance, robust deployment, and cross-platform responsive design. Successfully deployed on Render with improved API response times and production-ready architecture.",
      image: "/api/placeholder/600/400",
      demoLink: "https://github.com/harshit27gupta/PrioritoTask/blob/main/README.md",
      githubLink: "https://github.com/harshit27gupta/PrioritoTask",
      features: [
        {
          icon: Database,
          title: "20% API Response Improvement",
          description: "Backend optimization and async operations for better performance"
        },
        {
          icon: Globe,
          title: "Production Deployment",
          description: "Launched on Render with robust performance and scalability"
        },
        {
          icon: Smartphone,
          title: "Cross-Platform",
          description: "Responsive design optimized for all devices and screen sizes"
        },
        {
          icon: Clock,
          title: "Efficient Task Management",
          description: "Streamlined workflow for organizing and tracking tasks"
        },
        {
          icon: Search,
          title: "Advanced Search",
          description: "Quick task discovery with powerful search capabilities"
        },
        {
          icon: Palette,
          title: "Modern UI/UX",
          description: "Beautiful interface with intuitive user experience"
        }
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Render", "REST APIs", "Modern JavaScript"],
             color: "from-emerald-500 to-teal-600",
      featured: false
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white/50 to-slate-50/50 dark:from-slate-800/50 dark:to-slate-900/50">
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
            <span className="text-slate-800 dark:text-slate-200">Featured </span>
            <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            From AI-powered platforms to task management systems, 
            these projects showcase my expertise in building scalable, user-centric applications.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    {/* Project Preview - Iframe for Web, Image for Apps */}
                    {project.title === "InkAI" ? (
                      <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe 
                          src="https://ink-ai-1.vercel.app/"
                          className="w-full h-full border-0"
                          title={`${project.title} Live Preview`}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        />
                      </div>
                    ) : project.title === "PrioritoTask" ? (
                      <div className="aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">PrioritoTask</h3>
                            <p className="text-lg">Please visit the readme for the app preview.</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                            <Zap className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 font-medium">
                            {project.title} Preview
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <div className="flex space-x-3">
                          <motion.a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200 flex items-center space-x-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo/Readme</span>
                          </motion.a>
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200 flex items-center space-x-2"
                          >
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute -top-4 -right-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Featured Project
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Project Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xl text-primary-600 font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`p-2 bg-gradient-to-br ${project.color} rounded-lg`}>
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                            {feature.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>View Live Demo</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Github className="h-5 w-5" />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl p-8 border border-primary-200/50 dark:border-primary-700/30">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Want to see more?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
            <motion.a
              href="https://github.com/harshit27gupta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span>Explore My GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
