import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Personal Finance Tracker",
    objective: "Empower users to manage expenses, savings, and income through an intuitive web platform.",
    techStack: "HTML, CSS, JavaScript, Node.js, MongoDB",
    features: "Category-wise tracking, dashboards, charts for visualization, and authentication system.",
    outcome: "Simplified financial awareness and budgeting decisions.",
    github: "https://github.com/Muskansharma-3/-Personal-Finance-Tracker-",
    live: "https://personal-finance-tracker-bpua.onrender.com",
    image1: "/personalfinance1.png",
    image2: "/personalfinance2.png",
  },
  {
    title: "Unisex Salon Management Website",
    objective: "Manage customer appointments and product sales seamlessly for a salon business.",
    techStack: "Laravel, PHP, Tailwind CSS, MySQL, Alpine.js",
    features: "Appointment booking, admin dashboard, product cart & checkout, real-time validations.",
    outcome: "Enhanced customer service and streamlined salon operations.",
    github: "https://github.com/Muskansharma-3/Salon-Website",
    live: "https://yourliveprojectlink.com/salon",
    image1: "/salon1.png",
    image2: "/salon2.png",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen p-8 px-16">
      <h2 className="text-4xl font-bold text-center text-[#00bcd4] mb-12">My Projects</h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} items-center bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition duration-300 overflow-hidden`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Description */}
            <div className="lg:w-1/2 p-8 space-y-3">
              <h3 className="text-3xl font-bold text-[#00bcd4]">{project.title}</h3>
              <p className="text-gray-700"><span className="font-semibold text-[#00bcd4]">Objective:</span> {project.objective}</p>
              <p className="text-gray-700"><span className="font-semibold text-[#00bcd4]">Tech Stack:</span> {project.techStack}</p>
              <p className="text-gray-700"><span className="font-semibold text-[#00bcd4]">Features:</span> {project.features}</p>
              <p className="text-gray-700"><span className="font-semibold text-[#00bcd4]">Outcome:</span> {project.outcome}</p>

              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00bcd4] text-white px-4 py-2 rounded-lg hover:bg-[#0097a7] transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            {/* Images with click-to-zoom */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
              {[project.image1, project.image2].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} Screenshot ${i + 1}`}
                  className="rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition"
                  onClick={() => setModalImage(img)}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Enlarged Project Screenshot"
              className="rounded-xl w-full object-contain max-h-[90vh]"
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-400 transition"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
