import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div
      className="bg-gradient-to-br from-gray-100 to-white min-h-screen p-8 px-16" // Added px-8 here for horizontal padding
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center md:w-1/3 w-full border border-gray-200 transform transition-transform duration-300 hover:scale-105">
          <img
            src="/profile.jpg"
            alt="Muskan Sharma"
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#00bcd4] shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <h2 className="text-2xl font-bold text-[#00bcd4] mt-5">
            Muskan Sharma
          </h2>
          <p className="text-gray-600 mt-3 text-sm">
            Aspiring Software Engineer | Java | DSA | Web Development | Passion for Scalable Solutions
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-5 text-2xl text-gray-500">
            <a
              href="https://github.com/Muskansharma-3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muskan-sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0e76a8] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/muskansharma0203/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.hackerrank.com/profile/muskansharma0203"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaHackerrank />
            </a>
          </div>
        </div>

        {/* About Me Text */}
        <div className="md:w-2/3 w-full bg-white rounded-2xl shadow-xl px-8 py-10 border border-gray-200 transform transition-transform duration-300 hover:scale-105">
  <h2 className="text-4xl font-extrabold text-[#00bcd4] mb-6">
    About Me
  </h2>

  <p className="text-gray-700 text-lg leading-relaxed mb-4">
    Hello, I’m <span className="text-[#00bcd4] font-semibold">Muskan Sharma</span>, a passionate Computer Science student who finds joy in merging <span className="font-medium text-[#333]">logic</span> with <span className="font-medium text-[#333]">design</span>.
  </p>

  <p className="text-gray-700 text-lg leading-relaxed mb-6">
    I love building things with impact—be it through <span className="font-medium text-[#333]">clean code</span>, <span className="font-medium text-[#333]">modern UIs</span>, or solving real-world problems with scalable solutions. My technical strengths include <span className="text-[#00bcd4] font-medium">Java</span> and object-oriented programming, as well as <span className="text-[#00bcd4] font-medium">Data Structures & Algorithms</span> with a strong focus on logical problem-solving. I also specialize in <span className="text-[#00bcd4] font-medium">Web Development</span>, crafting clean and intuitive UI/UX designs. With a quick learning attitude and strong <span className="text-[#00bcd4] font-medium">adaptability</span>, I strive to build <span className="text-[#00bcd4] font-medium">user-friendly, scalable applications</span> that make a difference.
  </p>
</div>

      </div>
    </div>
  );
};

export default About;
