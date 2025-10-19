import React from "react";
import { Users } from "lucide-react";

function MeetTheTeam() {
  const teamMembers = [
    {
      username: "rally_boy143",
      title: "Executive",
      role: "Lead Of Operations",
      gradient: "from-pink-500 to-purple-600",
      image: "https://cdn.discordapp.com/avatars/1038617345163276369/8be35951ff58e9ec052f9fe2f265966c.png"
    },
    {
      username: "bloxydev__",
      title: "Co Executive",
      role: "Co-Lead Of Operations",
      gradient: "from-indigo-500 to-blue-600",
      image: "https://cdn.discordapp.com/avatars/762104476785311796/5d59b1d221f10d46ed7f4f01f9a1a636.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Users className="mx-auto mb-4 text-yellow-400" size={64} />
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Meet the Team</h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Get to know the leadership behind Concept Customs. Our dedicated team works hard to deliver exceptional design services and maintain a thriving creative community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-4xl sm:text-5xl font-bold overflow-hidden`}>
                  <img 
                    src={member.image} 
                    alt={member.username}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = member.username.charAt(0).toUpperCase();
                    }}
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">{member.username}</h2>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl text-pink-300 font-semibold mb-1">{member.title}</p>
                  <p className="text-base sm:text-lg text-gray-200">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white bg-opacity-10 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-xl border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-base sm:text-lg text-gray-200 mb-6">
              We're always looking for talented designers and staff members. Join our Discord to learn about opportunities and get involved with the Concept Customs community!
            </p>
            <a
              href="https://discord.gg/concept25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
