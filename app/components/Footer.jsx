import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center md:items-start
            text-center md:text-left
            gap-8
            mb-8
          "
        >
          {/* Left */}
          <div className="flex flex-col items-center md:items-start">
            
            {/* Logo */}
            <Image
              src="/logo.webp"
              alt="Accredian Logo"
              width={180}
              height={60}
              className="object-contain w-[140px] md:w-[180px]"
            />

            {/* Social Icons */}
            <div className="flex gap-5 text-gray-600 mt-5">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer text-xl" />
              <FaLinkedinIn className="hover:text-blue-600 cursor-pointer text-xl" />
              <FaTwitter className="hover:text-blue-600 cursor-pointer text-xl" />
              <FaInstagram className="hover:text-blue-600 cursor-pointer text-xl" />
              <FaYoutube className="hover:text-blue-600 cursor-pointer text-xl" />
            </div>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <button
              className="
                bg-blue-600
                text-white
                px-8
                py-3
                rounded-xl
                text-base md:text-lg
                font-semibold
                w-full sm:w-auto
              "
            >
              Enquire Now
            </button>

            <p className="text-gray-600 mt-3 text-base md:text-lg">
              Speak with our Advisor
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-8" />

        {/* Middle Section */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10
            mb-8
            text-center md:text-left
          "
        >
          {/* Left Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
              Accredian
            </h3>

            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              <li>About</li>
              <li>Blog</li>
              <li>Why Accredian</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
              Contact Us
            </h3>

            <p className="text-base md:text-lg text-gray-700 mb-3">
              Email us:{" "}
              <span className="text-blue-600 break-all">
                enterprise@accredian.com
              </span>
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-[500px] mx-auto md:mx-0">
              Office Address: 4th Floor, 250, Phase IV,
              Udyog Vihar, Sector 18, Gurugram,
              Haryana
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Bottom */}
        <div className="text-center text-gray-700 text-sm md:text-base leading-relaxed">
          © 2026 Accredian A Brand of FullStack
          Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}