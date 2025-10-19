import React, { useState } from "react";

function Ordering() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const apiUrl = `${window.location.protocol}//${window.location.hostname}:3001/api/submit-order`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ 
          success: true, 
          message: "Order request submitted successfully! We'll get back to you soon." 
        });
        setFormData({
          name: "",
          email: "",
          service: "",
          details: "",
          budget: ""
        });
      } else {
        throw new Error(data.error || "Failed to submit");
      }
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: "Failed to submit order. Please try joining our Discord instead." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white pt-20">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-8">Place Your Order</h1>
        <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-12">
          Ready to elevate your ERLC server with professional designs? Fill out the form below or join our Discord to get started.
        </p>

        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Service Type */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold mb-2">
                Service Type
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              >
                <option value="" className="text-gray-900">Select a service</option>
                <option value="livery" className="text-gray-900">Livery Design</option>
                <option value="logo" className="text-gray-900">Logo Creation</option>
                <option value="ui-graphics" className="text-gray-900">UI & Graphic Packs</option>
                <option value="other" className="text-gray-900">Other / Custom Request</option>
              </select>
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="details" className="block text-sm font-semibold mb-2">
                Project Details
              </label>
              <textarea
                id="details"
                value={formData.details}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Describe your project, including any specific requirements, colors, themes, or references..."
                required
              ></textarea>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                Budget Range (Optional)
              </label>
              <input
                type="text"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="e.g., $50-$100"
              />
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-500 bg-opacity-20 border border-green-400 text-green-100' : 'bg-red-500 bg-opacity-20 border border-red-400 text-red-100'}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg transform transition-all hover:scale-105 duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? "Submitting..." : "Submit Order Request"}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center border-t border-white/20 pt-8">
            <p className="text-lg mb-4">Prefer to chat directly?</p>
            <a
              href="https://discord.gg/MwaDWK5SUb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all duration-200"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ordering;
