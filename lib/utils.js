// Utility functions for PermitPro

/**
 * Formats currency values consistently
 * @param {number} amount - The amount to format
 * @returns {string} - Formatted currency string
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Capitalizes the first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
export function capitalizeWords(str) {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )
}

/**
 * Validates if a string looks like a valid address
 * @param {string} address - Address string to validate
 * @returns {boolean} - True if address looks valid
 */
export function isValidAddress(address) {
  if (!address || address.length < 5) return false
  
  // Check for basic address components
  const hasNumber = /\d/.test(address)
  const hasStreetName = /[a-zA-Z]/.test(address)
  const hasComma = address.includes(',')
  
  return hasNumber && hasStreetName && hasComma
}

/**
 * Extracts city and state from a formatted address
 * @param {string} address - Full formatted address
 * @returns {object} - Object with city and state
 */
export function parseAddress(address) {
  if (!address) return { city: '', state: '' }
  
  // Split by comma and extract city/state
  const parts = address.split(',').map(part => part.trim())
  
  if (parts.length >= 2) {
    const cityPart = parts[parts.length - 2]
    const statePart = parts[parts.length - 1]
    
    // Extract state code from "State ZIP" format
    const stateMatch = statePart.match(/^([A-Z]{2})\s/i)
    const state = stateMatch ? stateMatch[1] : statePart.substring(0, 2)
    
    return {
      city: cityPart,
      state: state
    }
  }
  
  return { city: '', state: '' }
}

/**
 * Checks if Google Maps API is available and loaded
 * @returns {boolean} - True if Google Maps is available
 */
export function isGoogleMapsAvailable() {
  return !!(window.google && 
           window.google.maps && 
           window.google.maps.places && 
           window.google.maps.places.AutocompleteService)
}

/**
 * Debounces function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Generates a unique ID for React keys
 * @returns {string} - Unique ID
 */
export function generateId() {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Formats address for display (shortens if too long)
 * @param {string} address - Address to format
 * @param {number} maxLength - Maximum length
 * @returns {string} - Formatted address
 */
export function formatAddressForDisplay(address, maxLength = 50) {
  if (!address) return ''
  
  if (address.length <= maxLength) return address
  
  // Try to truncate at a comma
  const commaIndex = address.lastIndexOf(',', maxLength - 3)
  if (commaIndex > maxLength / 2) {
    return address.substring(0, commaIndex) + '...'
  }
  
  // Fallback to simple truncation
  return address.substring(0, maxLength - 3) + '...'
}

/**
 * Validates project description for permit detection
 * @param {string} description - Project description
 * @returns {object} - Validation result
 */
export function validateProjectDescription(description) {
  if (!description || description.trim().length < 5) {
    return {
      isValid: false,
      message: 'Please provide a more detailed description of your project'
    }
  }
  
  if (description.length < 10) {
    return {
      isValid: false,
      message: 'Description is too short. Please add more details about what you\'re building'
    }
  }
  
  return {
    isValid: true,
    message: 'Good description!'
  }
} 