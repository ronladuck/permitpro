'use client'

import { useState, useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { GOOGLE_MAPS_CONFIG, AUTOCOMPLETE_OPTIONS } from '../../lib/googleMapsConfig'

export default function AddressInput({ value, onChange, placeholder }) {
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false)
  const autocompleteService = useRef(null)
  const placesService = useRef(null)

  // Fallback mock suggestions for when Google Maps API isn't available
  const mockSuggestions = [
    '1247 Oak Street, San Francisco, CA 94117',
    '3865 Mission St, San Francisco, CA 94110', 
    '2134 Fillmore Street, San Francisco, CA 94115',
    '892 Valencia St, San Francisco, CA 94110',
    '1567 Castro Street, San Francisco, CA 94114',
    '445 Divisadero St, San Francisco, CA 94117'
  ]

  // Load Google Maps API
  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        if (GOOGLE_MAPS_CONFIG.apiKey === 'your_google_maps_api_key_here') {
          console.warn('Google Maps API key not configured. Using mock suggestions.')
          return
        }

        const loader = new Loader(GOOGLE_MAPS_CONFIG)
        await loader.load()
        
        if (window.google && window.google.maps && window.google.maps.places) {
          autocompleteService.current = new window.google.maps.places.AutocompleteService()
          placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'))
          setIsGoogleMapsLoaded(true)
        }
      } catch (error) {
        console.warn('Failed to load Google Maps API:', error)
      }
    }

    loadGoogleMaps()
  }, [])

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    onChange(inputValue)

    if (inputValue.length > 2) {
      if (isGoogleMapsLoaded && autocompleteService.current) {
        // Use Google Places Autocomplete
        const request = {
          input: inputValue,
          ...AUTOCOMPLETE_OPTIONS
        }

        autocompleteService.current.getPlacePredictions(request, (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            const formattedSuggestions = predictions.slice(0, 4).map(prediction => ({
              description: prediction.description,
              placeId: prediction.place_id
            }))
            setSuggestions(formattedSuggestions)
            setShowSuggestions(true)
          } else {
            setShowSuggestions(false)
          }
        })
      } else {
        // Fallback to mock suggestions
        const filtered = mockSuggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(inputValue.toLowerCase())
        )
        const formattedSuggestions = filtered.slice(0, 4).map(suggestion => ({
          description: suggestion,
          placeId: null
        }))
        setSuggestions(formattedSuggestions)
        setShowSuggestions(true)
      }
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion.description)
    setShowSuggestions(false)
  }

  const handleFocus = () => {
    setIsFocused(true)
    if (value.length > 2) {
      // Re-trigger search when focusing
      handleInputChange({ target: { value } })
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    // Delay hiding suggestions to allow for click events
    setTimeout(() => setShowSuggestions(false), 200)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <label className="block text-sm font-medium text-gray-700">
          Project address
        </label>
        <div className="flex items-center text-xs">
          {isGoogleMapsLoaded ? (
            <div className="flex items-center text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
              Google Maps connected
            </div>
          ) : (
            <div className="flex items-center text-gray-500">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-1.5"></div>
              Using demo suggestions
            </div>
          )}
        </div>
      </div>
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
              key={suggestion.placeId || index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  {isGoogleMapsLoaded ? (
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-gray-900 font-medium text-sm">{suggestion.description}</span>
                  {isGoogleMapsLoaded && (
                    <div className="flex items-center mt-1">
                      <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-green-600">Verified address</span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
          {isGoogleMapsLoaded && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-center text-xs text-gray-500">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                Powered by Google Maps
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 