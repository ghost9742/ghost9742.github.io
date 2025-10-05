import React from "react";
import { SiUpwork } from "react-icons/si";

import { AiOutlineHome } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";

import Logo from "../assets/assistant.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-[#00F0FF] z-50'>
      <NavLink to={"/"}>
        <img src={Logo} alt='Logo' style={{ width: "40px" }} />
      </NavLink>

      {/* menu*/}
      <ul className='hidden md:flex'>
        <li>
          {" "}
          <NavLink className='p-3' to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='p-3' to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className='p-3' to={"/work"}>
            Work
          </NavLink>
        </li>
      </ul>

      {/* Mobile menu*/}
      <nav className='cyberpunk-clip-path md:hidden z-9999 fixed bottom-0 inset-x-0 mx-auto  w-[100%] flex justify-between text-center text-4xl px-11 py-2 bg-[#ffed00] border-[#000] border text-[#000]'>
        <NavLink to={"/"} className='p-3'>
          <AiOutlineHome size={30} />
        </NavLink>
        <NavLink to={"/about"} className='p-3 '>
          <BsPersonBadge size={30} />
        </NavLink>
        <NavLink to={"/work"} className='p-3 '>
          <BsBriefcase size={30} />
        </NavLink>
        <a
          href='https://www.upwork.com/freelancers/~017fcc2b2c6b184aee'
          className=' p-3 hover:cursor-pointer text-[#000]'
          target='_blank'
          rel='noreferrer'>
          <SiUpwork size={30} />
        </a>
      </nav>

      {/* Social icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='cyber-btn-glow w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ffed00]'>
            <a
              className='flex justify-between items-center w-full text-black'
              href='https://www.upwork.com/freelancers/~017fcc2b2c6b184aee'
              target='_blank'
              rel='noreferrer'>
              Upwork <SiUpwork size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
