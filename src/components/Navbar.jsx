import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Left side: Name */}
        <div className="text-2xl font-bold text-[#00bcd4]">
          Muskan Sharma | CSE Student
        </div>

        {/* Right side: Links */}
        <div className="flex space-x-6 items-center font-medium text-[#00bcd4]">
          <Link
            to="/"
            className="hover:underline hover:scale-105 transition-all duration-200"
          >
            About
          </Link>
          <Link
            to="/resume"
            className="hover:underline hover:scale-105 transition-all duration-200"
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="hover:underline hover:scale-105 transition-all duration-200"
          >
            Projects
          </Link>
          <Link
            to="/certifications"
            className="hover:underline hover:scale-105 transition-all duration-200"
          >
            Certifications
          </Link>

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="hover:underline hover:scale-105 transition-all duration-200"
            >
              More ▾
            </button>
            {moreOpen && (
              <div
                onMouseLeave={() => setMoreOpen(false)}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
              >
                <Link
                  to="/skills"
                  className="block px-4 py-2 text-[#00bcd4] hover:bg-gray-100 hover:scale-105 transition"
                >
                  Skills/Technologies
                </Link>
                <Link
                  to="/achievements"
                  className="block px-4 py-2 text-[#00bcd4] hover:bg-gray-100 hover:scale-105 transition"
                >
                  Achievements
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-[#00bcd4] hover:bg-gray-100 hover:scale-105 transition"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
