import {
  Headphones,
  ChevronRight,
} from "lucide-react";

export default function ContactBanner() {
  return (
    <section
      className="bg-[#f8f8f8] px-4 sm:px-6 pt-10"
      id="contact"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          bg-blue-600
          rounded-2xl
          relative
          overflow-hidden
          px-6 md:px-12
          py-8 md:py-10
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        {/* Left Side */}
        <div
          className="
            flex
            flex-col sm:flex-row
            items-center
            sm:items-start
            md:items-center
            gap-5
            z-10
            text-center sm:text-left
          "
        >
          {/* Icon */}
          <div
            className="
              w-16 h-16
              md:w-20 md:h-20
              bg-white
              rounded-2xl
              flex items-center justify-center
              shadow-md
              flex-shrink-0
            "
          >
            <Headphones
              size={36}
              className="text-blue-600"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              className="
                text-white
                text-xl
                sm:text-2xl
                md:text-4xl
                font-bold
                leading-tight
                max-w-[700px]
              "
            >
              Want to Learn More About Our Training Solutions?
            </h2>

            <p className="text-white text-sm sm:text-base md:text-lg mt-2">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          className="
            bg-white
            text-blue-600
            px-8
            py-3 md:py-4
            rounded-xl
            text-base md:text-lg
            font-semibold
            z-10
            flex items-center gap-2
            whitespace-nowrap
            w-full sm:w-auto
            justify-center
          "
        >
          Contact Us
          <ChevronRight size={20} />
        </button>

        {/* Background Circles */}
        <div className="hidden md:block absolute right-10 top-[-120px] w-[500px] h-[500px] rounded-full border border-blue-400 opacity-20"></div>

        <div className="hidden md:block absolute right-24 top-[-60px] w-[380px] h-[380px] rounded-full border border-blue-300 opacity-20"></div>

        <div className="hidden md:block absolute right-40 top-[10px] w-[260px] h-[260px] rounded-full border border-blue-200 opacity-20"></div>
      </div>
    </section>
  );
}