// Google Maps API Configuration
// To use this feature:
// 1. Get an API key from: https://developers.google.com/maps/documentation/javascript/get-api-key
// 2. Enable the Places API for your project
// 3. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file
// 4. Replace 'your_google_maps_api_key_here' with your actual API key

export const GOOGLE_MAPS_CONFIG = {
  // For development: Use environment variable or replace with your API key
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'your_google_maps_api_key_here',
  libraries: ['places'],
  version: 'weekly'
}

export const AUTOCOMPLETE_OPTIONS = {
  types: ['address'],
  componentRestrictions: { country: 'us' }, // Restrict to US addresses
  fields: ['formatted_address', 'address_components', 'geometry']
} 