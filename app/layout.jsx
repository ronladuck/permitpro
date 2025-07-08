import './globals.css'

export const metadata = {
  title: 'PermitEasy - Building Permit Requirements Made Simple',
  description: 'Quickly identify what building permits you need for your project and property address.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
} 