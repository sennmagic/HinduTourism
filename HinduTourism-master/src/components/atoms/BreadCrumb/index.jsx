import React from 'react';
import InfoHeader from '../TextHeadings/InfoHeader';
import Link from 'next/link';
const Breadcrumb = ({ currentnavlink }) => {
  return (
    <div className="mx-auto max-w-7xl px-9 py-3 flex gap-[216px] cursor-pointer">
      <div className="flex items-center gap-2">
        <span className="text-[#5e6282] text-xs font-normal font-['Inter'] leading-[18px] tracking-tight"><Link href={"/"}>Home </Link></span>
        <span className="text-[#5e6282] text-xs font-normal font-['Inter'] leading-[18px] tracking-tight">/</span>
        <Link href={currentnavlink}><InfoHeader text={currentnavlink} className='!mb-0'/> </Link>
  
      </div>
    </div>
  );
};

export default Breadcrumb;
