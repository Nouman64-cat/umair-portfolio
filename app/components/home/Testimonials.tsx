// components/Testimonials.tsx
"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

// Original testimonials array
const testimonials = [
  {
    name: "Charles Byrum",
    position: "CEO",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus quam malesuada est pellentesque rhoncus.",
  },
  {
    name: "William Campisi",
    position: "CEO",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus quam malesuada est pellentesque rhoncus.",
  },
  {
    name: "Michael Miller",
    position: "CEO",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus quam malesuada est pellentesque rhoncus.",
  },
  {
    name: "Sarah Johnson",
    position: "Manager",
    rating: 5,
    feedback:
      "Amazing service and highly skilled team. My project was completed on time with fantastic quality.",
  },
  {
    name: "David Smith",
    position: "Director",
    rating: 5,
    feedback:
      "Very professional and reliable. I would recommend them to anyone looking for high-quality work.",
  },
  {
    name: "Emma Wilson",
    position: "CTO",
    rating: 5,
    feedback:
      "The team exceeded my expectations with their attention to detail and commitment to excellence.",
  },
];

// Create a reversed version of the testimonials array for the reverse carousel
const reversedTestimonials = [...testimonials].reverse();

const Testimonials = () => {
  return (
    <section className="py-12 bg-dark_bg text-white overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-bluish">TESTIMONIALS</h2>
        <h3 className="text-3xl font-bold mt-2">What People Say’s About Us</h3>
      </div>

      {/* Forward Carousel */}
      <div className="marquee-container overflow-hidden relative">
        <div className="marquee-content flex gap-6 animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`testimonial-forward-${index}`}
              className="bg-subdark p-6 rounded-lg shadow-lg w-96 max-w-full overflow-hidden text-center flex-shrink-0"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellowish text-lg" />
                ))}
              </div>
              <p className="text-gray-400 text-[12px] mb-4">
                {testimonial.feedback}
              </p>
              <div className="text-center">
                <h4 className="text-lg font-medium">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Carousel */}
      <div className="marquee-container overflow-hidden relative mt-6">
        <div className="marquee-content flex gap-6 animate-marquee-reverse">
          {[...reversedTestimonials, ...reversedTestimonials].map(
            (testimonial, index) => (
              <div
                key={`testimonial-reverse-${index}`}
                className="bg-subdark p-6 rounded-lg shadow-lg w-96 max-w-full overflow-hidden text-center flex-shrink-0"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellowish text-lg" />
                  ))}
                </div>
                <p className="text-gray-400 text-[12px] mb-4">
                  {testimonial.feedback}
                </p>
                <div className="text-center">
                  <h4 className="text-lg font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="marquee-container overflow-hidden relative mt-6">
        <div className="marquee-content flex gap-6 animate-marquee-reverse">
          {[...reversedTestimonials, ...reversedTestimonials].map(
            (testimonial, index) => (
              <div
                key={`testimonial-reverse-${index}`}
                className="bg-subdark p-6 rounded-lg shadow-lg w-96 max-w-full overflow-hidden text-center flex-shrink-0"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellowish text-lg" />
                  ))}
                </div>
                <p className="text-gray-400 text-[12px] mb-4">
                  {testimonial.feedback}
                </p>
                <div className="text-center">
                  <h4 className="text-lg font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
