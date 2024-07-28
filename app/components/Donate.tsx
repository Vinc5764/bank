'use client'

import Link from 'next/link';
import React from 'react';

const Donate = () => {
  const handleShare = () => {
    const currentUrl = window.location.href;
    const message = encodeURIComponent(`Support our campaign by sharing this message! ${currentUrl}`); // Customize your message
    const url = `https://api.whatsapp.com/send?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className='mt-7 md:flex space-y-8 items-center justify-center gap-10'>
      <div style={{ boxShadow: '0px 12px 25px 0px rgba(13, 47, 93, 0.43)' }}  className="h-[300px] md:w-[200px] px-3 flex items-center flex-col justify-center bg-blue-900">
        <h1 className='font-bold text-2xl text-white'>Get Involved</h1>
        <h1 className=' text-sm text-left text-white'>Become a volunteer</h1>
      </div>
      <div style={{ boxShadow: '0px 12px 25px 0px rgba(191, 13, 62, 0.43)' }} className="h-[300px] md:w-[700px] flex flex-col gap-9 items-center justify-center bg-[#A4167A]">
        <h1 className='text-4xl text-white font-bold text-center'>
          DONATE TO OUR CAMPAIGN!
        </h1>
        <div className="space-x-5">
          <Link href={`/donate`}>
          <button style={{ boxShadow: '0px 12px 25px 0px rgba(13, 47, 93, 0.43)' }} className="px-4 py-2 bg-[#FFCC00] text-white w-[120px] font-bold rounded hover:bg-white hover:text-black shadow-md transition">DONATE</button>
          </Link>
          <Link href={`/register`}>
          <button className="px-4 py-2 text-white font-semibold border rounded">
            Register
          </button>
          </Link>
        </div>
      </div>
      <div style={{ boxShadow: '0px 12px 25px 0px rgba(13, 47, 93, 0.43)' }}  className="h-[300px] md:w-[200px] px-3 gap-4 flex items-center flex-col justify-center bg-purple-700">
        <h1 className='font-bold text-2xl text-white'>Help Share</h1>
        <button onClick={handleShare} className="px-4 py-2 text-white font-semibold border rounded">
          Share
        </button>
      </div>
    </div>
  );
};

export default Donate;
