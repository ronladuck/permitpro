# PermitPro

Skip the permit headache. We've got you covered.

## Features

- Smart permit detection based on project description
- Real-time address autocomplete with Google Maps integration
- Accurate cost and timeline estimates
- Comprehensive permit requirements
- Interactive chatbot for permit questions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Maps API key (for address autocomplete)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd permitpro
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Maps API (for address autocomplete):

   a. Go to the [Google Cloud Console](https://console.cloud.google.com/)
   
   b. Create a new project or select an existing one
   
   c. Enable the **Places API** for your project
   
   d. Create an API key:
      - Go to "Credentials" in the sidebar
      - Click "Create Credentials" → "API key"
      - Copy your API key
   
   e. (Optional but recommended) Restrict your API key:
      - Click on your API key to edit it
      - Under "API restrictions", select "Restrict key"
      - Choose "Places API" from the list
      - Under "Website restrictions", add your domain(s)

4. Configure your API key:

   **Option A: Environment Variable (Recommended)**
   
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

   **Option B: Direct Configuration**
   
   Edit `lib/googleMapsConfig.js` and replace `'your_google_maps_api_key_here'` with your actual API key.

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Google Maps Integration

The address input component automatically detects if Google Maps API is configured:

- **With API key**: Provides real-time address suggestions from Google Places
- **Without API key**: Falls back to mock suggestions for development

Features with Google Maps:
- ✅ Real address validation
- ✅ Autocomplete suggestions
- ✅ Address standardization
- ✅ Geographic accuracy

## API Reference

### Address Autocomplete

The `AddressInput` component supports:

- Real-time address suggestions
- US address filtering
- Place ID integration for enhanced accuracy
- Fallback to mock data when API unavailable

### Permit Detection

The system analyzes project descriptions for keywords to determine required permits:

- **Building permits**: renovation, remodel, addition, construction
- **Electrical permits**: electrical, wiring, outlet, circuit, panel
- **Plumbing permits**: plumbing, pipe, bathroom, kitchen, sink
- **Mechanical permits**: HVAC, heating, cooling, ventilation
- **Demolition permits**: demolition, remove, tear down

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **APIs**: Google Maps Places API
- **Deployment**: Vercel (recommended)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

[License information]

---

**Note**: This is a demonstration application. For production use, integrate with real permit databases and city APIs.
