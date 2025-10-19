import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Home from "./Home";
import Ordering from "./Ordering";
import DesignerAccess from "./DesignerAccess";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-opacity-70 bg-gray-900 backdrop-blur-md shadow-lg">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-white hover:text-yellow-400 transition-colors">
            Concept Customs
          </Link>
          <div className="space-x-6 text-white">
            <Link
              to="/"
              className="hover:text-yellow-400 cursor-pointer transition-colors"
            >
              Home
            </Link>
            <Link
              to="/ordering"
              className="hover:text-yellow-400 cursor-pointer transition-colors"
            >
              Ordering
            </Link>
            <Link
              to="/designer-access"
              className="hover:text-yellow-400 cursor-pointer transition-colors"
            >
              Designer Access
            </Link>
            {isHomePage && (
              <ScrollLink
                to="footer"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 cursor-pointer transition-colors"
              >
                Contact
              </ScrollLink>
            )}
            {!isHomePage && (
              <Link
                to="/#footer"
                className="hover:text-yellow-400 cursor-pointer transition-colors"
              >
                Contact
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="/designer-access" element={<DesignerAccess />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
