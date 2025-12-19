"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Body() {
  const logoRef = useRef(null);
  const hiRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const diagonalRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate diagonal section
    tl.fromTo(
      diagonalRef.current,
      {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      },
      {
        clipPath: "polygon(55% 0, 100% 0, 100% 100%, 35% 100%)",
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Animate text elements
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.8"
    )
      .fromTo(
        hiRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        nameRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        photoRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" },
        "-=0.4"
      );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-background-white">
        <div ref={logoRef} className="absolute top-4 left-4 md:top-8 md:left-8">
          <Image
            src="/Logo.png"
            alt="ibrahim ahmed Logo"
            width={180}
            height={180}
            className="w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-8 md:left-16 lg:left-24 xl:left-32 transform -translate-y-1/2 max-w-xs md:max-w-md lg:max-w-lg">
          <p
            ref={hiRef}
            className="text-gray-600 animate-pulse text-base md:text-lg lg:text-xl mb-1 md:mb-2"
          >
            Hi, I am
          </p>
          <h1
            ref={nameRef}
            className="text-3xl sm:text-4xl  animate-pulse md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight"
          >
            Ibrahim Ahmed
          </h1>
          <p
            ref={titleRef}
            className="text-base md:text-xl  animate-pulse lg:text-2xl text-gray-700"
          >
            Front-End Developer
          </p>
        </div>
      </div>

      {/* Dark diagonal section */}
      <div
        ref={diagonalRef}
        className="absolute inset-0 bg-background-black"
        style={{
          clipPath: "polygon(55% 0, 100% 0, 100% 100%, 35% 100%)",
        }}
      >
        <div
          ref={photoRef}
          className="absolute bottom-0 right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] h-auto"
        >
          <Image
            src="/ibrahim-ahmed.png"
            alt="ibrahim ahmed Photo"
            width={500}
            height={500}
            className="object-contain w-full h-auto"
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
