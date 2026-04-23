import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] py-6 md:py-8 px-3 md:px-6" id="Home">
      <div className="max-w-7xl mx-auto">

        {/* Main Hero Container */}
        <div
          className="bg-[#eaf2ff] 
          drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] 
          rounded-[30px] 
          px-4 sm:px-6 md:px-14 
          py-8 md:py-10 
          flex flex-col-reverse md:flex-row 
          items-center justify-between gap-8"
        >
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            
            <h1
              className="text-3xl sm:text-4xl md:text-5xl 
              font-bold leading-tight text-black"
            >
              Next-Gen{" "}
              <span className="text-blue-600">Expertise</span>
              <br />
              For Your{" "}
              <span className="text-blue-600">Enterprise</span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-2xl 
              text-black mt-6 md:mt-10 leading-relaxed"
            >
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Features */}
            
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 mt-6 md:mt-10 
                text-sm sm:text-base md:text-lg text-gray-900"
>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                    ✅ <span>Tailored Solutions</span>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                    ✅ <span>Industry Insights</span>
            </div>

  <div className="flex items-center gap-2 justify-center md:justify-start">
    ✅ <span>Expert Guidance</span>
  </div>
          </div>

            {/* Button */}
            <button
              className="mt-8 md:mt-10 
              w-full sm:w-auto
              bg-blue-600 text-white 
              px-8 py-3 md:py-4 
              rounded-xl text-lg md:text-xl 
              hover:bg-blue-700 transition shadow-lg"
            >
              Enquire Now
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/img1.png"
              alt="hero"
              width={550}
              height={550}
              className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[550px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}