import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! Welcome to Concept Custom! How can I help you today? Feel free to ask about our services, pricing, or how to get started with your custom design!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.message) {
        throw new Error('Invalid response from server');
      }
      
      setMessages([...updatedMessages, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Chat error:', error);
      
      let errorMessage = "I'm having trouble connecting right now. ";
      
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorMessage += "Please check your internet connection and try again.\n\n";
      } else if (error.message.includes('500') || error.message.includes('AI service not configured')) {
        errorMessage += "Our AI service is temporarily unavailable.\n\n";
      } else {
        errorMessage += "Something went wrong on our end.\n\n";
      }
      
      errorMessage += "For immediate help, please contact us:\n\n";
      errorMessage += "💬 Discord: https://discord.gg/concept25\n";
      errorMessage += "📧 Email: support@conceptcustoms.com\n";
      errorMessage += "📝 Or fill out the order form on our Ordering page\n\n";
      errorMessage += "Our team is always ready to assist you!";
      
      setMessages([...updatedMessages, { 
        role: 'assistant', 
        content: errorMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce-subtle"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-full sm:w-96 max-w-[calc(100vw-1.5rem)] sm:max-w-[calc(100vw-3rem)] h-[calc(100vh-6rem)] sm:h-[600px] sm:max-h-[calc(100vh-3rem)] bg-white rounded-lg shadow-2xl flex flex-col animate-slideUp">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-3 sm:p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <h3 className="font-bold text-sm sm:text-base">Concept Custom</h3>
                <p className="text-xs text-gray-200">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] px-3 sm:px-4 py-2 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="text-xs sm:text-sm whitespace-pre-wrap break-words">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-800 text-sm sm:text-base"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-2 sm:p-2.5 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
