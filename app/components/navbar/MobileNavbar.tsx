// components/MobileNavbar.tsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-dark_bg text-white">
      <div className="flex items-center">
        <Image src="/umair_logo.png" alt="Umair Logo" width={40} height={40} />
        <div className="ml-2">
          <h1 className="text-lg font-bold">UA</h1>
          <p className="text-sm">Umair Aslam</p>
        </div>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        {/* Simple Hamburger Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-dark_bg text-center space-y-4 py-4">
          {['Home', 'About', 'Blogs', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`} className="block py-2 hover:text-bluish transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
