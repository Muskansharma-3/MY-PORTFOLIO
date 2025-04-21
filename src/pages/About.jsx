import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#f4f4f5] to-[#e5e7eb] py-20 px-6 md:px-20 lg:px-32" id="about">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Profile Card */}
        <div className="md:w-1/3 w-full bg-white rounded-2xl shadow-md p-8 text-center transition-transform duration-500 hover:scale-[1.03] hover:shadow-xl border border-gray-100">
          <img
            src="/profile.jpg"
            alt="Muskan Sharma"
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-sm"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-5">Muskan Sharma</h2>
          <p className="text-gray-600 mt-3 text-sm">
            Aspiring Software Engineer | Java | DSA | Web Development | Passion for Scalable Solutions
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-5 text-xl text-gray-500">
            <a href="https://github.com/Muskansharma-3" target="_blank" rel="noopener noreferrer" className="hover:text-black transition duration-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/muskan-sh/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-200">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/muskansharma0203/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-200">
              <SiLeetcode />
            </a>
            <a href="https://www.hackerrank.com/profile/muskansharma0203" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition duration-200">
              <FaHackerrank />
            </a>
          </div>
        </div>

        {/* About Me Text with Effects */}
        <div className="md:w-2/3 w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-md px-8 py-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 transition-opacity duration-700">About Me</h2>

          <p className="text-gray-700 text-[1.05rem] leading-relaxed mb-3">
            Hi, I’m <span className="font-semibold text-black">Muskan Sharma</span>, a passionate Computer Science student who finds joy in merging logic with design.
          </p>
          <p className="text-gray-700 text-[1.05rem] leading-relaxed mb-6">
            I love building things with impact—be it through clean code, modern UIs, or solving real-world problems.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-[1.05rem] leading-relaxed">
            <li><span className="font-medium text-black">Java</span> and Object-Oriented Programming</li>
            <li><span className="font-medium text-black">Data Structures & Algorithms</span> with logical problem-solving</li>
            <li><span className="font-medium text-black">Web Development</span> with clean and modern UI/UX</li>
            <li>Building <span className="font-medium text-black">user-friendly, scalable applications</span></li>
            <li>Strong <span className="font-medium text-black">adaptability</span> and a quick learning attitude</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
