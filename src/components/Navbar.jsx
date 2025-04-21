import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left side: Name */}
        <div className="text-2xl font-bold text-gray-800">Muskan Sharma | CSE Student</div>
      

        {/* Right side: Links */}
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-500 font-medium">About</Link>
          <Link to="/resume" className="hover:text-blue-500 font-medium">Resume</Link>
          <Link to="/projects" className="hover:text-blue-500 font-medium">Projects</Link>
          <Link to="/certifications" className="hover:text-blue-500 font-medium">Certifications</Link>

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="hover:text-blue-500 font-medium"
            >
              More ▾
            </button>
            {moreOpen && (
              <div
                onMouseLeave={() => setMoreOpen(false)}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
              >
                <Link
                  to="/skills"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Skills/Technologies
                </Link>
                <Link
                  to="/achievements"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Achievements
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-gray-100"
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
