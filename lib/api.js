// Mock permit data - in a real application, this would come from a backend API
const MOCK_PERMITS = [
  {
    id: 1,
    name: "Building Permit",
    description: "Required for structural modifications, additions, or new construction. This permit ensures your project meets local building codes and safety standards.",
    estimatedCost: 150,
    processingTime: "2-3 weeks",
    priority: "high",
    icon: "🏗️",
    requirements: [
      "Detailed construction plans and blueprints",
      "Site survey and property documentation",
      "Contractor license verification",
      "Structural engineer approval (if applicable)"
    ]
  },
  {
    id: 2,
    name: "Electrical Permit",
    description: "Required when adding, modifying, or upgrading electrical systems. Covers new circuits, panel upgrades, and major electrical work.",
    estimatedCost: 75,
    processingTime: "1-2 weeks",
    priority: "high",
    icon: "⚡",
    requirements: [
      "Electrical system diagram",
      "Licensed electrician information",
      "Load calculation documentation",
      "Equipment specifications"
    ]
  },
  {
    id: 3,
    name: "Plumbing Permit",
    description: "Required for plumbing modifications including new fixtures, pipe rerouting, or water line changes.",
    estimatedCost: 65,
    processingTime: "1-2 weeks",
    priority: "medium",
    icon: "🔧",
    requirements: [
      "Plumbing fixture layout",
      "Licensed plumber certification",
      "Water pressure test results",
      "Pipe material specifications"
    ]
  },
  {
    id: 4,
    name: "Mechanical Permit",
    description: "Required for HVAC system installation, modification, or major repairs. Includes heating, cooling, and ventilation systems.",
    estimatedCost: 85,
    processingTime: "1-3 weeks",
    priority: "medium",
    icon: "🌡️",
    requirements: [
      "HVAC system specifications",
      "Energy efficiency calculations",
      "Ductwork layout plans",
      "Licensed HVAC contractor information"
    ]
  },
  {
    id: 5,
    name: "Demolition Permit",
    description: "Required before removing walls, structures, or significant building components. Ensures safe demolition practices.",
    estimatedCost: 45,
    processingTime: "1 week",
    priority: "high",
    icon: "🔨",
    requirements: [
      "Demolition plan and scope",
      "Structural impact assessment",
      "Asbestos inspection report",
      "Debris disposal plan"
    ]
  }
]

// Keywords that trigger specific permits
const PERMIT_KEYWORDS = {
  building: ['renovation', 'remodel', 'addition', 'construction', 'build', 'structure', 'wall', 'room'],
  electrical: ['electrical', 'wiring', 'outlet', 'circuit', 'panel', 'lighting', 'switch'],
  plumbing: ['plumbing', 'pipe', 'bathroom', 'kitchen', 'sink', 'toilet', 'shower', 'water'],
  mechanical: ['hvac', 'heating', 'cooling', 'air conditioning', 'furnace', 'ductwork', 'ventilation'],
  demolition: ['demolition', 'remove', 'tear down', 'demo', 'destroy', 'eliminate']
}

/**
 * Determines which permits are required based on project description
 * @param {string} description - Project description
 * @returns {string[]} - Array of permit types required
 */
function analyzePermitRequirements(description) {
  const lowerDescription = description.toLowerCase()
  const requiredPermitTypes = []

  // Check for keywords in the description
  Object.entries(PERMIT_KEYWORDS).forEach(([permitType, keywords]) => {
    if (keywords.some(keyword => lowerDescription.includes(keyword))) {
      requiredPermitTypes.push(permitType)
    }
  })

  // Default to building permit for general renovations if no specific permits identified
  if (requiredPermitTypes.length === 0 && 
      (lowerDescription.includes('project') || lowerDescription.includes('work'))) {
    requiredPermitTypes.push('building')
  }

  return requiredPermitTypes
}

/**
 * Fetches permit requirements based on address and project description
 * @param {string} address - Property address
 * @param {string} description - Project description
 * @returns {Promise<Array>} - Array of required permits
 */
export async function fetchPermitRequirements(address, description) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  try {
    // Analyze the project description to determine required permits
    const requiredPermitTypes = analyzePermitRequirements(description)
    
    // Filter permits based on requirements
    let requiredPermits = MOCK_PERMITS.filter(permit => {
      const permitName = permit.name.toLowerCase()
      return requiredPermitTypes.some(type => permitName.includes(type))
    })

    // If no specific permits match, return empty array (no permits required)
    if (requiredPermits.length === 0) {
      return []
    }

    // Simulate location-based cost adjustments (higher costs for certain areas)
    const locationMultiplier = getLocationMultiplier(address)
    requiredPermits = requiredPermits.map(permit => ({
      ...permit,
      estimatedCost: Math.round(permit.estimatedCost * locationMultiplier)
    }))

    return requiredPermits
  } catch (error) {
    console.error('Error fetching permit requirements:', error)
    throw new Error('Failed to fetch permit requirements')
  }
}

/**
 * Gets location-based cost multiplier
 * @param {string} address - Property address
 * @returns {number} - Cost multiplier
 */
function getLocationMultiplier(address) {
  const lowerAddress = address.toLowerCase()
  
  // Higher costs for expensive areas
  if (lowerAddress.includes('san francisco') || 
      lowerAddress.includes('manhattan') || 
      lowerAddress.includes('beverly hills')) {
    return 1.5
  }
  
  // Moderate costs for medium-cost areas
  if (lowerAddress.includes('california') || 
      lowerAddress.includes('new york') || 
      lowerAddress.includes('washington')) {
    return 1.2
  }
  
  // Standard costs for other areas
  return 1.0
}

/**
 * Gets all available permit types (for reference)
 * @returns {Promise<Array>} - Array of all permit types
 */
export async function getAllPermitTypes() {
  await new Promise(resolve => setTimeout(resolve, 500))
  return MOCK_PERMITS
} 