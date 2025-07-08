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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Why contractors use this instead of Google
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Because we've all wasted too many hours on city websites that don't make sense.
            </p>
          </div>

          <div className="space-y-8">
            {/* First benefit */}
            <div className="card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-green-700 uppercase tracking-wide">Actually helpful</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    We know what permits you <em>actually</em> need
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Built by people who've pulled permits in 47 cities. We know the difference between what the website says and what the permit office actually wants. No more getting to the counter and finding out you missed something obvious.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Real experience from 47 cities
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <div className="text-2xl font-bold text-blue-900 mb-2">94%</div>
                  <p className="text-sm text-blue-700">Get it right first time</p>
                </div>
              </div>
            </div>

            {/* Second benefit */}
            <div className="card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <div className="text-2xl font-bold text-green-900 mb-2">30 sec</div>
                  <p className="text-sm text-green-700">vs 3+ hours of research</p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-orange-700 uppercase tracking-wide">Time saver</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    No more digging through city websites
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    You know how it goes - you start looking for a simple permit and 2 hours later you're deep in municipal code wondering if you need an environmental impact study for a bathroom remodel. We cut through the BS.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Average time saved: 2.3 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Third benefit */}
            <div className="card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">No surprises</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Real costs upfront, not "call for pricing"
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Nobody likes surprises when you're trying to bid a job. We give you actual permit fees and realistic timelines so you can quote properly and set expectations with clients.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    Real fees from city databases
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <div className="text-2xl font-bold text-purple-900 mb-2">12k+</div>
                  <p className="text-sm text-purple-700">Projects priced accurately</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats bar */}
          <div className="mt-16 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">47</div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Cities covered</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">12,847</div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Projects helped</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">2.3hrs</div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Average saved</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">94%</div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Success rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hear it from people who've been there
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-7 relative">
              <div className="absolute top-5 right-5 text-orange-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MR
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mike Rodriguez</div>
                  <div className="text-sm text-gray-500">General Contractor • Austin, TX</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Saved me from a nightmare. Was about to start a kitchen gut job and almost missed the structural permit. Would've been a $5k mistake when the inspector showed up."
              </p>
            </div>

            <div className="card p-7 relative">
              <div className="absolute top-5 right-5 text-orange-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SC
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-500">Homeowner • Portland, OR</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Finally got straight answers! Portland's website is a maze and calling took forever. This told me exactly what I needed for our deck in under a minute."
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stop wasting mornings on permit research
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get back to building. We'll handle figuring out what paperwork you actually need.
          </p>
          <button
            onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-large transform hover:scale-105"
          >
            Tell us about your project →
          </button>
        </div>
      </section>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
} 