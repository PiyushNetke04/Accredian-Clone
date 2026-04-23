import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] py-8 px-6" id="Home">
      <div className="max-w-7xl mx-auto px-6 max-h-[40%]">

        {/* main hero container */}
        <div className="max-w=[1550px] mx-auto bg-[#eaf2ff] drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-[30px] px-14 py-10 flex flex-col md:flex-row items-center justify-between">

          {/* Left side content  */}
          <div className="w-full md:w-1/2">

            <h1 className="text-5xl font-bold leading-[1.1] text-black">
              Next-Gen{" "}
              <span className="text-blue-600">Expertise</span>
              <br />
              For Your{" "}
              <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="text-2xl text-black mt-10 leading-relaxed">
              Cultivate high-performance
              <br />
              teams through expert learning.
            </p>

            {/* Features in row */}
            <div className="flex flex-wrap gap-6 mt-10 text-lg text-gray-900">

              <div className="flex items-center gap-2">
                ✅ <span>Tailored Solutions</span>
              </div>

              <div className="flex items-center gap-2">
                ✅ <span>Industry Insights</span>
              </div>

              <div className="flex items-center gap-2">
                ✅ <span>Expert Guidance</span>
              </div>
            </div>

            {/* Enquiry btn */}
            <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl text-xl hover:bg-blue-700 transition shadow-lg">
              Enquire Now
            </button>
          </div>

          {/*  Image */}
          <div className="w-full md:w-1/2 flex justify-end mt-10 md:mt-0">
            <Image
              src="/img1.png"
              alt="hero"
              width={550}
              height={550}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}