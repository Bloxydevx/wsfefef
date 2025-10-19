import { useState, useEffect } from 'react';
import { X, Sparkles, Zap, Award } from 'lucide-react';

function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    const countdownCompleted = localStorage.getItem('countdownCompleted');

    if (countdownCompleted === 'true' && !hasSeenWelcome) {
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 rounded-3xl max-w-2xl w-full shadow-2xl border-4 border-yellow-400/30 overflow-hidden animate-slideUp relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
          aria-label="Close welcome message"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="p-8 md:p-12 text-center">
          <div className="mb-6 flex justify-center gap-3">
            <Sparkles className="w-12 h-12 text-yellow-400 animate-bounce-subtle" />
            <Zap className="w-12 h-12 text-yellow-300 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
            <Award className="w-12 h-12 text-yellow-400 animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Welcome to
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">
            Concept Customs
          </h2>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
            <p className="text-xl md:text-2xl text-white font-semibold mb-3">
              Your Go-To ERLC Design Hub 🎨
            </p>
            <p className="text-gray-200 text-base md:text-lg">
              Specializing in sleek liveries, polished graphics, logos, and more. Whether you're building a professional server or revamping your brand, we've got you covered!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-white font-semibold text-sm">Custom Designs</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white font-semibold text-sm">Fast Delivery</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-white font-semibold text-sm">5-Star Quality</div>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </button>
        </div>

        <div className="h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"></div>
      </div>
    </div>
  );
}

export default WelcomeModal;
