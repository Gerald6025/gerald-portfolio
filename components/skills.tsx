"use client"
import React from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt, 
  FaDocker,
  FaDatabase,
  FaGithub
} from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 95 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 92 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 80 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: 75 },
        { name: "Database Design", icon: <FaDatabase className="text-purple-400" />, level: 82 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 88 },
        { name: "GitHub", icon: <FaGithub className="text-white" />, level: 90 },
        { name: "Docker", icon: <FaDocker className="text-blue-400" />, level: 70 }
      ]
    }
  ]

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500"
    if (level >= 80) return "bg-blue-500"
    if (level >= 70) return "bg-yellow-500"
    return "bg-gray-500"
  }

  return (
    <section id="skills" className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#016bdb]">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-[#016bdb]">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-xl">
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillLevelColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#016bdb]">
            Other Skills & Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Responsive Design",
              "RESTful APIs",
              "Problem Solving",
              "Team Collaboration",
              "Agile/Scrum",
              "UI/UX Design",
              "Performance Optimization",
              "Code Review"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-[#016bdb] transition-colors"
              >
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
