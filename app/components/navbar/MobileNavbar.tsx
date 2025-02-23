"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark_bg/90 ">
      <div className="flex justify-between items-center px-4 py-3 text-white">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <div className="flex items-center cursor-pointer">
            <Image 
              src="/umair_logo.png" 
              alt="Umair Logo" 
              width={40} 
              height={40}
              className="rounded-full border-2 border-gray-200/30"
            />
            <div className="ml-2">
              <div className="text-white font-bold text-xl">UA</div>
              <p className="text-[12px] text-zinc-300">Umair Aslam</p>
            </div>
          </div>
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 hover:bg-white/10 rounded-lg transition-all"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur"
          onClick={() => setIsOpen(false)}
        >
          <motion.ul 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="absolute top-20 inset-x-0 w-full bg-dark_bg/95 backdrop-blur-md border-t border-b border-gray-200/20"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((item) => {
              const linkPath = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
              return (
                <li key={item} className="border-b border-gray-200/10 last:border-0">
                  <Link
                    href={linkPath}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-6 py-4 text-sm font-medium transition-all ${
                      pathname === linkPath 
                        ? "text-white bg-white/5" 
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    {item}
                    <span className="text-bluish opacity-80">→</span>
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </nav>
  );
};

export default MobileNavbar;