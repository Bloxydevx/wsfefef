import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-4">Privacy Policy</h1>
          <p className="text-center text-lg text-gray-200 mb-8">Effective Date: October 18, 2025</p>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/20 space-y-6">
            
            <p className="text-lg">
              At Concept Custom, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">1. Information We Collect</h2>
              <p className="text-lg mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                <li><strong>Account Information:</strong> Discord username, user ID, and Roblox username when you join our server.</li>
                <li><strong>Design Submissions:</strong> Images, files, and creative content you share within our community.</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and support requests sent through our server or email.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our server and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">2. How We Use Your Information</h2>
              <p className="text-lg mb-3">We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                <li>Provide and improve our design services.</li>
                <li>Process orders and deliver custom designs.</li>
                <li>Communicate with you about your projects and requests.</li>
                <li>Showcase community work (with proper credit and permission).</li>
                <li>Moderate our server and enforce community guidelines.</li>
                <li>Respond to support inquiries and feedback.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">3. Information Sharing</h2>
              <p className="text-lg">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4 mt-3">
                <li><strong>With Your Consent:</strong> When you explicitly allow us to showcase your designs.</li>
                <li><strong>Service Providers:</strong> Trusted platforms like Discord and Roblox that host our services.</li>
                <li><strong>Legal Requirements:</strong> If required by law or to protect our rights and safety.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">4. Data Security</h2>
              <p className="text-lg">
                We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">5. Your Rights</h2>
              <p className="text-lg mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                <li>Access and review the personal information we have collected about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>Opt out of having your designs showcased publicly.</li>
                <li>Leave our server at any time, which will remove your active participation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">6. Third-Party Services</h2>
              <p className="text-lg">
                Our services operate on Discord and Roblox platforms. We are not responsible for the privacy practices of these third-party services. Please review their respective privacy policies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4 mt-3">
                <li><a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Discord Privacy Policy</a></li>
                <li><a href="https://www.roblox.com/info/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">Roblox Privacy Policy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">7. Children's Privacy</h2>
              <p className="text-lg">
                Our services are intended for users aged 13 and older, in compliance with Discord and Roblox policies. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">8. Changes to This Policy</h2>
              <p className="text-lg">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">9. Contact Us</h2>
              <p className="text-lg">
                If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
              </p>
              <p className="text-lg mt-3">
                <a href="mailto:support@conceptcustoms.com" className="text-yellow-400 hover:text-yellow-300">
                  support@conceptcustoms.com
                </a>
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-center text-gray-300">
                By using Concept Custom, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
