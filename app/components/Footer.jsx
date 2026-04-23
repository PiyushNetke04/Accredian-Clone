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
    <footer className="bg-[#f8f8f8] px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          
          {/* Left */}
          <div>
            {/* Real Logo */}
            <Image
              src="/logo.webp"
              alt="Accredian Logo"
              width={180}
              height={60}
              className="object-contain"
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
          <div className="text-center md:text-right mt-8 md:mt-0">
            <button
              className="bg-blue-600 text-white 
              px-8 py-3 rounded-xl 
              text-lg font-semibold"
            >
              Enquire Now
            </button>

            <p className="text-gray-600 mt-3 text-lg">
              Speak with our Advisor
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-8" />

        {/* Middle Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          
          {/* Left Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black font-bold">
              Accredian
            </h3>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li>About</li>
              <li>Blog</li>
              <li>Why Accredian</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black font-bold">
              Contact Us
            </h3>

            <p className="text-lg text-gray-700 mb-3">
              Email us:{" "}
              <span className="text-blue-600">
                enterprise@accredian.com
              </span>
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-[500px]">
              Office Address: 4th Floor, 250, Phase IV,
              Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Bottom */}
        <div className="text-center text-gray-700 text-base">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. 
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
}