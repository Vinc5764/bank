import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 mt-20 text-white bg-blue-950  py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="mb-6 flex flex-col items-center lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">JOIN OUR TEAM</h2>
            <form className="flex">
             
              
            <button className="px-4 py-2 text-white font-semibold  border rounded">
      Register
    </button>
            </form>
          </div>
          
          <div className="text-center mb-6 lg:mb-0">
            <h1 className="text-4xl font-bold">JOHN KPIKPI</h1>
            <div className="text-red-600 font-bold mt-2">FOR PRESIDENT</div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">CONNECT WITH JOHN</h2>
            <div className="flex justify-center space-x-4 mb-4">
              {['facebook', 'twitter', 'instagram', 'youtube', 'flickr', 'snapchat'].map((social) => (
                <a key={social} href={`#${social}`} className="bg-navy-700 p-2 rounded-full hover:bg-navy-600 transition">
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
            <div className="space-y-2  space-x-2">
              <Link href={`/donate`}>
              <button className=" bg-red-600 px-4 py-2 text-white py-2 rounded hover:bg-red-700 transition">
                DONATE
              </button>
              </Link>
              <Link href={`/register`}>
              <button className="px-4 py-2 text-white font-semibold  border rounded">
      TAKE ACTION
    </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm">
          <p className="mb-2">
            PO Box 3740,  Ghana,  | Phone: +233 543870298 | E-mail: info@johnkpikpi.com
          </p>
          {/* <div className="border border-gray-600 inline-block px-4 py-1 mb-2">
            PAID FOR BY FRIENDS OF LINDA RUSSELL
          </div> */}
          <p>Copyright © 2024 John Kpikpi for President. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;