import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f0c29] via-[#1a1a2e] to-[#121212] py-20 px-6 md:px-20 lg:px-32 text-white" id="about">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Profile Card */}
        <div className="md:w-1/3 w-full bg-white/5 rounded-2xl shadow-xl p-8 text-center transition-transform duration-500 hover:scale-[1.03] border border-white/10 backdrop-blur">
          <img
            src="/profile.jpg"
            alt="Muskan Sharma"
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#00bcd4] shadow-lg transition-transform hover:scale-105"
          />
          <h2 className="text-2xl font-bold text-[#00bcd4] mt-5">Muskan Sharma</h2>
          <p className="text-gray-300 mt-3 text-sm">
            Aspiring Software Engineer | Java | DSA | Web Development | Passion for Scalable Solutions
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-5 text-2xl text-gray-400">
            <a href="https://github.com/Muskansharma-3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/muskan-sh/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0e76a8] transition">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/muskansharma0203/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <SiLeetcode />
            </a>
            <a href="https://www.hackerrank.com/profile/muskansharma0203" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaHackerrank />
            </a>
          </div>
        </div>

        {/* About Me Text with Highlights */}
        <div className="md:w-2/3 w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-xl px-8 py-10 border border-white/10 transition hover:shadow-2xl">
          <h2 className="text-4xl font-extrabold text-[#ff4081] mb-6">About Me</h2>

          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Hi, I’m <span className="text-[#00bcd4] font-semibold">Muskan Sharma</span>, a passionate Computer Science student who finds joy in merging <span className="text-white font-medium">logic</span> with <span className="text-white font-medium">design</span>.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            I love building things with impact—be it through <span className="text-white font-medium">clean code</span>, <span className="text-white font-medium">modern UIs</span>, or solving real-world problems with scalable solutions.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-200 text-lg leading-relaxed">
            <li><span className="text-[#00bcd4] font-medium">Java</span> and Object-Oriented Programming</li>
            <li><span className="text-[#00bcd4] font-medium">Data Structures & Algorithms</span> with logical problem-solving</li>
            <li><span className="text-[#00bcd4] font-medium">Web Development</span> with clean and modern UI/UX</li>
            <li>Building <span className="text-[#00bcd4] font-medium">user-friendly, scalable applications</span></li>
            <li>Strong <span className="text-[#00bcd4] font-medium">adaptability</span> and a quick learning attitude</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
