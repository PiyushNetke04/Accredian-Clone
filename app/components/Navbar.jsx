"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Stats", id: "stats" },
    { name: "Clients", id: "clients" },
    { name: "Accredian Edge", id: "edge" },
    { name: "CAT", id: "catframework" },
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
      setMenuOpen(false);
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
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto h-[80px] px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src="/logo.webp"
            alt="Accredian Logo"
            width={124}
            height={60}
            className="object-contain w-[110px] md:w-[124px]"
            priority
          />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center gap-9 font-bold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-[15px] font-medium transition duration-300 ${
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

        {/* Phone Menu Hamburger */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Phone Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left font-medium ${
                active === item.id
                  ? "text-blue-600"
                  : "text-black"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}