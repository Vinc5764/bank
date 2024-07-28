'use client'
import Image from "next/image";
import image1 from '../public/images.jpeg'
import ComponentOne from "./components/ComponentOne";
import CallToAction from "./components/CallToAction";
import Donate from "./components/Donate";
import Follow from "./components/Follow";
import History from "./components/History";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Link from "next/link";
import Header from "./components/Header";
export default function Home() {
  return (
<div className=" space-y-16">
    <div   
      
        style={{
          backgroundImage: `url(${image1.src})`,
          // backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // height: '100vh',
          // width: '100%',
        }} className="min-h-screen md:bg-contain md:bg-right  max-sm:bg-center max-sm:bg-top   bg-slate-100  ">
    <Header/>
    <main className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      {/* Main content */}

      <main className="container mx-auto px-4 flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 mb-8    md:mb-0">
    <h1 className="text-5xl md:text-[4rem]  font-semibold text-purple-950 font-bold text-navy mb-4">
      Together, Let's 
      <span className="block text-[#A4167A] font-bold">Reimagine Ghana!</span>
    </h1>
    <p className="mb-6 max-md:text-white">Become a part of our team, sign up for updates.</p>
    <form className="flex flex-col sm:flex-row gap-4">
      <button type="submit"  style={{ boxShadow: '0px 12px 25px 0px rgba(13, 47, 93, 0.43)' }} className="px-6 py-2 bg-navy text-white rounded  w-1/2 sm:w-1/3 bg-[#A4167A] hover:bg-[#FFCC00] transition">REGISTER</button>
    </form>
  </div>
  {/* <div className="md:w-1/2">
    <Image src={image1} alt="Linda Russell" className="w-full rounded-lg shadow-lg" />
  </div> */}
</main>
<div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
  {/* Add social media icon components here */}
</div>
    </main>

    
  </div>
<ComponentOne/>
<CallToAction/>
<Donate/>
<Follow/>
{/* <History/> */}
{/* <Team/> */}
<Footer/>
</div>
  );
}
