import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Home from "./Home";
import Ordering from "./Ordering";
import DesignerAccess from "./DesignerAccess";
import Portfolio from "./Portfolio";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import MeetTheTeam from "./MeetTheTeam";
import ChatWidget from "./ChatWidget";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-opacity-70 bg-gray-900 backdrop-blur-md shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-2xl sm:text-3xl font-bold text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Concept Customs
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 text-white">
              <Link
                to="/"
                className="hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              >
                Home
              </Link>
              <Link
                to="/ordering"
                className="hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              >
                Ordering
              </Link>
              <Link
                to="/portfolio"
                className="hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              >
                Portfolio
              </Link>
              <Link
                to="/designer-access"
                className="hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              >
                Designer Access
              </Link>
              <Link
                to="/meet-the-team"
                className="hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
              >
                Meet the Team
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block text-white hover:text-yellow-400 transition-all duration-300 py-2 hover:pl-2"
              >
                Home
              </Link>
              <Link
                to="/ordering"
                onClick={closeMobileMenu}
                className="block text-white hover:text-yellow-400 transition-all duration-300 py-2 hover:pl-2"
              >
                Ordering
              </Link>
              <Link
                to="/portfolio"
                onClick={closeMobileMenu}
                className="block text-white hover:text-yellow-400 transition-all duration-300 py-2 hover:pl-2"
              >
                Portfolio
              </Link>
              <Link
                to="/designer-access"
                onClick={closeMobileMenu}
                className="block text-white hover:text-yellow-400 transition-all duration-300 py-2 hover:pl-2"
              >
                Designer Access
              </Link>
              <Link
                to="/meet-the-team"
                onClick={closeMobileMenu}
                className="block text-white hover:text-yellow-400 transition-all duration-300 py-2 hover:pl-2"
              >
                Meet the Team
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/designer-access" element={<DesignerAccess />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
