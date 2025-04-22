import React from "react";

const Achievements = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🌟 Achievements
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* LeetCode Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 duration-300">
          <img
            src="/leetcode.png" // Image from public folder
            alt="LeetCode Profile"
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            📘 LeetCode Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
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
        <div className="bg-white shadow-lg rounded-2xl p-6 transition-transform hover:scale-105 duration-300">
          <img
            src="/hackerrank.png" // Image from public folder
            alt="HackerRank Profile"
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            💻 HackerRank Badges
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
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
