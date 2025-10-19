import { useState, useEffect } from 'react';
import { X, Sparkles, Zap, Award, Star } from 'lucide-react';

function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const checkWelcomeStatus = async () => {
      const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
      
      if (!hasSeenWelcome) {
        try {
          const response = await fetch('/api/countdown-status');
          if (response.ok) {
            const data = await response.json();
            
            if (!data.showCountdown) {
              setShouldShow(true);
              setTimeout(() => setIsVisible(true), 800);
            }
          }
        } catch (error) {
          console.error('Error checking countdown status:', error);
        }
      }
    };

    checkWelcomeStatus();
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  if (!shouldShow || !isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      <div 
        className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border-2 sm:border-4 border-yellow-400/40 overflow-hidden animate-slideUp relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2.5 transition-all duration-300 transform hover:scale-110 hover:rotate-90 group shadow-lg"
          aria-label="Close welcome message"
        >
          <X className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors" />
        </button>

        <div className="relative z-10 p-5 sm:p-8 md:p-12 text-center">
          {/* Icon header */}
          <div className="mb-4 sm:mb-6 flex justify-center gap-3 sm:gap-4">
            <div className="relative">
              <Sparkles className="w-10 h-10 sm:w-14 sm:h-14 text-yellow-400 animate-bounce-subtle" />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 absolute -top-1 -right-1 animate-spin-slow" />
            </div>
            <Zap className="w-10 h-10 sm:w-14 sm:h-14 text-yellow-300 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
            <div className="relative">
              <Award className="w-10 h-10 sm:w-14 sm:h-14 text-yellow-400 animate-bounce-subtle" style={{ animationDelay: '0.4s' }} />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 absolute -bottom-1 -left-1 animate-spin-slow" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Welcome title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight">
            🎉 Welcome to
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6 sm:mb-8 drop-shadow-2xl">
            Concept Custom
          </h2>

          {/* Main description card */}
          <div className="bg-white/15 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/30 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <p className="text-lg sm:text-xl md:text-3xl text-white font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl sm:text-3xl">🎨</span>
              Your Go-To ERLC Design Hub
            </p>
            <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed">
              Specializing in <span className="text-yellow-300 font-semibold">sleek liveries</span>, <span className="text-pink-300 font-semibold">polished graphics</span>, and <span className="text-purple-300 font-semibold">professional logos</span>. Whether you're building a professional server or revamping your brand, we've got you covered!
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎨</div>
              <div className="text-white font-bold text-sm sm:text-base mb-1">Custom Designs</div>
              <div className="text-gray-200 text-xs">Made from scratch</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⚡</div>
              <div className="text-white font-bold text-sm sm:text-base mb-1">Fast Delivery</div>
              <div className="text-gray-200 text-xs">48-72 hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⭐</div>
              <div className="text-white font-bold text-sm sm:text-base mb-1">Premium Quality</div>
              <div className="text-gray-200 text-xs">Trusted by top servers</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-extrabold text-base sm:text-lg md:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 border-2 border-yellow-300 active:scale-95"
          >
            Explore Our Services ✨
          </button>
          
          <p className="text-white/70 text-xs sm:text-sm mt-4 sm:mt-6">Click anywhere or press ESC to close</p>
        </div>

        {/* Bottom accent bar */}
        <div className="h-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-gradient"></div>
      </div>
    </div>
  );
}

export default WelcomeModal;
