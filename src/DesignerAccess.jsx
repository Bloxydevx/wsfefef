import React, { useState } from "react";
import { Lock } from "lucide-react";

function DesignerAccess() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await fetch('/api/verify-designer-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password })
      });

      const data = await response.json();

      if (response.ok && data.valid) {
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
    } catch (error) {
      setError("Authentication system unavailable. Please try again later.");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/20">
          <div className="text-center mb-6">
            <Lock className="mx-auto mb-4 text-yellow-400" size={48} />
            <h1 className="text-3xl font-extrabold mb-2">Designer Access</h1>
            <p className="text-gray-200">This area is restricted to Concept Custom designers only.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Designer password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500 bg-opacity-20 border border-red-400 text-red-100 px-4 py-2 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-200"
            >
              Access Handbook
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-4">Designer Handbook</h1>
          <p className="text-center text-xl text-gray-200 mb-8">Welcome to the Concept Custom Designer Handbook!</p>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/20 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-lg leading-relaxed mb-4">
                Hey there, creative soul — we're thrilled to have you on board! This handbook is your all-in-one guide to being a successful designer within our server. Inside, you'll find everything you need to know about how we work, what's expected, where to find key resources, and how to grow within our design community.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Whether you're brand new or already part of the team, this guide will help you get up to speed and thrive in your role. If you have any questions, don't hesitate to reach out to the handbook creator or a member of HR+ — we're all here to support each other.
              </p>
              <div className="bg-yellow-400 bg-opacity-20 border-l-4 border-yellow-400 p-4 rounded">
                <p className="font-semibold">⚠️ Please Note:</p>
                <p>Any copying, redistribution, or misuse of this handbook will result in a permanent blacklist from the Creative Department — and possibly the entire staff team.</p>
              </div>
            </section>

            {/* Rules */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Rules</h2>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li><strong>Meet Deadlines</strong> - Submit your work on time. Let us know early if you need more time.</li>
                <li><strong>Keep Work High Quality</strong> - Do your best — no rushed or low-effort designs.</li>
                <li><strong>Be Original</strong> - Use your own work. No copying or stealing from others.</li>
                <li><strong>Take Feedback Well</strong> - Be open to changes and fix things when asked. If the ticket was closed for more than 48 hours.</li>
                <li><strong>Stay Organized</strong> - Name files properly and include everything needed (like names of the product).</li>
                <li><strong>Communicate</strong> - Check in regularly and let the team know if you're busy or need help.</li>
                <li><strong>Keep Things Private</strong> - Don't share client work, files, or team info without permission.</li>
                <li><strong>Be Respectful</strong> - No drama, no hate, no harassment. Be kind to everyone.</li>
                <li><strong>No Self-Promotion or Commission Hunting</strong> - Don't use the server to find your own clients unless given permission.</li>
              </ol>
            </section>

            {/* Designer Rates */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Designer Pay Rates</h2>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg space-y-2">
                <p className="text-xl"><strong>Intern</strong> — 85%</p>
                <p className="text-xl"><strong>Designer</strong> — 90%</p>
                <p className="text-xl"><strong>Senior Designer</strong> — 95%</p>
              </div>
              <p className="mt-4 text-lg">
                Example: If a design costs 100 Robux, you'll receive 85 Robux as an Intern, 90 Robux as a Designer, or 95 Robux as a Senior Designer.
              </p>
              <div className="mt-4">
                <p className="font-semibold text-lg mb-2">You can get promoted by:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Completing a high number of orders</li>
                  <li>Getting strong client reviews</li>
                  <li>Staying active and contributing consistently</li>
                </ul>
                <p className="mt-2 italic">Promotions are based on performance, not time. Keep delivering great work and engaging with the team to move up!</p>
              </div>
            </section>

            {/* Payment Eligibility */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Payment Eligibility Notice</h2>
              <p className="text-lg">
                To receive payment for your work, you must be a member of our Roblox group for at least 2 weeks.
              </p>
              <p className="mt-2 text-lg">
                This is a Roblox requirement, and we can't process payouts until that time has passed. Please make sure you've joined the group and remain in it to stay eligible for payment.
              </p>
              <p className="mt-2 text-lg">
                Let a staff member know if you have any questions or need help checking your join date.
              </p>
            </section>

            {/* Quality Control */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Quality Check Required Before Delivery</h2>
              <p className="text-lg mb-2">
                Before sending your final design to the customer, you must use the <code className="bg-gray-800 px-2 py-1 rounded">/qualitycheck</code> command and submit your work for review.
              </p>
              <p className="text-lg mb-2">
                Place your design in the quality check, and wait for it to be accepted by a Quality Department member or HR. Only after it's approved can you send the finished product to the client.
              </p>
              <p className="text-lg">
                This ensures we maintain high standards and deliver top-quality work every time.
              </p>
            </section>

            {/* Rank Requests */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Group Rank Required for Payment</h2>
              <p className="text-lg mb-2">
                To receive your payment, you must request your correct rank in the Roblox group.
              </p>
              <p className="text-lg mb-4">
                Make sure you've joined the group and then message a staff member to request your rank (Intern, Designer, or Senior Designer). Payouts will not be processed until your group rank matches your role.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold mb-2">Format:</p>
                <p># | Rank Request</p>
                <p>Roblox Username:</p>
                <p>Are you in group?: YES/NO</p>
                <p className="text-sm text-gray-400 mt-2">DO NOT PING ANYONE!</p>
              </div>
            </section>

            {/* Asset Usage */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Asset Usage Guidelines</h2>
              <p className="text-lg">
                You are allowed to use assets provided in #assets by Concept Custom staff, as well as any assets you've created or personally own.
              </p>
              <p className="text-lg mt-2">
                However, you may not claim assets made by others as your own, whether they come from Concept Custom or outside sources. Always give credit where it's due, and only use materials you have the rights to.
              </p>
            </section>

            {/* Order Logging */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Order Logging Instructions</h2>
              <p className="text-lg mb-2">When using the <code className="bg-gray-800 px-2 py-1 rounded">/orderlog</code> command, please make sure to:</p>
              <ul className="list-disc list-inside space-y-1 text-lg">
                <li>Select the correct customer</li>
                <li>Select the correct designer</li>
                <li>Log the order amount without tax (just the base price)</li>
              </ul>
              <p className="text-lg mt-2">
                Accurate logging helps us track payments and activity correctly, so double-check everything before submitting.
              </p>
            </section>

            {/* Bot Hosting */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Bot Hosting Prices</h2>
              <p className="text-lg mb-4">To proceed with bot hosting payment, please ping @rally_boy143 for approval and make sure to include tax in the total amount.</p>
              <div className="bg-white bg-opacity-5 p-4 rounded-lg space-y-1">
                <p>1 month - 300 Robux</p>
                <p>2 months - 400 Robux</p>
                <p>4 months - 500 Robux</p>
                <p>6 months - 700 Robux</p>
                <p>8 months - 900 Robux</p>
                <p>10 months - 1000 Robux</p>
                <p>1 year - 1,200 Robux</p>
              </div>
            </section>

            {/* Mandatory Procedures */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Mandatory Order & Quality Control Procedures</h2>
              <p className="text-lg mb-2">
                All designers are reminded that, effective immediately, they must log all customer orders without applying tax. Additionally, every item you create must be fully quality controlled before it is handed off to the customer.
              </p>
              <p className="text-lg mb-2">
                If, for any reason, the payment verification does not come through or fails to send, you are required to ping @rally_boy143 directly to confirm whether the customer has actually paid.
              </p>
              <p className="text-lg mb-2">
                Once you've completed the order, ping @rally_boy143 or @bloxydev__ to send the "Thank you message" at the end. The submission must include everything that was ordered—no partial or incomplete deliveries.
              </p>
              <p className="text-lg font-semibold text-yellow-300">
                Failure to follow any of these steps will result in a two-day suspension.
              </p>
            </section>

            {/* Expectations */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Expectations</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-xl mb-1">Order Turnaround Times!</p>
                  <ul className="list-disc list-inside">
                    <li>Small Orders – Completed in just 1–2 days</li>
                    <li>Large Orders – Ready within 1 week</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-xl mb-1">Create Your Own Packages – and Save Big!</p>
                  <p>Whether you're into clothing packages or livery packages, you can now build your own, and get a percentage of it depending on your rank! Open a HR ticket and request to sell a package!</p>
                </div>
                <div>
                  <p className="font-semibold text-xl mb-1">Want to Teach?</p>
                  <p>You can now apply to be a course instructor and share your skills with the community. Plus, you'll get the chance to release free items and build your brand while giving back!</p>
                </div>
              </div>
            </section>

            {/* Claiming Orders */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Claiming Orders</h2>
              <p className="text-lg">
                Designers are allowed to claim only two orders at a time to ensure quality and fairness across the team. Once a designer completes their current order and it is officially closed, they can then claim a new one.
              </p>
              <p className="text-lg mt-2 font-semibold text-yellow-300">
                Claiming more than two will result in punishment.
              </p>
            </section>

            {/* Reminder Logs */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Reminder: Order Logging</h2>
              <p className="text-lg mb-2">
                When logging orders without tax in order-logs you should log the order at the original price without tax.
              </p>
              <p className="text-lg mb-2">
                Designers should use the <code className="bg-gray-800 px-2 py-1 rounded">/paymentedit</code> command, which sets the game pass to the specified amount, ensuring the customer pays the correct amount.
              </p>
              <p className="text-lg">
                All orders should be completed within 4 days unless there are loads to do. You can get this extended by contacting a HR member.
              </p>
            </section>

            {/* Commands */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-300">Commands Usage</h2>
              <p className="text-lg mb-4">Below will show you what each command is used for. Any questions feel free to open a general support ticket!</p>
              <div className="bg-gray-800 p-6 rounded-lg space-y-2 font-mono text-sm">
                <p><code className="text-yellow-400">/customer @user</code> - Give this to the client who paid.</p>
                <p><code className="text-yellow-400">/review @user</code> - Customer is able to give the designer a review.</p>
                <p><code className="text-yellow-400">/funds</code> – Checks group funds (Executive+)</p>
                <p><code className="text-yellow-400">/group</code> - Sends a link to our official Roblox group.</p>
                <p><code className="text-yellow-400">/membercount</code> – Display server members</p>
                <p><code className="text-yellow-400">/orderlog</code> – Logs orders when completed (without tax)</p>
                <p><code className="text-yellow-400">/qualitycheck</code> – Quality assurance tool</p>
                <p><code className="text-yellow-400">/paymentedit</code> - Sends a payment of an exact amount</p>
                <p><code className="text-yellow-400">/tax</code> - Tax's an amount by 30%</p>
                <p><code className="text-yellow-400">/watermark</code> - Place Concept Custom Logo on your work</p>
              </div>
            </section>

            <div className="bg-yellow-400 bg-opacity-20 border-l-4 border-yellow-400 p-4 rounded mt-8">
              <p className="font-semibold">⚠️ Please Note:</p>
              <p>Any copying, redistribution, or misuse of this handbook will result in a permanent blacklist from the Creative Department — and possibly the entire staff team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignerAccess;
