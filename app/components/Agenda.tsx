import React from 'react'
import Header from './Header'
import image1 from '../../public/pexels-olly-3789105.jpg'
import Image from 'next/image'
import Donate from './Donate'

const Agenda = () => {
  return (
    <div>
        <Header/>
        <div className="relative bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: `url(${image1.src})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold">Balancing The Budget</h1>
      </div>
    </div>
    <div className=" md:flex mt-24  space-y-10 px-7 gap-16">
        <Image className=' md:w-1/2' src={image1} alt='hdh'/>
       <div className=" space-y-5">
        <h1 className='  font-medium text-3xl'>Where It All Began</h1>
        <p className=' text-sm font-medium'> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like readable English. Many
              </p>
       <p className=' text-sm'> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
         </p>
         <p className=' text-sm'> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
         </p>
       </div>
    </div>
    <div className="md:flex  mt-10 px-3 items-center gap-9">
        <div className=" w-[200px] h-[200px] bg-blue-950 "></div>
        <div className=" space-y-5">
            <p className=' text-3xl font-medium'>Nam Elit Agna, Endrerit Sit Amet, Tincidunt</p>
            <p className=' max-w-md md:max-w-[70%]'>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede.</p>
        </div>
    </div>

    <div className="md:flex  mt-12 md:pl-5 px-3 space-y-3   items-center gap-9">
        <div className=" space-y-5">
            <p className=' text-3xl font-medium'>Nam Elit Agna, Endrerit Sit Amet, Tincidunt</p>
            <p className=' max-w-md md:max-w-[70%]'>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede.</p>
        </div>
        <div className=" w-[200px] h-[200px] bg-blue-950 "></div>
    </div>

    <Donate/>
    </div>
  )
}

export default Agenda