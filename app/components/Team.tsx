'use client';

import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export type Submodule = {
  id: number;
  title: string;
  content: string;
};

export type Module = {
  id: number;
  title: string;
  submodules: Submodule[];
};

export type Course = {
  id: number;
  title: string;
  icon: any;
  booksCount: number;
  studentsCount: number;
  assignmentCounts: number;
  bgColor: string;
  courseLogo: any;
  courseroadmap: Module[];
};

const Team = () => {
  const [value] = useState<number>(8.966);
  const [mentors, setMentors] = useState([]);

  const courseScrollRef = useRef(null);
  const mentorScrollRef = useRef(null);

  const scroll = (ref: any, direction: string) => {
    const { current } = ref;
    if (direction === 'left') {
      current.scrollBy({ left: -400, behavior: 'smooth' });
    } else if (direction === 'right') {
      current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const mentorsdata = [
    {
      name: 'Ayesha Khan',
      title: 'Senior Program Manager at Upstart',
      email: 'example@gmail.comm',
      experience: 20,
      reviews: 0,
    },
    {
        name: 'Ayesha Khan',
        title: 'Senior Program Manager at Upstart',
        email: 'example@gmail.comm',
        experience: 20,
        reviews: 0,
      },
      {
        name: 'Ayesha Khan',
        title: 'Senior Program Manager at Upstart',
        email: 'example@gmail.comm',
        experience: 20,
        reviews: 0,
      },
      {
        name: 'Ayesha Khan',
        title: 'Senior Program Manager at Upstart',
        email: 'example@gmail.comm',
        experience: 20,
        reviews: 0,
      },
      {
        name: 'Ayesha Khan',
        title: 'Senior Program Manager at Upstart',
        email: 'example@gmail.comm',
        experience: 20,
        reviews: 0,
      },
      {
        name: 'Ayesha Khan',
        title: 'Senior Program Manager at Upstart',
        email: 'example@gmail.comm',
        experience: 20,
        reviews: 0,
      },
      {
        name: 'Ayesha Khan',
        title: 'Senior Program Manager at Upstart',
        email: 'example@gmail.comm',
        experience: 20,
        reviews: 0,
      },
    // Add more mentors as needed
  ];

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          'https://dev-2-winn.vercel.app/api/users/mentor/api/',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const users = await res.json();
        setMentors(users);
        console.log(users);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
   
      <div className=" px-3   gap-8 text-black/80">
        <section className="">
          <div
            className={`scrollbar-hidden flex gap-4 ${
              mentorsdata.length > 5 ? 'overflow-x-hidden' : 'overflow-x-hidden'
            }`}
            ref={courseScrollRef}
          >
            {mentorsdata.map((mentor:any, index:any) => (
              <Card key={index} />
            ))}
          </div>
          {mentorsdata.length > 5 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <IoIosArrowBack
                size={27}
                className="cursor-pointer rounded-full p-1 transition-all duration-500 hover:bg-black/10"
                onClick={() => scroll(courseScrollRef, 'left')}
              />
              <IoIosArrowForward
                size={27}
                className="cursor-pointer rounded-full p-1 transition-all duration-500 hover:bg-black/10"
                onClick={() => scroll(courseScrollRef, 'right')}
              />
            </div>
          )}
        </section>

        
      </div>
    
  );
};

export default Team;
