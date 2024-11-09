// components/Testimonials.tsx
"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

// Original testimonials array
const testimonials = [
    {
      name: "Charles Byrum",
      position: "Chief Executive Officer",
      rating: 5,
      feedback:
        "The professionalism and dedication of the team are outstanding. They transformed our vision into reality, delivering exceptional results on time.",
    },
    {
      name: "Emily Harper",
      position: "Marketing Specialist",
      rating: 5,
      feedback:
        "Fantastic experience! The team understood our needs and created a stunning website that resonates with our audience. Highly recommended!",
    },
    {
      name: "Michael Miller",
      position: "Operations Manager",
      rating: 5,
      feedback:
        "Efficient, reliable, and creative. They exceeded our expectations and brought fresh ideas to the table. Looking forward to more projects together!",
    },
    {
      name: "Sarah Johnson",
      position: "Product Manager",
      rating: 5,
      feedback:
        "Working with this team was an absolute pleasure. Their attention to detail and commitment to quality helped us launch on schedule with amazing results.",
    },
    {
      name: "David Smith",
      position: "Creative Director",
      rating: 5,
      feedback:
        "Their innovative approach and collaborative spirit made the whole process seamless. The final product was beyond what we envisioned!",
    },
    {
      name: "Emma Wilson",
      position: "Chief Technology Officer",
      rating: 5,
      feedback:
        "Top-notch service and technical expertise. The team delivered a robust solution tailored to our needs. Highly impressed by their dedication!",
    },
    {
      name: "Oliver Brown",
      position: "Business Development Manager",
      rating: 5,
      feedback:
        "Excellent communication and quality of work. They kept us informed every step of the way and delivered a product that truly stands out.",
    },
    {
      name: "Sophia Martinez",
      position: "Digital Marketing Strategist",
      rating: 5,
      feedback:
        "The results speak for themselves! The team's expertise in digital design and development has had a significant impact on our online presence.",
    },
    {
      name: "Liam Thompson",
      position: "Head of Sales",
      rating: 5,
      feedback:
        "Professional, creative, and easy to work with. They took the time to understand our goals and delivered a product that perfectly aligns with our brand.",
    },
    {
      name: "Ava Green",
      position: "Customer Success Manager",
      rating: 5,
      feedback:
        "Incredible team! They went above and beyond to ensure our needs were met. The result was a beautiful, user-friendly website that our clients love.",
    },
  ];
  

// Create a reversed version of the testimonials array for the reverse carousel
const reversedTestimonials = [...testimonials].reverse();

const Testimonials = () => {
  return (
    <section className="py-12 bg-dark_bg text-white overflow-hidden mb-10">
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

      {/* Second Carousel (hidden on mobile) */}
      <div className="marquee-container overflow-hidden relative mt-6 hidden md:block pl-32">
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

      {/* Third Carousel (hidden on mobile) */}
      <div className="marquee-container overflow-hidden relative mt-6 hidden md:block">
        <div className="marquee-content flex gap-6 animate-marquee-reverse">
          {[...reversedTestimonials, ...reversedTestimonials].map(
            (testimonial, index) => (
              <div
                key={`testimonial-reverse-duplicate-${index}`}
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
