// components/Organizations.tsx
import React from "react";

const organizations = ["Cedar Financials", "TCP Software", "CareerTweakrz", "Numbers Numbers"];

const Organizations = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-around space-y-4 md:space-y-0 md:space-x-8 py-8 bg-dark_bg">
      {organizations.map((org, index) => (
        <div
          key={index}
          className="text-lg font-medium transition ease-in-out duration-300 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 bg-clip-text text-transparent hover:from-purplish hover:via-bluish hover:to-pinkish cursor-pointer"
        >
          {org}
        </div>
      ))}
    </section>
  );
};

export default Organizations;
