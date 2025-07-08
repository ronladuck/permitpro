'use client'

import { useState } from 'react'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! I'm here if you have questions about permits or need help with anything. What's up?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 800)
  }

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('cost') || input.includes('price') || input.includes('fee') || input.includes('much')) {
      return "Permit costs are all over the place depending on where you are. In most cities, you're looking at $50-300 for basic stuff, but complex projects can hit $1000+. The tool shows real costs for your area."
    }
    
    if (input.includes('time') || input.includes('long') || input.includes('take') || input.includes('fast')) {
      return "Most permits take 1-3 weeks if you submit everything correctly the first time. Some cities are faster, some are... not so much. We show you the real timelines for your city."
    }
    
    if (input.includes('document') || input.includes('requirement') || input.includes('need') || input.includes('paperwork')) {
      return "Every project is different, but usually you need plans, site surveys, and sometimes contractor info. The annoying part is every city wants it formatted differently. We tell you exactly what your city wants."
    }

    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hey! How can I help with your project? Need to know about permits, costs, or just have questions?"
    }
    
    return "I help with permit questions - costs, timelines, requirements, all that fun stuff. What do you want to know about your project?"
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-13 h-13 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-large transition-all duration-200 hover:scale-110 active:scale-95 z-50 flex items-center justify-center"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center p-4 z-50 animate-fade-in">
          <div className="glass rounded-2xl w-full max-w-sm h-[470px] flex flex-col shadow-large animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">😊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Permit Helper</h3>
                  <p className="text-xs text-green-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2.5 rounded-xl shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-900 border border-gray-200'
                    }`}
                  >
                    <p className="text-xs leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2.5">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-xs"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-200 flex items-center justify-center shadow-sm hover:scale-105 active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
} 