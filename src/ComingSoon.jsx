import { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdownEndTime = localStorage.getItem('countdownEndTime');
    let endTime;

    if (!countdownEndTime) {
      endTime = Date.now() + (9 * 60 * 60 * 1000);
      localStorage.setItem('countdownEndTime', endTime);
    } else {
      endTime = parseInt(countdownEndTime);
    }

    const updateCountdown = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        if (localStorage.getItem('countdownCompleted') !== 'true') {
          localStorage.setItem('countdownCompleted', 'true');
          setTimeout(() => {
            window.location.href = window.location.href.split('?')[0];
          }, 500);
        }
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl w-full">
        <div className="mb-8 flex justify-center">
          <Sparkles className="w-16 h-16 text-yellow-400 animate-bounce-subtle" />
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 animate-fadeIn">
          Concept Customs
        </h1>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-8 animate-slideUp">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Coming Soon</h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Something amazing is on the way!
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 md:p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-7xl font-extrabold text-white mb-2">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-sm md:text-lg text-gray-200 uppercase tracking-wider">
                Hours
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-7xl font-extrabold text-white mb-2">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-sm md:text-lg text-gray-200 uppercase tracking-wider">
                Minutes
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-600 to-yellow-500 rounded-2xl p-6 md:p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-7xl font-extrabold text-white mb-2">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-sm md:text-lg text-gray-200 uppercase tracking-wider">
                Seconds
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-300 text-lg md:text-xl animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <p className="mb-4">Your go-to ERLC design hub</p>
          <p className="text-yellow-400 font-semibold">Launching Soon...</p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
