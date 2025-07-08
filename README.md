# PermitEasy MVP

A modern web application that helps homeowners and contractors quickly identify building permit requirements by entering project details and property address.

## 🚀 Features

- **Instant Permit Detection**: Enter your address and project description to get permit requirements in seconds
- **Location-Aware**: Accurate requirements based on your specific address and local building codes
- **Cost Transparent**: Real permit costs and processing timelines upfront
- **Interactive Chatbot**: Get help with permit questions and requirements
- **Modern UI**: Clean, Haven-inspired design with orange and white color scheme
- **Mobile Responsive**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **State Management**: React Hooks
- **Development**: Hot reload, fast refresh

## 📁 Project Structure

```
permitpro/
├── app/
│   ├── components/
│   │   ├── AddressInput.jsx       # Address autocomplete input
│   │   ├── ChatbotWidget.jsx      # Interactive help chatbot
│   │   ├── LoadingSpinner.jsx     # Loading animation component
│   │   ├── PermitCard.jsx         # Individual permit display card
│   │   └── ProjectDescriptionInput.jsx # Project details input
│   ├── results/
│   │   └── page.jsx               # Results page showing permit requirements
│   ├── globals.css                # Global styles and theme
│   ├── layout.jsx                 # Root layout component
│   └── page.jsx                   # Homepage with search form
├── lib/
│   ├── api.js                     # Mock API for permit data
│   └── utils.js                   # Utility functions
└── public/                        # Static assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ronladuck/permitpro.git
   cd permitpro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will automatically reload when you make changes

## 🎨 Design System

The app uses a **Haven-inspired design** with:
- **Primary Color**: Orange (#f97316)
- **Typography**: Inter font family
- **Spacing**: Tight, professional spacing
- **Components**: Clean cards, modern buttons, subtle animations
- **Responsive**: Mobile-first approach

## 🧪 Current Status

**MVP Stage** - Core functionality implemented:
- ✅ Address input with autocomplete suggestions
- ✅ Project description input with helpful tips  
- ✅ Intelligent permit detection based on keywords
- ✅ 5 permit types with realistic costs and timelines
- ✅ Interactive chatbot with permit guidance
- ✅ Location-based pricing adjustments
- ✅ Responsive design across all devices

## 🔮 Next Steps

**Backend Integration:**
- [ ] Connect to real permit database APIs
- [ ] Implement user authentication  
- [ ] Add permit application tracking
- [ ] Real-time permit status updates

**Enhanced Features:**
- [ ] PDF permit application generation
- [ ] Email notifications and reminders
- [ ] Contractor network integration
- [ ] Multi-city expansion

## 🚀 Deployment

Ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify** 
- **AWS/GCP/Azure**

## 📞 Support

For questions or issues:
- Create a GitHub issue
- Contact the development team
- Check the chatbot for permit-related questions

---

**Built with ❤️ for contractors and homeowners who are tired of permit runaround.**
