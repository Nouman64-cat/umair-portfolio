// components/DesktopNavbar.tsx
"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-dark_bg text-white">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/umair_logo.png" alt="Umair Logo" width={50} height={50} />
          <div className="ml-3">
            <div className="text-white font-bold text-2xl">UA</div>
            <p className="text-[12px] text-zinc-400">Umair Aslam</p>
          </div>
        </div>
      </Link>
      <ul className="flex space-x-8">
        {["Home", "About", "Blogs", "Services", "Contact"].map((item) => {
          const linkPath = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
          return (
            <li key={item}>
              <Link
                href={linkPath}
                className={`hover:text-bluish transition ${
                  pathname === linkPath ? "border-b-2 border-bluish" : ""
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
