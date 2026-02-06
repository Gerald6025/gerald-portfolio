"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Chinotimba Primary School",
      description: "A full-stack website for Chinotimba Primary School, featuring a responsive design, dynamic content management, and an integrated contact form.",
      image: "/chinos.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://chinotimba-primary-school.vercel.app/",
      githubUrl: "https://github.com/Gerald6025/Chinotimba-Primary-School"
    },
    {
      id: 2,
      title: "Sole Society",
      description: "A full-stack e-commerce platform for Sole Society a sneaker selling shop, offering a seamless shopping experience with product listings, user authentication, and a secure checkout process.",
      image: "/so.png",
      category: "frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://sole-society.vercel.app/",
      githubUrl: "https://github.com/Gerald6025/Sole-Society"
    },
    {
      id: 3,
      title: "Glass Gaming",
      description: "A responsive gaming blog website with interactive elements and real-time data visualization.",
      image: "/gla (1).png",
      category: "frontend",
      technologies: ["React", "API Integration", "Charts.js"],
      liveUrl: "https://glass-gaming.vercel.app/",
      githubUrl: "https://github.com/Gerald6025/glass-gaming"
    },
    {
      id: 4,
      title: "African Memories",
      description: "Official website for African Memories, a travel company specializing in African tours, featuring a visually stunning design, interactive tour packages, and a user-friendly booking system.",
      image: "/jer.jpg",
      category: "fullstack",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      liveUrl: "https://african-memories.vercel.app/",
      githubUrl: "https://github.com/Gerald6025/African-Memories"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const getTechIcon = (tech) => {
    switch(tech) {
      case 'React':
      case 'Next.js':
        return <FaReact className="text-cyan-400" />
      case 'Node.js':
        return <FaNodeJs className="text-green-400" />
      case 'MongoDB':
      case 'PostgreSQL':
        return <FaDatabase className="text-yellow-400" />
      default:
        return null
    }
  }

  return (
    <section id="projects" className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#016bdb]">
          My Projects
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-lg p-1 flex gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#016bdb] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="bg-[#016bdb] text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 bg-gray-800 text-xs px-3 py-1 rounded-full text-gray-300"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
