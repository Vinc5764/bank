"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "../../public/images.jpeg";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="  px-8 md:flex  items-center gap-11">
        <div className="relative lg:w-1/2 w-full  pb-[56.25%]">
          <Image
            src={image1}
            alt="Background"
            className="absolute top-0 left-0 w-full  object-contain cursor-pointer"
            onClick={openModal}
            layout="fill"
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
            onClick={openModal}
          >
            <FaPlay className="text-white text-6xl" />
          </div>

          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="relative w-full max-w-3xl bg-white p-4">
                <button
                  className="absolute top-0 right-0 m-4 text-white bg-black p-2 rounded-full"
                  onClick={closeModal}
                >
                  X
                </button>
                <iframe
                  src="https://www.youtube.com/embed/n9BsWhjX1Fw?rel=0&showinfo=0&autohide=2&controls=0&playlist=J2Y_ld0KL-4&enablejsapi=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded video"
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          )}
        </div>
        <div className=" mt-5">
          <div className=" flex flex-col gap-6 max-w-md">
            <h1 className=" font-bold  text-purple-950 text-5xl">
              MEET Dr. John
            </h1>
            <h1 className=" font-bold text-purple-950 text-3xl">
              A Message From John
            </h1>
            <p className=" text-sm">
              Dr. John Kpikpi is a man of integrity, who has served his country
              in several capacities over the years including as a lecturer in
              the University of Ghana; as an Apostle with his home church base
              being City of God Church, Accra; and as a director of the
              national-award-winning New Nation School. As he turns his
              attention now to serving the nation at large in the capacity of a
              Presidential Candidate, he brings his substantial experience in
              caring for people; business acumen; and strategic planning and
              implementation to bear on moving Ghana, our beloved country
              forward, together!
            </p>
            <Link href="/donate">
              <button
                style={{
                  boxShadow: "0px 12px 25px 0px rgba(13, 47, 93, 0.43)",
                }}
                className="px-4 py-2 bg-blue-900 text-white w-[120px] font-bold rounded hover:bg-red-700 shadow-md transition"
              >
                DONATE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
