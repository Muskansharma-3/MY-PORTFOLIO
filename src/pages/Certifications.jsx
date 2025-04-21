import React, { useState } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const certificates = [
  {
    name: "Cloud Computing Certification",
    platform: "NPTEL - IIT",
    date: "July - October 2024",
    description: "Completed 12-week online course on Cloud Computing with 72% score and elite certificate.",
    image: "cloud-computing.png",
  },
  {
    name: "Full Stack Web Development using MERN Stack",
    platform: "Cipher Schools",
    date: "July 2024",
    description: "Learnt to build full-stack applications using MongoDB, Express.js, React.js, and Node.js and made a project - Weather Application.",
    image: "/mern.png",
  },
  {
    name: "Fundamentals of Management",
    platform: "Coursera",
    date: "March 2023",
    description: "Completed a course on management principles and practices, enhancing my understanding of organizational behavior and decision-making.",
    image: "/management.png",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Certificates = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="bg-gradient-to-tr from-white to-gray-50 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Certificates</h2>

      <div className="space-y-12">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition transform hover:scale-[1.02] ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Certificate Info */}
            <div className="md:w-1/2 p-6 space-y-3">
              <h3 className="text-2xl font-bold text-gray-800">{cert.name}</h3>
              <p className="text-gray-600"><strong>Platform:</strong> {cert.platform}</p>
              <p className="text-gray-600"><strong>Date:</strong> {cert.date}</p>
              <p className="text-gray-600">{cert.description}</p>
              
            </div>

            {/* Certificate Image */}
            <div className="md:w-1/2 p-4 flex justify-center">
              <img
                src={cert.image}
                alt={cert.name}
                className="rounded-xl shadow-lg w-full max-w-sm cursor-pointer hover:opacity-90 transition"
                onClick={() => setModalImage(cert.image)}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4" onClick={() => setModalImage(null)}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Enlarged Certificate" className="rounded-xl w-full object-contain max-h-[90vh]" />
            <button onClick={() => setModalImage(null)} className="absolute top-2 right-2 text-white text-2xl hover:text-red-400 transition">
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
