import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 text-center">
      {/* Contact Information */}
      <p>
        Contact us via email:{" "}
        <a href="mailto:support@conceptcustoms.com" className="text-yellow-400 hover:text-yellow-300">
          support@conceptcustoms.com
        </a>
      </p>

      {/* Social Links */}
      <div className="flex justify-center space-x-8 mt-4">
        <a
          href="https://discord.gg/concept25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-200 hover:underline"
        >
          Join Our Discord
        </a>
      </div>

      {/* Terms and Privacy Policy (Optional) */}
      <div className="mt-6 text-sm">
        <a
          href="/tos"
          className="text-yellow-400 hover:text-yellow-300 mx-2"
        >
          Terms
        </a>
        |
        <a
          href="/privacy"
          className="text-yellow-400 hover:text-yellow-300 mx-2"
        >
          Privacy Policy
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-sm text-gray-200">
        © 2025 Concept Customs. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
