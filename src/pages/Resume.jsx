import React from "react";

const resumes = [
  {
    title: "General Resume",
    file: "MY_CV.pdf",
  },
  {
    title: "Specialized Resume",
    file: "MY_CV2.pdf",
  },
];

function Resumes() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-10">My Resumes</h1>

      <div className="flex flex-col gap-12">
      {resumes.map((resume, index) => (
  <div
    key={index}
    className="border border-gray-300 rounded-xl p-4 shadow-md"
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{resume.title}</h2>
      <a
        href={resume.file}
        download
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Download Resume
      </a>
    </div>

    <embed
      src={`${resume.file}#toolbar=0&navpanes=0&scrollbar=0`}
      type="application/pdf"
      className="w-full h-[700px] rounded"
    />
  </div>
))}

      </div>
    </div>
  );
}

export default Resumes;
