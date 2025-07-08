'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AddressInput from './components/AddressInput'
import ProjectDescriptionInput from './components/ProjectDescriptionInput'
import ChatbotWidget from './components/ChatbotWidget'
import LoadingSpinner from './components/LoadingSpinner'

export default function HomePage() {
  const [address, setAddress] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!address.trim() || !projectDescription.trim()) {
      alert('Please fill in both address and project description')
      return
    }

    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const searchParams = new URLSearchParams({
        address: address,
        description: projectDescription
      })
      router.push(`/results?${searchParams.toString()}`)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-12 text-center lg:pt-24 lg:pb-16">
            {/* Main Headline */}
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Skip the permit headache.
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  We've got you covered.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-normal text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Tired of digging through city websites? Just tell us what you're building 
                and we'll figure out exactly which permits you need.
              </p>
            </div>

            {/* Search Form */}
            <div className="animate-slide-up max-w-lg mx-auto mb-16">
              <div className="card p-7 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AddressInput 
                    value={address}
                    onChange={setAddress}
                    placeholder="Where's your project?"
                  />
                  
                  <ProjectDescriptionInput 
                    value={projectDescription}
                    onChange={setProjectDescription}
                    placeholder="What are you building?"
                  />
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-medium hover:shadow-large transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <LoadingSpinner />
                        <span className="ml-3">Checking requirements...</span>
                      </span>
                    ) : (
                      'Show me what I need →'
                    )}
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Takes about 10 seconds • No signup required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Why contractors love us
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              We've helped over 10,000 projects get started faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="card p-7 text-center group hover:scale-105 transition-all duration-200">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:rotate-3 transition-transform duration-200">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Actually accurate</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Built by people who've pulled permits in 47 cities. We know the real requirements, not just what's on the website.
              </p>
            </div>

            <div className="card p-7 text-center group hover:scale-105 transition-all duration-200">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:rotate-3 transition-transform duration-200">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stupid fast</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                What used to take you 2 hours of research now takes 30 seconds. Seriously.
              </p>
            </div>

            <div className="card p-7 text-center group hover:scale-105 transition-all duration-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:rotate-3 transition-transform duration-200">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">No surprises</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real permit costs and timelines upfront. No "it depends" answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real people, real projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold mr-3">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                  <div className="text-sm text-gray-500">General Contractor, Austin TX</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "Saved me 3 hours on my last kitchen reno. Found out I needed a structural permit I would've missed completely."
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold mr-3">
                  SC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-500">Homeowner, Portland OR</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "Used this for our deck project. Way easier than calling the city office 5 times. Actually got someone who knew what they were talking about."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">12,847</div>
              <p className="text-sm text-gray-600">Projects helped</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">47</div>
              <p className="text-sm text-gray-600">Cities covered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">2.3hrs</div>
              <p className="text-sm text-gray-600">Avg time saved</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">94%</div>
              <p className="text-sm text-gray-600">Success rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to skip the permit runaround?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Join 12,000+ contractors and homeowners who don't waste time on research anymore.
          </p>
          <button
            onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-large transform hover:scale-105"
          >
            Get my permits now
          </button>
        </div>
      </section>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
} 