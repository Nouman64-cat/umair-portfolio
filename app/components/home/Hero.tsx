// components/Hero.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-dark_bg text-white px-6 py-12 md:px-16 md:py-20 font-axiforma">
      {/* Left Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-1/2">
        <span className="bg-purplish text-white px-8 py-1 rounded-md text-sm font-normal">
          Accounting and Finance
        </span>
        <h1 className="text-4xl md:text-8xl font-semibold">Umair Aslam</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Looking forward to connecting with like-minded professionals and
          exploring new opportunities in the ever-evolving world of web
          development and design.
        </p>
        <Link href="/contact">
          <button className="bg-yellowish text-dark_bg font-medium py-3 px-6 rounded-md mt-4 hover:bg-yellow-600 transition">
            Contact to Get Services
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src="/umair.png"
          alt="Umair Aslam"
          width={300}
          height={400}
          className="rounded-lg shadow-lg shadow-purplish"
        />
      </div>
    </section>
  );
};

export default Hero;
