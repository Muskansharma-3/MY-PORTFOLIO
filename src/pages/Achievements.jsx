import React from "react";

const Achievements = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen px-4 sm:px-10 py-12">
      <h1 className="text-4xl font-bold text-center text-[#00bcd4] mb-16">
        Achievements
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LeetCode Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 duration-300 p-6">
          <img
            src="/leetcode.png"
            alt="LeetCode Profile"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h2 className="text-2xl font-semibold text-[#00bcd4] mb-3">
            📘 LeetCode Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>✅ Solved 205+ problems</li>
            <li>📆 50 Days Badge in 2025</li>
            <li>🌐 Ranked #574,444 globally</li>
            <li>📊 96 Easy, 98 Medium, 11 Hard</li>
            <li>🔥 Max streak: 23 days</li>
            <li>🕒 412+ submissions this year</li>
            <li>🗓️ Active days: 101</li>
          </ul>
        </div>

        {/* HackerRank Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 duration-300 p-6">
          <img
            src="/hackerrank.png"
            alt="HackerRank Profile"
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h2 className="text-2xl font-semibold text-[#00bcd4] mb-3">
            💻 HackerRank Badges
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>🌟 Problem Solving – 1 star</li>
            <li>🌟🌟🌟 C++ – 3 stars</li>
            <li>🌟🌟🌟🌟 Java – 4 stars</li>
            <li>🌟🌟 Python – 2 stars</li>
            <li>🌟 C Language – 1 star</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Achievements;
