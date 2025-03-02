import React from 'react'

const page = () => {
  return (
    <div className="p-6   ">
    {/* Welcome Section */}
    <div className="bg-orange-light from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-6 relative overflow-hidden shadow-lg">
    <div className="relative z-10">
      <h2 className="text-3xl font-bold mb-2">Welcome Back, Admin 👋</h2>
      <p className="text-indigo-100 max-w-xl text-lg">Manage your platform with our comprehensive dashboard. Track progress and make data-driven decisions.</p>
      <button className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-white/30">
        Explore Analytics 
      </button>
    </div>
    <div className="absolute right-0 top-0 opacity-10 -translate-y-10 translate-x-10">
      <svg viewBox="0 0 200 200" className="w-64 h-64">
        <path fill="currentColor" d="M44.3,-58.3C57.5,-51.1,68.2,-37.1,73.1,-20.8C78,-4.5,77.1,14.2,70.3,29.6C63.5,45.1,50.9,57.5,36.3,65.2C21.7,72.9,5.1,75.9,-10.1,73.9C-25.4,71.8,-39.2,64.6,-50.5,54.4C-61.8,44.2,-70.5,31,-74.6,15.9C-78.7,0.8,-78.2,-16.2,-70.7,-29.2C-63.2,-42.2,-48.7,-51.3,-34,-58.1C-19.3,-64.9,-4.3,-69.6,11.1,-69.6C26.5,-69.6,53.1,-65.1,44.3,-58.3Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>
  </div>
  )
}

export default page;
