// components/MobileNavbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-dark_bg text-white">
      <Link href="/" onClick={() => setIsOpen(false)}>
        <div className="flex items-center cursor-pointer">
          <Image src="/umair_logo.png" alt="Umair Logo" width={40} height={40} />
          <div className="ml-2">
            <div className="text-white font-bold text-xl">UA</div>
            <p className="text-sm">Umair Aslam</p>
          </div>
        </div>
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        {/* Simple Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-dark_bg text-center space-y-4 py-4">
          {["Home", "About", "Blogs", "Services", "Contact"].map((item) => {
            const linkPath = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
            return (
              <li key={item}>
                <Link
                  href={linkPath}
                  className={`block py-2 hover:text-bluish transition ${
                    pathname === linkPath ? "text-bluish" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
