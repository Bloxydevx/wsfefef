import React from "react";
import { Link } from "react-scroll";
import HeroSection from "./HeroSection";
import Features from "./Features";
import ServicesList from "./ServicesList";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      {/* Page Sections */}
      <section id="hero">
        <HeroSection />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="services">
        <ServicesList />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
