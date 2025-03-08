import React from 'react';

const ContactInfo = () => {
  return (
    <div className="w-full md:w-80 h-auto flex-col justify-start items-start gap-9 flex">
      {/* WhatsApp Contact */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 relative overflow-hidden">
          <img src="/images/whatsappblack.svg" alt="Connect for Trips & Information Icon" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
            Connect for Trips & Information
          </div>
          <div className="text-stone-800 text-sm font-semibold leading-tight">
            +91 8375094215
       
          </div>
        </div>
      </div>

      {/* Email Contact */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 relative overflow-hidden">
          <img src="/images/email.svg" alt="Enquire a Tour & Information Icon" className="w-full h-full object-contain" />
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

      {/* Address - India */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 relative overflow-hidden">
          <img src="/images/location.svg" alt="Address Icon" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
            Address (India)
          </div>
          <div className="text-stone-800 text-sm font-semibold leading-tight">
            310, Unitech Arcedia, <br />
            South City 2, Sector 49, <br />
            Gurgaon, Haryana 122018, India 


            <br />
            <br />

            <div className="text-stone-800 text-xs font-normal leading-none tracking-tight">
            Address (Nepal)
          </div> 
            Gyandhara , <br />Gyaneshwor, Kathmandu-30          </div>
        </div>
      </div>

      {/* Address - Nepal */}
  
    </div>
  );
};

export default ContactInfo;
