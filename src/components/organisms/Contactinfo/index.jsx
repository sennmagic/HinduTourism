import React from 'react'

const Contactinfo = () => {
  return (
    <div className="w-full md:w-80 h-auto flex-col justify-start items-start gap-9 flex">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-6 h-6 relative overflow-hidden">
        <img
          src="/images/whatsappblack.svg"
          alt="Connect for Trips & Information Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
          Connect for Trips & Information
        </div>
        <div className="text-stone-800 text-sm font-semibold leading-tight">
         +977 985-1354589
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-6 h-6 relative overflow-hidden">
        <img
          src="/images/email.svg"
          alt="Enquire a Tour & Information Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
          Enquire a Tour & Information
        </div>
        <div className="text-stone-800 text-sm font-semibold leading-tight">

info@thehindutourism.com
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-6 h-6 relative overflow-hidden">
        <img
          src="/images/location.svg"
          alt="Address Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
          Address
        </div>
        <div className="text-stone-800 text-sm font-semibold leading-tight">
        310, Unitech Arcedia
South City 2, Sector 49
Gurgaon, Haryana 122018
India
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Contactinfo