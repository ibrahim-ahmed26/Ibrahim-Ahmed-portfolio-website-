"use client";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const navBaseClasses = "list-none flex items-center gap-6 md:gap-8 lg:gap-12";
  const mobileNavClasses = isOpen
    ? `${navBaseClasses} absolute md:hidden  px-4 py-4 z-10 right-5 top-10 flex-col rounded-lg shadow-lg`
    : "hidden";
  const desktopNavClasses = `${navBaseClasses} hidden md:flex`;

  return (
    <header className="bg-background-black h-20 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
        <div className="relative w-48 h-48 mt-15">
          <Image
            src="/Logo.png"
            alt="Ibrahim Ahmed Logo"
            fill
            className="object-contain"
            priority
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <nav className="relative">
          <HiOutlineMenu
            className="md:hidden cursor-pointer text-2xl"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle menu"
          />

          <ul className={mobileNavClasses}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className="cursor-pointer py-2 hover:text-gray-600 transition-colors duration-200 text-sm w-full text-center"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ul className={desktopNavClasses}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className="cursor-pointer hover:text-gray-300 transition-colors duration-200 text-sm md:text-base"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
       
      </div>
    </header>
  );
}