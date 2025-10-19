import React from 'react';

function ServicesList() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold">Our Services</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
          Concept Custom delivers high-quality visual designs tailored for ERLC servers. Here's what we offer:
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold">Livery Design</h3>
            <p className="text-sm mt-2">Custom-made liveries for your department vehicles—clean, realistic, and tailored to your brand.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold">Logo Creation</h3>
            <p className="text-sm mt-2">Stand out with a unique logo crafted to represent your server or agency identity.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold">UI & Graphic Packs</h3>
            <p className="text-sm mt-2">From banners to social media kits—everything you need for a cohesive visual presence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
