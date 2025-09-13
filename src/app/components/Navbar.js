"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#WeightlossTreatments", label: "Weightloss Treatments" },
  { href: "/#Anti-AgingTreatments", label: "Anti-Aging Treatments" },
  { href: "/#faqs", label: "FAQ's" },
];

const Navbar = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:max-w-[750px] lg:max-w-[900px] max-w-[350px] h-[75px] w-full md:h-[87px] my-2 md:mt-4 py-3 border border-[#4ABFAB] px-5 rounded-full bg-[rgba(255,255,255,0.30)] backdrop-blur-[4.25px] z-100 relative md:fixed left-1/2 -translate-x-1/2 top-0 md:block">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={62}
            height={62}
            alt="Medsione"
            className="hover:cursor-pointer  lg:w-[62px] lg:h-[62px]  md:w-[40px] md:h-[40px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-black md:gap-3 lg:gap-6 text-sm font-medium opacity-70">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} >{link.label} </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <div className="bg-white border border-[#1CBC78] w-12 h-12 rounded-full flex items-center justify-center">
            <Icon
              icon="mi:shopping-cart-add"
              className="text-[#1CBC78] w-6 h-6"
            />
          </div>

          {/* Login Button (Desktop only) */}
          <button
            onClick={onOpenModal}
            className="hidden sm:block bg-white w-[147px] h-[50px] text-[#1CBC78] rounded-full border border-[#1CBC78] text-sm font-semibold cursor-pointer"
          >
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 bg-white rounded-full border border-[#1CBC78] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon
              icon={isOpen ? "mdi:close" : "mdi:menu"}
              className="text-[#1CBC78] w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[82px] left-0 w-full bg-white shadow-md rounded-b-2xl md:hidden ">
          <ul className="flex flex-col gap-4 py-4 px-6 text-sm font-medium text-gray-700">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={onOpenModal}
                className="mt-2 w-full bg-[#1CBC78] text-white py-2 rounded-full cursor-pointer"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
