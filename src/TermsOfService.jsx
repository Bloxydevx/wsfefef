import React from "react";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-4">Terms of Service</h1>
          <p className="text-center text-lg text-gray-200 mb-8">Effective Date: October 18, 2025</p>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/20 space-y-6">
            
            <p className="text-lg">
              Welcome to Concept Custom! By using our server and services, you agree to the following terms:
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">1. Acceptance of Terms</h2>
              <p className="text-lg">
                By accessing or using Concept Custom, you agree to comply with these Terms of Service and any applicable laws. If you do not agree, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">2. Eligibility</h2>
              <p className="text-lg">
                You must be at least 13 years old to use our server and Roblox services. By joining, you confirm that you meet this age requirement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">3. User Conduct</h2>
              <p className="text-lg mb-3">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                <li>Respect all members and staff.</li>
                <li>Avoid harassment, hate speech, or discriminatory behavior.</li>
                <li>Refrain from spamming, scamming, or sharing malicious links.</li>
                <li>Use our server for intended purposes (Roblox design discussions, collaboration, and creative work).</li>
              </ul>
              <p className="text-lg mt-3">
                Violations may result in warnings, temporary mute/kick, or permanent ban depending on severity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">4. Content</h2>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                <li>Users retain ownership of their original designs.</li>
                <li>By sharing your designs in Concept Custom, you grant us permission to showcase them for community purposes (with credit).</li>
                <li>You may not share designs you do not own or have permission to distribute.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">5. Moderation</h2>
              <p className="text-lg">
                Our staff reserves the right to remove any content or messages that violate rules or disrupt the server. Decisions by staff are final.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">6. Liability</h2>
              <p className="text-lg mb-3">Concept Custom is not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                <li>Lost or deleted user data.</li>
                <li>Interactions with third parties, including transactions outside the server.</li>
                <li>Any damages resulting from use of Roblox or related platforms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">7. Server Changes</h2>
              <p className="text-lg">
                Concept Custom reserves the right to modify the server, rules, or features at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">8. Termination</h2>
              <p className="text-lg">
                We may suspend or terminate your access for violations or at our discretion.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-center text-gray-300">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:support@conceptcustoms.com" className="text-yellow-400 hover:text-yellow-300">
                  support@conceptcustoms.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
