'use client'
import { useState } from 'react';
import Image from 'next/image';
import image1 from '../../public/pexels-olly-3789105.jpg';
import Card from './Card';
import Header from './Header';
import Donate from './Donate';
 // Add additional images as needed

const sections = [
  {
    id: 'intro',
    title: "Linda's Story",
    image: image1,
    content: `Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum. vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet.`,
  },
  {
    id: 'earlyYears',
    title: "Early Years",
    image: image1,
    content: "Content for Early Years...",
  },
  {
    id: '1970S',
    title: "Early Years",
    image: image1,
    content: "Content for Early Years...",
  },
  {
    id: '1980S',
    title: "Early Years",
    image: image1,
    content: "Content for Early Years...",
  },
  
  // Add more sections as needed
];

export default function OurTeam() {
  const [selectedSection, setSelectedSection] = useState('intro');

  return (
    <div className="min-h-screen bg-slate-100">
         <Header/>
        <div className="relative bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: `url(${image1.src})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold">Our Ministers </h1>
      </div>
    </div>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        
      </header>
      <main className="container mx-auto px-4 py-8 mb-14 items-center flex gap-7 flex-col">
        <aside className="mb-8">
          <ul className="md:flex space-y-4 flex   md:space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`min-w-[150px] px-4 py-2 text-left  ${
                  selectedSection === section.id ? 'bg-gray-200 text-white' : 'bg-white text-black'
                } rounded-lg`}
              >
                <Card/>
              </button>
            ))}
          </ul>
        </aside>
        <section className="md:w-3/4  md:flex gap-8">
          <Image className="md:w-1/2" src={sections.find(section => section.id === selectedSection)?.image || image1} alt={sections.find(section => section.id === selectedSection)?.title || 'Image'} />
          <div className=" space-y-4">
          <div className="text-3xl font-bold text-navy">
          <span className="block">Linda</span>
          <span className="block">Russell's Story</span>
        </div>
          <p className='text-sm '>{sections.find(section => section.id === selectedSection)?.content}</p>
          </div>
        </section>
      </main>
      <Donate/>
    </div>
  );
}
