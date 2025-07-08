'use client'

import { useState } from 'react'

export default function ProjectDescriptionInput({ value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false)
  const [charCount, setCharCount] = useState(0)

  const handleChange = (e) => {
    const newValue = e.target.value
    onChange(newValue)
    setCharCount(newValue.length)
  }

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  // More realistic project suggestions
  const suggestions = [
    'Kitchen remodel',
    'Add bathroom',
    'Finish basement', 
    'Build deck',
    'Solar panels',
    'New roof'
  ]

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        What are you building?
      </label>
      
      <div className={`relative transition-all duration-200 ${isFocused ? 'transform scale-[1.01]' : ''}`}>
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          rows={3}
          maxLength={400}
          className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-xl transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none focus:outline-none ${
            isFocused 
              ? 'border-orange-500 bg-white shadow-medium' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
          required
        />
        
        {/* Character count */}
        <div className="absolute bottom-2 right-3 text-xs text-gray-400">
          {charCount}/400
        </div>
      </div>
      
      {/* Quick suggestions */}
      <div className="mt-4">
        <p className="text-xs text-gray-600 mb-2.5">
          Popular projects:
        </p>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                onChange(suggestion)
                setCharCount(suggestion.length)
              }}
              className="inline-flex items-center px-3 py-1.5 text-xs text-gray-700 bg-gray-100 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-colors duration-150 border border-gray-200 hover:border-orange-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tips */}
      <div className="mt-4 p-3.5 bg-orange-50 rounded-xl border border-orange-100">
        <h4 className="text-xs font-medium text-orange-900 mb-2">💡 Quick tip</h4>
        <p className="text-xs text-orange-800 leading-relaxed">
          The more specific you are, the more accurate we can be. Mention things like square footage, electrical work, or structural changes.
        </p>
      </div>
    </div>
  )
} 