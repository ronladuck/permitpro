'use client'

import { useState } from 'react'

export default function AddressInput({ value, onChange, placeholder }) {
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  // More realistic address suggestions
  const mockSuggestions = [
    '1247 Oak Street, San Francisco, CA 94117',
    '3865 Mission St, San Francisco, CA 94110', 
    '2134 Fillmore Street, San Francisco, CA 94115',
    '892 Valencia St, San Francisco, CA 94110',
    '1567 Castro Street, San Francisco, CA 94114',
    '445 Divisadero St, San Francisco, CA 94117'
  ]

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    onChange(inputValue)

    if (inputValue.length > 2) {
      // Filter mock suggestions based on input
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      )
      setSuggestions(filtered.slice(0, 4))
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion)
    setShowSuggestions(false)
  }

  const handleFocus = () => {
    setIsFocused(true)
    if (value.length > 2) setShowSuggestions(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    // Delay hiding suggestions to allow for click events
    setTimeout(() => setShowSuggestions(false), 200)
  }

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Project address
      </label>
      <div className="relative">
        <div className={`relative transition-all duration-200 ${isFocused ? 'transform scale-[1.01]' : ''}`}>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-xl transition-all duration-200 text-gray-900 placeholder-gray-500 focus:outline-none ${
              isFocused 
                ? 'border-orange-500 bg-white shadow-medium' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg 
              className={`w-5 h-5 transition-colors duration-200 ${
                isFocused ? 'text-orange-500' : 'text-gray-400'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-large overflow-hidden animate-scale-in">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium text-sm">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 