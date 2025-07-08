'use client'

export default function PermitCard({ permit }) {
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'high':
        return {
          bg: 'bg-red-50',
          text: 'text-red-700',
          border: 'border-red-200',
          dot: 'bg-red-500'
        }
      case 'medium':
        return {
          bg: 'bg-orange-50',
          text: 'text-orange-700',
          border: 'border-orange-200',
          dot: 'bg-orange-500'
        }
      case 'low':
        return {
          bg: 'bg-green-50',
          text: 'text-green-700',
          border: 'border-green-200',
          dot: 'bg-green-500'
        }
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          border: 'border-gray-200',
          dot: 'bg-gray-500'
        }
    }
  }

  const formatCost = (cost) => {
    if (typeof cost === 'string') return cost
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(cost)
  }

  const priorityStyles = getPriorityStyles(permit.priority)

  return (
    <div className="group">
      <div className="card p-0 overflow-hidden hover:shadow-large transition-all duration-200 group-hover:scale-[1.01]">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">{permit.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {permit.name}
                  </h3>
                  <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${priorityStyles.bg} ${priorityStyles.text} ${priorityStyles.border} mt-1.5`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${priorityStyles.dot} mr-1.5`}></div>
                    {permit.priority === 'high' ? 'must have' : permit.priority === 'medium' ? 'probably need' : 'maybe need'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-5 text-sm">
            {permit.description}
          </p>
        </div>

        {/* Stats */}
        <div className="px-6 pb-5">
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-gray-50 rounded-lg p-3.5">
              <div className="text-lg font-bold text-gray-900 mb-1">
                {formatCost(permit.estimatedCost)}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                City fee
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3.5">
              <div className="text-lg font-bold text-gray-900 mb-1">
                {permit.processingTime}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                Typical wait
              </div>
            </div>
          </div>

          {/* Requirements */}
          {permit.requirements && permit.requirements.length > 0 && (
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">You'll need:</h4>
              <div className="space-y-2">
                {permit.requirements.slice(0, 3).map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span className="text-xs text-gray-600 leading-relaxed">{requirement}</span>
                  </div>
                ))}
                {permit.requirements.length > 3 && (
                  <div className="text-xs text-gray-500 mt-2 ml-4.5">
                    +{permit.requirements.length - 3} more things
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="bg-gray-50 px-6 py-4 flex gap-3">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm text-sm">
            Get details
          </button>
          <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 text-sm">
            Apply online
          </button>
        </div>
      </div>
    </div>
  )
} 