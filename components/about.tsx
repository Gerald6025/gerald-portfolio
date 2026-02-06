"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#016bdb]">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#016bdb] rounded-lg transform rotate-6"></div>
              <Image
                src="/joe.jpg"
                alt="Gerald Chibanda"
                width={400}
                height={400}
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Web Developer & Problem Solver
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I&apos;m a passionate web developer with a keen eye for detail and
              a commitment to creating exceptional digital experiences. With
              expertise in modern web technologies, I transform ideas into
              powerful, user-friendly applications that drive results.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My journey in web development has equipped me with a strong
              foundation in both frontend and backend technologies. I thrive on
              challenges and continuously seek opportunities to learn and grow
              in this ever-evolving field.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-[#016bdb] mb-2">
                  Experience
                </h4>
                <p className="text-sm">2+ Years in Web Development</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-[#016bdb] mb-2">Projects</h4>
                <p className="text-sm">10+ Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
