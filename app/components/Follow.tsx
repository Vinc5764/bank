import React from 'react'

const Follow = () => {
  return (
    <div className=' py-11 '>
        <div className="flex flex-col gap-10 items-center justify-center ">
        <a href="#" className="text-blue-500 hover:text-gray-900">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.1-2.7-.9.6-1.9 1-3 1.3-.9-.9-2.2-1.5-3.5-1.5-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .7.1 1.1-4.1-.2-7.7-2.2-10.2-5.2-.4.6-.6 1.5-.6 2.3 0 1.6.8 3 2.1 3.9-.7 0-1.4-.2-2-.6v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.4 3.1-1.6 1.2-3.5 1.9-5.6 1.9-.4 0-.8 0-1.1-.1 2 1.3 4.3 2.1 6.9 2.1 8.2 0 12.7-6.8 12.7-12.7 0-.2 0-.4 0-.6.9-.7 1.8-1.6 2.5-2.7z" />
            </svg>
          </a>

        <button  style={{ boxShadow: '0px 12px 25px 0px rgba(13, 47, 93, 0.43)' }}  className="px-4 py-2 bg-white text-blue-900 w-[200px]  font-bold rounded   transition">Follow me on Twitter</button>
     
        </div>
    </div>
  )
}

export default Follow