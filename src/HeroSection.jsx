import React from 'react';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center py-32">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Main Heading with Emphasis on "Customs" */}
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
          Concept <span className="text-pink-300">Customs</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
          Concept Customs is your go-to ERLC design hub—specializing in sleek liveries, polished graphics, logos, and more. Whether you're building a professional server or revamping your brand, we've got you covered.
        </p>

        {/* Join Button */}
        <a href="https://discord.gg/concept25" target="_blank" rel="noopener noreferrer">
          <button className="mt-8 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg transform transition-all hover:scale-105 duration-200 z-20 relative">
            Join the Server
          </button>
        </a>
      </div>

      {/* Optional: Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: 'url(/path/to/design-showcase.jpg)' }}
      ></div>
    </section>
  );
}

export default HeroSection;
