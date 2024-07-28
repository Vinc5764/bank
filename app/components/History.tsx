'use client'
import { useState } from 'react';
import Image from 'next/image';
import image1 from '../../public/pexels-olly-3789105.jpg'

const sections:any = {
  intro: {
    title: "Linda's Story",
   image:image1,
    content: `Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum. vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet.`,
  },
  earlyYears: {
    title: "Early Years",
    content: "Content for Early Years...",
    image:image1

  },
  1970: {
    title: "Early Years",
    content: "Content for Early Years...",
    image:image1

  },
  1980: {
    title: "Early Years",
    content: "Content for Early Years...",
    image:image1

  },
  1990: {
    title: "Early Years",
    content: "Content for Early Years...",
    image:image1

  },
  // Add more sections as needed
};

export default function History() {
  const [selectedSection, setSelectedSection] = useState('intro');

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-4xl font-bold text-navy">
          <span className="block">Linda</span>
          <span className="block">Russell's Story</span>
          
        </div>
       
      </header>
      <main className="container mx-auto px-4 py-8 flex gap-7 flex-col md:flex-row">
        <aside className="md:w-1/4 mb-8 md:mb-0">
          <div className="flex flex-col space-y-2">
            <button onClick={() => setSelectedSection('intro')} className={`px-4 py-2 text-left ${selectedSection === 'intro' ? 'bg-[#FFCC00] text-white' : 'bg-white text-black'} rounded-lg`}>
              INTRO
            </button>
            <button onClick={() => setSelectedSection('earlyYears')} className={`px-4 py-2 text-left ${selectedSection === 'earlyYears' ? 'bg-[#FFCC00] text-white' : 'bg-white text-black'} rounded-lg`}>
              EARLY YEARS
            </button>
            <button onClick={() => setSelectedSection('1970')} className={`px-4 py-2 text-left ${selectedSection === '1970' ? 'bg-[#FFCC00] text-white' : 'bg-white text-black'} rounded-lg`}>
              1970S
            </button>
            <button onClick={() => setSelectedSection('1980')} className={`px-4 py-2 text-left ${selectedSection === '1980' ? 'bg-[#FFCC00] text-white' : 'bg-white text-black'} rounded-lg`}>
              1980S
            </button>
            <button onClick={() => setSelectedSection('1990')} className={`px-4 py-2 text-left ${selectedSection === '1990' ? 'bg-blue-700 text-white' : 'bg-white text-black'} rounded-lg`}>
              1990S
            </button>
            <button onClick={() => setSelectedSection('2000s')} className={`px-4 py-2 text-left ${selectedSection === '2000' ? 'bg-[#FFCC00] text-white' : 'bg-white text-black'} rounded-lg`}>
              2000S
            </button>
            <button onClick={() => setSelectedSection('2010s')} className={`px-4 py-2 text-left ${selectedSection === '2010s' ? 'bg-[#FFCC00] text-white' : 'bg-white text-black'} rounded-lg`}>
              2010S
            </button>
          </div>
        </aside>
        <section className="md:w-3/4 space-y-5 md:flex gap-8">
         <Image className=' md:w-1/2' src={sections[selectedSection].image} alt='as'/>
          <p>{sections[selectedSection].content}</p>
        </section>
      </main>
    </div>
  );
}


