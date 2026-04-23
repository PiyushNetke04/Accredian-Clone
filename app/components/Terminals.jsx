"use client";

import { useState } from "react";
import Image from "next/image";

export default function Terminals() {
  const testimonialGroups = [
    [
      {
        logo: "/company1.svg",
        text:
          `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
      },
      {
        logo: "/company2.svg",
        text:
          `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
      },
    ],

    [
      {
        logo: "/company2.svg",
        text:
          `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
      },
      {
        logo: "/rel.png",
        text:
          `"Choosing Accredian for employee learning was a beneficial decision. The value derived from the course is immense and their support team is always there to help our employees."`,
      },
    ],
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      className="bg-[#f8f8f8] py-16 px-6"
      id="terminals"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Testimonials from{" "}
          <span className="text-blue-600">
            Our Partners
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mt-3">
          What{" "}
          <span className="text-blue-600">
            Our Clients
          </span>{" "}
          Are Saying
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5 transition-all duration-500">
        {testimonialGroups[activeSlide].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-2xl 
            px-10 py-8 min-h-[250px] flex flex-col justify-start"
          >
            {/* Logo */}
            <div className="mb-6">
              <Image
                src={item.logo}
                alt="company logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <p
              className="text-[10px] md:text-[15px] 
              text-gray-700 leading-relaxed max-w-[95%]"
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {testimonialGroups.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}