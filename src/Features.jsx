import React from 'react';
import { Paintbrush, ShieldCheck, Clock, Star } from 'lucide-react';

function Features() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">Why Choose Concept Custom?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">

          {/* Feature 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-white/20">
            <Paintbrush className="mx-auto text-pink-300 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Creative, Custom Designs</h3>
            <p className="text-sm text-gray-200">Each design is made from scratch to reflect your server’s unique identity.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-white/20">
            <ShieldCheck className="mx-auto text-purple-300 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">High-Quality Standards</h3>
            <p className="text-sm text-gray-200">Files are crisp, layered properly, and ready to go—no low-res shortcuts.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-white/20">
            <Clock className="mx-auto text-indigo-200 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
            <p className="text-sm text-gray-200">Most requests are completed within 48–72 hours with constant updates.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-white/20">
            <Star className="mx-auto text-yellow-300 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Trusted by Top Servers</h3>
            <p className="text-sm text-gray-200">Our work powers some of the most respected ERLC communities out there.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
