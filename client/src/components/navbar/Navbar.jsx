import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { IoIosListBox } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";

// social link
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  // RESPONSIVE NAV LISTS
  const lists = (
    <ul className="md:flex  gap-3 items-center grid justify-center">
      <li className="navhover flex items-center  gap-1">
        <MdHome className=" text-3xl hover:rounded-full border-4 rounded-full border-transparent delay-100 hover:border-yellow-400" />
        <Link
          to={"/"}
          className=" border-b-4  border-transparent hover:border-yellow-400 transition delay-100"
        >
          Home
        </Link>
      </li>
      <li className=" flex items-center gap-1">
        <FaUser className="text-3xl hover:rounded-full border-4 rounded-full border-transparent delay-100 hover:border-yellow-400" />
        <Link
          to={"/about"}
          className="border-b-4  border-transparent hover:border-yellow-400 transition delay-100"
        >
          About
        </Link>
      </li>
      <li className=" flex items-center gap-1">
        <HiViewGridAdd className="text-3xl hover:rounded-full border-4 rounded-full border-transparent delay-100 hover:border-yellow-400" />
        <Link
          to={"/todo"}
          className="border-b-4  border-transparent hover:border-yellow-400 transition delay-100"
        >
          Todo
        </Link>
      </li>
      <li className=" flex items-center gap-1">
        <IoIosListBox className="text-3xl hover:rounded-full border-4 rounded-full border-transparent delay-100 hover:border-yellow-400" />
        <Link
          to={"/projects"}
          className="border-b-4  border-transparent hover:border-yellow-400 transition delay-100"
        >
          Projects
        </Link>
      </li>
      {/* for mobile only */}
      <li className=" flex md:hidden py-5 gap-2">
        <FaFacebook />
        <AiFillInstagram />
        <FaSquareXTwitter />
      </li>
    </ul>
  );

  return (
    <div className="py-5 text-white px-5 bg-[#292fc3] sticky top-0 z-[99999] ">
      <div className="flex justify-between items-center relative">
        {/* Navigation */}
        <div className=" flex items-center gap-3 ">
          {/* NAME OF BRAND */}
          <div>Me.Todo</div>
          {/* desktop view */}
          <div className=" md:block hidden">{lists}</div>

          {/* mobile view */}
          <div
            className={` ${
              menuToggle
                ? "transition delay-100 opacity-1 scale-100"
                : "  transition delay-100 opacity-0 scale-0"
            } md:hidden absolute top-[45px]  backdrop-blur-3xl  bg-[#292ec3a1] right-0 px-5 w-full h-[calc(80vh-45px)] py-5`}
          >
            {lists}
          </div>
        </div>

        {/* functionality */}
        <div className=" flex items-center">
          {/* Logined user */}
          <FaCircleUser />

          <div
            className=" block md:hidden mx-5"
            onClick={(e) => setMenuToggle(!menuToggle)}
          >
            {menuToggle ? <HiMenuAlt4 /> : <HiOutlineMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
