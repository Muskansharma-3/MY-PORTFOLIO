import React from "react";
import {
  FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiCplusplus, SiJavascript, SiExpress, SiJquery,
  SiBootstrap, SiMongodb
} from "react-icons/si";

const categorizedSkills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-600" /> },
      { name: "JavaScript (ES6)", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "jQuery", icon: <SiJquery className="text-purple-600" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600" /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen px-4 sm:px-8 py-12" id="skills">
      <h2 className="text-4xl font-bold text-center text-[#00bcd4] mb-16">
        Skills & Technologies
      </h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {categorizedSkills.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-[#00bcd4] mb-6 text-center sm:text-left">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="font-medium text-gray-800 text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
