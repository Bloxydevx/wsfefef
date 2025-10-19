import { Star, Award, Trophy } from 'lucide-react';

function Portfolio() {
  const designers = [
    {
      name: 'rally_boy143',
      role: 'Executive, Lead Of Operations',
      specialty: 'Livery Design & Branding',
      rating: 5,
      projectsCompleted: 150,
      image: '/images/rally_boy143.png',
      featured: true,
      portfolio: [
        {
          title: 'LSPD Elite Patrol Unit',
          description: 'Custom livery design for Los Santos Police Department featuring modern graphics and department branding.',
          category: 'Livery'
        },
        {
          title: 'Fire Rescue Command',
          description: 'Complete vehicle wrap for Fire Department command vehicles with high-visibility design.',
          category: 'Livery'
        },
        {
          title: 'Sheriff Department Rebrand',
          description: 'Full department rebranding including logos, liveries, and graphic assets.',
          category: 'Branding'
        }
      ]
    },
    {
      name: 'bloxydev__',
      role: 'Co Executive, Co-Lead Of Operations',
      specialty: 'UI/UX & Graphics',
      rating: 5,
      projectsCompleted: 130,
      image: '/images/bloxydev__.png',
      featured: true,
      portfolio: [
        {
          title: 'Server Banner Pack',
          description: 'Professional Discord and social media banner set with cohesive branding.',
          category: 'Graphics'
        },
        {
          title: 'Agency Logo Suite',
          description: 'Complete logo design package with multiple variations and formats.',
          category: 'Logo'
        },
        {
          title: 'UI Interface Kit',
          description: 'Custom UI elements and graphics for in-game server interface.',
          category: 'UI/UX'
        }
      ]
    },
    {
      name: 'kingdummyj',
      role: "Concept Custom's 2025 Best Designer!",
      specialty: 'Livery Designs, Clothing & Discord Development',
      rating: 5,
      projectsCompleted: 200,
      image: 'https://cdn.discordapp.com/avatars/823595188031193148/15f8d87f59ab39a217fad6aaaf8a5f01.png',
      featured: true,
      portfolio: [
        {
          title: 'Custom Department Livery Pack',
          description: 'Comprehensive livery pack for multiple department vehicles with consistent branding and modern aesthetics.',
          category: 'Livery'
        },
        {
          title: 'Server Clothing Collection',
          description: 'Custom clothing designs for in-game characters including uniforms, casual wear, and branded apparel.',
          category: 'Clothing'
        },
        {
          title: 'Discord Bot Development',
          description: 'Custom Discord bot with automated features, moderation tools, and server management capabilities.',
          category: 'Development'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Designer Portfolio</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Meet our elite design team and explore their exceptional work. Each designer brings unique expertise and creativity to deliver outstanding results for your ERLC server.
          </p>
        </div>

        <div className="space-y-16">
          {designers.map((designer, idx) => (
            <div key={idx} className="max-w-6xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-900 to-indigo-900 p-8 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-6">
                      <img
                        src={designer.image}
                        alt={designer.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 border-4 border-yellow-400 shadow-lg items-center justify-center text-4xl font-bold hidden"
                      >
                        {designer.name[0].toUpperCase()}
                      </div>
                      {designer.featured && (
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-black p-2 rounded-full">
                          <Trophy size={20} />
                        </div>
                      )}
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2">{designer.name}</h2>
                    <p className="text-pink-300 text-sm font-semibold mb-4">{designer.role}</p>
                    
                    <div className="bg-white bg-opacity-10 rounded-lg p-4 w-full mb-4">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(designer.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-200">5.0 Rating</p>
                    </div>

                    <div className="space-y-2 w-full">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Award className="text-purple-300" size={20} />
                        <span>{designer.projectsCompleted}+ Projects</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-indigo-200">Specialty:</span>
                        <p className="font-semibold">{designer.specialty}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="text-pink-300">Featured Work</span>
                    </h3>
                    
                    <div className="space-y-4">
                      {designer.portfolio.map((project, pIdx) => (
                        <div
                          key={pIdx}
                          className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-pink-300/50 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-white">{project.title}</h4>
                            <span className="bg-pink-500 bg-opacity-30 px-3 py-1 rounded-full text-xs font-semibold">
                              {project.category}
                            </span>
                          </div>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-indigo-900 bg-opacity-30 rounded-lg border border-indigo-400/20">
                      <p className="text-sm text-gray-200 text-center">
                        Want to work with {designer.name.split('_')[0]}? Join our Discord to request them for your project!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl border border-white/20 p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-200 mb-6">
              Our talented designers are ready to bring your vision to life. Join our Discord community or fill out an order form to begin your project today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/concept25"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-200"
              >
                Join Discord
              </a>
              <a
                href="/ordering"
                className="px-8 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white/30 font-semibold rounded-lg hover:bg-opacity-30 transition-all duration-200"
              >
                Place Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
