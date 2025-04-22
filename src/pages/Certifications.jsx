import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const certificates = [
  {
    name: "Cloud Computing Certification",
    platform: "NPTEL - IIT",
    date: "July - October 2024",
    description:
      "Completed 12-week online course on Cloud Computing with 72% score and elite certificate.",
    image: "/cloud-computing.png",
  },
  {
    name: "Full Stack Web Development using MERN Stack",
    platform: "Cipher Schools",
    date: "July 2024",
    description:
      "Learnt to build full-stack applications using MongoDB, Express.js, React.js, and Node.js and made a project - Weather Application.",
    image: "/mern.png",
  },
  {
    name: "Fundamentals of Management",
    platform: "Coursera",
    date: "March 2023",
    description:
      "Completed a course on management principles and practices, enhancing my understanding of organizational behavior and decision-making.",
    image: "/management.png",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Certificates = () => {
  const [modalImage, setModalImage] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen px-4 sm:px-16 py-12">
      <h2 className="text-4xl font-bold text-center text-[#00bcd4] mb-16">
        My Certificates
      </h2>

      <div className="space-y-16">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-transform duration-300 transform hover:scale-[1.02] overflow-hidden ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Certificate Info */}
            <div className="md:w-1/2 p-6 sm:p-8 space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#00bcd4]">
                {cert.name}
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold text-[#00bcd4]">Platform:</span>{" "}
                {cert.platform}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-[#00bcd4]">Date:</span>{" "}
                {cert.date}
              </p>
              <p className="text-gray-600">{cert.description}</p>
            </div>

            {/* Certificate Image */}
            <div className="md:w-1/2 p-6 flex justify-center">
              <img
                src={cert.image}
                alt={`Certificate: ${cert.name} from ${cert.platform}`}
                className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm cursor-pointer hover:opacity-90 transition"
                onClick={() => setModalImage(cert.image)}
              />
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
              alt="Enlarged Certificate"
              className="rounded-xl w-full max-w-full object-contain max-h-[90vh]"
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

export default Certificates;
