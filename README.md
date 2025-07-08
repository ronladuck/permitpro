# PermitEasy - Building Permit Requirements Made Simple

A clean, modern, and intuitive frontend MVP for a SaaS application that helps homeowners and contractors quickly identify what building permits they need by entering their project details and property address.

## 🚀 Features

- **Address-Specific Search**: Get permits based on your exact location and local regulations
- **Instant Results**: No waiting around - get your permit requirements in seconds
- **Cost & Timeline Estimates**: See estimated costs and processing times upfront
- **Interactive Chatbot**: Get quick answers to permit-related questions
- **Mobile-Friendly**: Responsive design that works seamlessly on all devices
- **Clean, Professional UI**: Minimalist design focused on ease of use and clarity

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React hooks (useState, useEffect)
- **HTTP Client**: Axios
- **UI Components**: Custom React components
- **Icons**: Heroicons (via SVG)

## 📁 Project Structure

```
permitpro/
├── app/
│   ├── components/
│   │   ├── AddressInput.jsx         # Address input with autocomplete
│   │   ├── ProjectDescriptionInput.jsx  # Project description textarea
│   │   ├── PermitCard.jsx           # Individual permit card display
│   │   ├── ChatbotWidget.jsx        # Floating chatbot modal
│   │   └── LoadingSpinner.jsx       # Loading spinner component
│   ├── results/
│   │   └── page.jsx                 # Permit results page
│   ├── globals.css                  # Global styles with Tailwind
│   ├── layout.jsx                   # Root layout component
│   └── page.jsx                     # Home/Search page
├── lib/
│   ├── api.js                       # API functions with mock data
│   └── utils.js                     # Utility functions
├── public/                          # Static assets
├── package.json                     # Dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── next.config.js                  # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd permitpro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Core Components

### Home Page (`app/page.jsx`)
- Clean hero section with clear value proposition
- Address input with autocomplete suggestions
- Project description textarea
- Prominent "Check Permits" call-to-action
- Feature showcase section

### Results Page (`app/results/page.jsx`)
- Search details summary
- Dynamic permit cards grid
- Back navigation
- Important notice section

### Address Input (`app/components/AddressInput.jsx`)
- Autocomplete suggestions (currently mock data)
- Ready for Google Places API integration
- Accessible dropdown interface

### Permit Cards (`app/components/PermitCard.jsx`)
- Comprehensive permit information display
- Priority indicators (high/medium/low)
- Cost and timeline estimates
- Requirements list
- Action buttons for details and applications

### Chatbot Widget (`app/components/ChatbotWidget.jsx`)
- Floating chat button
- Modal interface with conversation history
- Intelligent responses based on keywords
- Mobile-optimized design

## 🎨 Design System

### Colors
- **Primary**: Blue shades (#0ea5e9, #0284c7, #0369a1)
- **Background**: Gray-50 gradient backgrounds
- **Text**: Gray-900 for headings, Gray-600 for body text
- **Accents**: Context-specific colors for priority indicators

### Typography
- **Font**: Inter font family
- **Hierarchy**: Clear distinction between headings, subheadings, and body text
- **Responsive**: Scales appropriately across device sizes

### Layout
- **Responsive**: Mobile-first design approach
- **Spacing**: Consistent padding and margins using Tailwind spacing scale
- **Components**: Rounded corners, subtle shadows, and smooth transitions

## 📊 Mock Data

The application currently uses mock data for permit requirements. The system includes:

- **5 Permit Types**: Building, Electrical, Plumbing, Mechanical, Demolition
- **Keyword Analysis**: Intelligently matches project descriptions to required permits
- **Location-Based Pricing**: Cost adjustments based on property location
- **Realistic Processing Times**: Typical permit processing timelines

## 🔧 API Integration Ready

The app is structured for easy backend integration:

- API functions in `lib/api.js` with clear interfaces
- Mock data can be easily replaced with real API calls
- Error handling and loading states implemented
- Ready for Google Places API integration in address input

## 🌟 Key Features in Detail

### Smart Permit Detection
The application analyzes project descriptions using keyword matching to determine required permits:
- Building permits for structural work
- Electrical permits for wiring and electrical systems
- Plumbing permits for water-related work
- Mechanical permits for HVAC systems
- Demolition permits for removal work

### Location-Aware Pricing
Costs are adjusted based on property location:
- Higher multipliers for expensive areas (San Francisco, Manhattan)
- Moderate adjustments for mid-tier locations
- Standard pricing for other areas

### Responsive Design
- Mobile-optimized chatbot interface
- Flexible grid layouts that adapt to screen size
- Touch-friendly interactive elements
- Accessible color contrasts and typography

## 🚀 Future Enhancements

- **Google Places API**: Real address autocomplete
- **Real Backend Integration**: Connect to actual permit database
- **User Accounts**: Save searches and track permit applications
- **Payment Integration**: Direct permit fee payment
- **Document Upload**: Submit required documents
- **Status Tracking**: Monitor permit application progress
- **Email Notifications**: Updates on permit status changes

## 📝 Notes

This is an MVP frontend focused on clean user experience and easy backend integration. The mock data provides realistic testing scenarios while maintaining the structure needed for production API integration.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
