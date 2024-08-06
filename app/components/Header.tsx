import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      {" "}
      <header className="container mx-auto px-4  flex justify-between items-center">
        {/* Logo and nav items */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <div className="text-2xl font-bold text-navy">
              <span className="block max-md:text-white">JOHN KPIKPI</span>
              {/* <span className="block">Russell</span> */}
              <span className="text-sm text-[#A4167A]">For President</span>
            </div>
          </Link>
          <nav className=" md:flex space-x-4">
            <Link href="/donate">
              <button
                style={{
                  boxShadow: "0px 12px 25px 0px rgba(13, 47, 93, 0.43)",
                }}
                className=" hidden md:block px-4 py-2 bg-[#A4167A] text-white w-[120px] font-bold rounded hover:bg-[#FFCC00] shadow-md transition"
              >
                DONATE
              </button>
            </Link>
            <Link href="/sign-in">
              <button className="px-4 py-2 border text-white  rounded">
                Login
              </button>
            </Link>
          </nav>
        </header>
      </header>
    </div>
  );
};

export default Header;
