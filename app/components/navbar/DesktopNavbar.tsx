"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavbar = () => {
  const pathname = usePathname();
  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl z-50 mx-auto">
      <div className="backdrop-blur-lg bg-white/10 border border-gray-200/20 rounded-md shadow-lg">
        <div className="flex justify-between items-center px-8 py-3">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image 
                src="/umair_logo.png" 
                alt="Umair Logo" 
                width={30} 
                height={30}
                className=""
              />
              <div className="ml-3">
                <div className="text-white font-bold text-md">MU</div>
                <p className="text-[10px] text-zinc-300">Muhammad Umair</p>
              </div>
            </div>
          </Link>
          <ul className="flex space-x-8">
            {navLinks.map((item) => {
              const linkPath = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
              return (
                <li key={item}>
                  <Link
                    href={linkPath}
                    className={`text-zinc-300 hover:text-white transition-all text-sm pb-[2px] ${
                      pathname === linkPath 
                        ? "text-white font-medium border-b-2 border-purplish" 
                        : ""
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;