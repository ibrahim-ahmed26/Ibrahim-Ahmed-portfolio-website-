import Image from "next/image";

export default function Header() {
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

        <nav>
          <ul className="list-none flex items-center gap-6 md:gap-8 lg:gap-12">
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">
              About Me
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">
              Skills
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-200 text-sm md:text-base">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
