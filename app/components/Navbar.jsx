"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "Home" },
    { name: "Stats", id: "stats" },
    { name: "Clients", id: "clients" },
    { name: "Accredian Edge", id: "edge" },
    { name: "CAT", id: "cat" },
    { name: "How It Works", id: "works" },
    { name: "FAQs", id: "faq" },
    { name: "Testimonials", id: "terminals" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      const sectionTop =
        section.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      setActive(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm ">
      <div className="max-w-[1400px] mx-auto h-[80px] px-8 flex items-center justify-between">
        
        {/* Logo Image */}
        <div className="cursor-pointer">
          <Image
            src="/logo.webp"
            alt="Accredian Logo"
            width={124}
            height={60}
            className="object-contain"
            priority
          />
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-9 font-bold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-[15px] font-medium transition duration-300   ${
                active === item.id
                  ? "text-blue-600"
                  : "text-black"
              }`}
            >
              {item.name}

              {active === item.id && (
                <span className="absolute left-0 bottom-[-10px] w-full h-[3px] bg-blue-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}