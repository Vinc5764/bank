import Image from 'next/image';
import profilePic from '../../public/pexels-olly-3789105.jpg'; // replace with your own image

const Card = () => {
  return (
    <div className="min-w-fit mx-auto bg-white rounded-xl shadow-lg ">
      <div className="relative h-40">
        <Image src={profilePic} alt="Profile Picture" layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Linda Russell</h2>
        <p className="text-gray-600">Congress Candidate</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.1-2.7-.9.6-1.9 1-3 1.3-.9-.9-2.2-1.5-3.5-1.5-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .7.1 1.1-4.1-.2-7.7-2.2-10.2-5.2-.4.6-.6 1.5-.6 2.3 0 1.6.8 3 2.1 3.9-.7 0-1.4-.2-2-.6v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.4 3.1-1.6 1.2-3.5 1.9-5.6 1.9-.4 0-.8 0-1.1-.1 2 1.3 4.3 2.1 6.9 2.1 8.2 0 12.7-6.8 12.7-12.7 0-.2 0-.4 0-.6.9-.7 1.8-1.6 2.5-2.7z" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-10 4.46-10 9.96 0 4.41 3.65 8.1 8.44 8.88v-6.27h-2.54v-2.61h2.54v-1.99c0-2.5 1.51-3.87 3.74-3.87 1.07 0 1.99.08 2.25.11v2.61h-1.55c-1.21 0-1.44.58-1.44 1.42v1.87h2.88l-.38 2.61h-2.5v6.27c4.79-.78 8.44-4.47 8.44-8.88 0-5.5-4.5-9.96-10-9.96z" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 0h-23c-.3 0-.5.2-.5.5v23c0 .3.2.5.5.5h23c.3 0 .5-.2.5-.5v-23c0-.3-.2-.5-.5-.5zm-14.1 20.3h-3.4v-10.8h3.4v10.8zm-1.7-12.3c-1.1 0-1.9-.9-1.9-1.9 0-1.1.9-1.9 1.9-1.9s1.9.9 1.9 1.9c0 1-.9 1.9-1.9 1.9zm13.6 12.3h-3.4v-5.4c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.7v5.8h-3.4c0 0 .1-9.4 0-10.8h3.4v1.5c.4-.6 1.1-1.5 2.8-1.5 2.1 0 3.7 1.4 3.7 4.3v6.5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
