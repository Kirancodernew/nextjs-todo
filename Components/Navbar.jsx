"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between px-6 sm:px-12 lg:px-24 items-center py-4 flex-wrap bg-gray-100">
      <h1 className="text-shadow-effect text-xl md:text-3xl font-bold font-DynaPuff tracking-[0.02rem] uppercase ">Todo App</h1>
      <div className="hidden md:block">
        <ul className="flex gap-[40px] text-base cursor-pointer text-gray-700">
          <li className="hover:text-yellow-600 hover:underline">Home</li>
          <li className="hover:text-yellow-600 hover:underline">Products</li>
          <li className="hover:text-yellow-600 hover:underline">About</li>
          <li className="hover:text-yellow-600 hover:underline">Contact</li>
        </ul>
      </div>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        className={`${
          open ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-500 ease-in-out w-full md:hidden `}
      >
        <ul className="flex flex-col items-center justify-center gap-[40px] text-xl text-gray-500 py-3">
        <li className="hover:text-yellow-600 hover:underline">Home</li>
          <li className="hover:text-yellow-600 hover:underline">Products</li>
          <li className="hover:text-yellow-600 hover:underline">About</li>
          <li className="hover:text-yellow-600 hover:underline">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
