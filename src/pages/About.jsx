import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import "../About.css"; // Include the custom CSS for flip here

const About = () => {
  return (
    <div
      className="bg-gradient-to-b from-white via-gray-100 to-gray-200 py-20 px-6 md:px-20 lg:px-32 text-gray-800"
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Profile Card with Flip Animation */}
        <div className="w-full md:w-1/3 h-[430px] perspective">
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
              <img
                src="/profile.jpg"
                alt="Muskan Sharma"
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#00bcd4] shadow-md transition-transform hover:scale-105"
              />
              <h2 className="text-2xl font-bold text-[#00bcd4] mt-5">Muskan Sharma</h2>
              <p className="text-gray-600 mt-3 text-sm">
                Aspiring Software Engineer | Java | DSA | Web Development
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

            {/* Back Side */}
            <div className="absolute w-full h-full backface-hidden bg-[#f0f4f8] rounded-2xl shadow-xl p-6 text-center transform rotate-y-180">
              <h3 className="text-xl font-semibold text-[#00bcd4] mb-3">“Code is Poetry.”</h3>
              <p className="text-gray-700 text-sm">
                I love merging creativity with logic to build scalable, real-world web solutions.
              </p>
              <p className="mt-4 text-sm text-gray-600 italic">
                Hover back to see my socials 👀
              </p>
            </div>
          </div>
        </div>

        {/* About Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 w-full bg-white rounded-2xl shadow-xl px-8 py-10 border border-gray-300"
        >
          <h2 className="text-4xl font-extrabold text-[#ff4081] mb-6">About Me</h2>

          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Hi, I’m <span className="text-[#00bcd4] font-semibold">Muskan Sharma</span>, a passionate Computer Science student who finds joy in merging{" "}
            <span className="font-medium">logic</span> with <span className="font-medium">design</span>.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            I love building things with impact—be it through <span className="font-medium">clean code</span>,{" "}
            <span className="font-medium">modern UIs</span>, or solving real-world problems with scalable solutions.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg leading-relaxed">
            <li>
              <span className="text-[#00bcd4] font-medium">Java</span> and Object-Oriented Programming
            </li>
            <li>
              <span className="text-[#00bcd4] font-medium">Data Structures & Algorithms</span> with logical problem-solving
            </li>
            <li>
              <span className="text-[#00bcd4] font-medium">Web Development</span> with clean and modern UI/UX
            </li>
            <li>
              Building <span className="text-[#00bcd4] font-medium">user-friendly, scalable applications</span>
            </li>
            <li>
              Strong <span className="text-[#00bcd4] font-medium">adaptability</span> and a quick learning attitude
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
