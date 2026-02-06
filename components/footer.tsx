"use client"
import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#016bdb]">Gerald Chibanda</h3>
            <p className="text-gray-400 mb-4">
              A passionate web developer creating amazing digital experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gerald-chibanda-aa3689286/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#016bdb] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Gerald6025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#016bdb] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com/GeraldChibanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#016bdb] transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="mailto:geraldgchibanda6025@gmail.com"
                className="text-gray-400 hover:text-[#016bdb] transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#016bdb] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#016bdb] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#016bdb] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-[#016bdb] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#016bdb] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: geraldgchibanda6025@gmail.com</li>
              <li>Phone: +263 787 247 501</li>
              <li>Location: Victoria Falls, Zimbabwe</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Gerald Chibanda. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-[#016bdb] hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
