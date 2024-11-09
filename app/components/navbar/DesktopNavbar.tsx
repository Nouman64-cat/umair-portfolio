// components/DesktopNavbar.tsx
import Image from 'next/image';
import Link from 'next/link';

const DesktopNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-dark_bg text-white">
      <div className="flex items-center">
        <Image src="/umair_logo.png" alt="Umair Logo" width={50} height={50} />
        <div className="ml-3">
          <h1 className="text-lg font-bold">UA</h1>
          <p className="text-sm">Umair Aslam</p>
        </div>
      </div>
      <ul className="flex space-x-8">
        {['Home', 'About', 'Blogs', 'Services', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`} className="hover:text-bluish transition">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
