// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";
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

            <span className="ml-3 text-sm">Muhammad Umair</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Empowering ideas through design and technology. Let's connect and
            build something amazing together.
          </p>
          <p className="text-gray-400 text-sm">
            Email: muhammadumairprofessional@outlook.com
          </p>
          <p className="text-gray-400 text-sm">Phone: +92 304 7121198</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-4">
          <h3 className="text-lg font-semibold mb-2 md:mb-4">Quick Links</h3>
          <ul className="flex flex-col space-y-2 md:space-y-1">
            {["Home", "About", "Services", "Contact"].map((item) => (
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
              href="mailto:muhammadumairprofessional@outlook.com"
              aria-label="Email"
              className="text-gray-400 hover:text-bluish transition"
            >
              <Mail />
            </Link>
            <Link
              href="https://www.facebook.com/jannat.chauhan.90260"
              aria-label="Facebook"
              className="text-gray-400 hover:text-bluish transition"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/taxwithumair/"
              aria-label="Instagram"
              className="text-gray-400 hover:text-bluish transition"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/umair0007/"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-bluish transition"
            >
              <Linkedin />
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
