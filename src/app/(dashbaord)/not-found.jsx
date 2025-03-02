import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
<>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <Image 
        src="/images/404.png" 
        alt="Not Found" 
        width={800} 
        height={256} 
        className="mb-8" 
        priority // Ensures the image loads quickly
      />
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="text-lg mb-6">Could not find the requested resource</p>
      <Link href="/">
        Return Home
      </Link>
    </div>
   

</>
  );
}
