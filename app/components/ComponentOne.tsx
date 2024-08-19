import {
  Activity,
  Briefcase,
  EmptyWallet,
  HeartCircle,
  MoneySend,
} from "iconsax-react";
import Link from "next/link";
import React from "react";

const ComponentOne = () => {
  return (
    <div className=" px-5 py-20 flex-col justify-center md:flex items-center gap-5 space-y-10 bg-white ">
      <div className=" flex flex-col gap-6 max-w-md">
        <h1 className=" font-bold text-purple-950 text-center text-5xl">
          THE NEW GHANA
        </h1>
        <h1 className=" font-bold text-purple-950 text-center text-3xl">
          {" "}
          <em className=" text-[#A4167A] text-5xl">5</em> Transformations for Ghana
        </h1>
        {/* <p>Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer.</p> */}

        <div className="flex items-center justify-center mt-5  text-xl gap-9">
          <div className=" flex flex-col  gap-7 items-center">
            <div
              style={{ boxShadow: "0px 12px 25px 0px rgba(13, 47, 93, 0.43)" }}
              className=" w-[100px] h-[100px] inline-flex items-center justify-center rounded-full bg-[#123f7e] "
            >
              <EmptyWallet size="32" color="white" />
            </div>
            <Link href="/agenda">
              <p className=" text-center font-extrabold text-blue-950">
                Integrity/Ethics
              </p>
            </Link>
          </div>
          <div className=" flex flex-col  gap-7 items-center">
            <div
              style={{ boxShadow: "0px 12px 25px 0px rgba(13, 47, 93, 0.43)" }}
              className=" w-[100px] h-[100px] inline-flex items-center justify-center rounded-full bg-[#123f7e]"
            >
              <MoneySend size="32" color="white" />
            </div>
            <Link href="/agenda">
              <p className=" text-center font-extrabold text-blue-950">
                Infrastructure
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex  grid grid-cols-2    md:space-y-0 text-xl text-blue-950 font-extrabold  gap-5">
        <div className=" flex flex-col  gap-7  items-center">
          <div
            style={{ boxShadow: "0px 12px 25px 0px rgba(13, 47, 93, 0.43)" }}
            className=" w-[100px] h-[100px] inline-flex items-center justify-center rounded-full bg-[#123f7e]"
          >
            <Briefcase size="32" color="white" />
          </div>
          <Link href="/agenda">
            <p className=" text-center font-extrabold text-blue-950">
              Industry
            </p>
          </Link>
        </div>
        <div className=" flex flex-col gap-7  md:ml-[4rem] items-center">
          <div
            style={{ boxShadow: "0px 12px 25px 0px rgba(13, 47, 93, 0.43)" }}
            className=" w-[100px] h-[100px] inline-flex items-center justify-center justify-center rounded-full bg-[#123f7e]"
          >
            <HeartCircle size="32" color="white" />
          </div>
          <Link href="/agenda">
            <p className=" text-center font-extrabold text-blue-950">
              Agriculture
            </p>
          </Link>
        </div>
        <div className=" flex flex-col  ml-[11rem]  md:ml-0  gap-7 items-center">
          <div
            style={{ boxShadow: "0px 12px 25px 0px rgba(13, 47, 93, 0.43)" }}
            className=" w-[100px] h-[100px] inline-flex items-center justify-center rounded-full bg-[#123f7e] "
          >
            <Activity size="32" color="white" />
          </div>
          <Link href="/agenda">
            <p className=" text-center font-extrabold md:max-w-[15rem]  max-w-lg text-blue-950">
              Natural Resource Ownership and Mobilisation
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;
