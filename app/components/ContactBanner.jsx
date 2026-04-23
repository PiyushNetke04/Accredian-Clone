import { Headphones, ChevronRight } from "lucide-react";

export default function ContactBanner() {
  return (
    <section
      className="bg-[#f8f8f8] px-6 pt-10"
      id="contact"
    >
      <div
        className="max-w-7xl mx-auto bg-blue-600 rounded-2xl 
        relative overflow-hidden px-12 py-8 
        flex flex-col md:flex-row items-center justify-between"
      >
        {/* Left Side */}
        <div className="flex items-center gap-5 z-10">
          
          {/* Icon Box */}
          <div
            className="w-20 h-20 bg-white rounded-2xl 
            flex items-center justify-center shadow-md"
          >
            <Headphones
              size={42}
              className="text-blue-600"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight max-w-[700px]">
              Want to Learn More About Our Training Solutions?
            </h2>

            <p className="text-white text-lg mt-2">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          className="bg-white text-blue-600 
          px-8 py-4 rounded-xl 
          text-lg font-semibold 
          mt-6 md:mt-0 z-10 
          flex items-center gap-2 whitespace-nowrap"
        >
          Contact Us
          <ChevronRight size={20} />
        </button>

        {/* Background circles */}
        <div className="absolute right-10 top-[-120px] w-[500px] h-[500px] rounded-full border border-blue-400 opacity-20"></div>

        <div className="absolute right-24 top-[-60px] w-[380px] h-[380px] rounded-full border border-blue-300 opacity-20"></div>

        <div className="absolute right-40 top-[10px] w-[260px] h-[260px] rounded-full border border-blue-200 opacity-20"></div>
      </div>
    </section>
  );
}