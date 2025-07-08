'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import PermitCard from '../components/PermitCard'
import ChatbotWidget from '../components/ChatbotWidget'
import LoadingSpinner from '../components/LoadingSpinner'
import { fetchPermitRequirements } from '../../lib/api'

export default function ResultsPage() {
  const [permits, setPermits] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const address = searchParams.get('address')
  const description = searchParams.get('description')

  useEffect(() => {
    const loadPermits = async () => {
      if (!address || !description) {
        router.push('/')
        return
      }

      try {
        setIsLoading(true)
        const permitData = await fetchPermitRequirements(address, description)
        setPermits(permitData)
      } catch (error) {
        console.error('Error fetching permits:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPermits()
  }, [address, description, router])

  const handleBackToSearch = () => {
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="large" />
          <p className="mt-4 text-base text-gray-600">Checking what permits you need...</p>
          <p className="mt-1 text-sm text-gray-500">Almost done</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-10">
          <button
            onClick={handleBackToSearch}
            className="flex items-center text-orange-500 hover:text-orange-600 mb-6 transition-colors group"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ← Try another project
          </button>
          
          <div className="card p-7">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Here's what you need
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Project address</span>
                <p className="text-base text-gray-900 mt-1.5">{address}</p>
              </div>
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">What you're building</span>
                <p className="text-base text-gray-900 mt-1.5">{description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {permits.length === 0 ? 'Good news!' : 
               permits.length === 1 ? '1 permit needed' : 
               `${permits.length} permits needed`}
            </h2>
            {permits.length > 0 && (
              <div className="text-sm text-gray-500">
                Total fees: {permits.reduce((total, permit) => total + (typeof permit.estimatedCost === 'number' ? permit.estimatedCost : 0), 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}
              </div>
            )}
          </div>
          
          {permits.length === 0 ? (
            <div className="card p-10 text-center">
              <div className="text-6xl mb-5">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No permits needed!
              </h3>
              <p className="text-base text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Based on what you're building and where you're building it, looks like you're good to go. 
                But hey, double-check with your city just to be sure.
              </p>
              <button
                onClick={handleBackToSearch}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 shadow-medium hover:scale-105"
              >
                Check another project
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {permits.map((permit) => (
                <PermitCard key={permit.id} permit={permit} />
              ))}
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="card p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-900 mb-2">
                Quick heads up
              </h3>
              <p className="text-orange-800 leading-relaxed text-sm">
                These are the typical permits for your type of project. Every city is a little different, so definitely 
                check with your local building department before you start. We're pretty accurate, but we're not psychic.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
} 