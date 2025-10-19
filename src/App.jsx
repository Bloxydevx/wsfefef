import React from "react";
import { Link } from "react-scroll";
import HeroSection from "./HeroSection";
import Features from "./Features";
import ServicesList from "./ServicesList"; // Renamed from CommandsList
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-opacity-70 bg-gray-900 backdrop-blur-md shadow-lg">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Concept Customs</h1>
          <div className="space-x-6 text-white">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <section id="hero">
        <HeroSection />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="services">
        <ServicesList /> {/* Formerly CommandsList */}
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
