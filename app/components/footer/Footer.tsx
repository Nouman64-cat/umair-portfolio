// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark_bg text-white py-8 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 text-center md:text-left">
        {/* Branding and Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <Image
              src="/umair_logo.png"
              alt="Umair Logo"
              width={50}
              height={50}
            />

            <span className="ml-3 text-sm">Umair Aslam</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Empowering ideas through design and technology. Let's connect and
            build something amazing together.
          </p>
          <p className="text-gray-400 text-sm">Email: contact@umairaslam.com</p>
          <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-4">
          <h3 className="text-lg font-semibold mb-2 md:mb-4">Quick Links</h3>
          <ul className="flex flex-col space-y-2 md:space-y-1">
            {["Home", "About", "Blogs", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-bluish transition text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold mb-2 md:mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-400 hover:text-bluish transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.64 9.95V15.2h-2.42v-3.2h2.42V9.56c0-2.39 1.43-3.7 3.63-3.7 1.06 0 2.17.19 2.17.19v2.4h-1.22c-1.2 0-1.58.75-1.58 1.52v1.8h2.74l-.44 3.2h-2.3v6.75A10 10 0 0022 12z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-400 hover:text-bluish transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 23-3 23-14.5A8.1 8.1 0 0023 3z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-bluish transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v5.8h-4.5V14c0-.7-.3-1.5-1.3-1.5-1 0-1.5.7-1.5 1.5v5.8H10V14a6 6 0 0112 6V22H2V8h6v1.8h-6V8H2v12h20V14a6 6 0 00-6-6z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Umair Aslam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
