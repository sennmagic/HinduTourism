const InfoHeader = ({ text, className = "" }) => {
    return (
      <div
        className={`w-full text-[#ac3c16] text-xs font-normal font-['Inter'] uppercase leading-none tracking-tight mb-4 ${className}`}
      >
        {text}
      </div>
    );
  };
  
  export default InfoHeader;