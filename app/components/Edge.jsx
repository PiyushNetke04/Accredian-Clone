import Image from "next/image";
export default function Edge() {
  return (
    <section
      className="bg-[#f8f8f8] py-16 md:py-20 px-4 sm:px-6"
      id="edge"
    >
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          The{" "}
          <span className="text-blue-600">
            Accredian Edge
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3">
          Key Aspects of{" "}
          <span className="text-blue-600">
            Our Strategic Training
          </span>
        </p>
      </div>

      {/* SVG Image */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <Image
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
          alt="Accredian Edge"
          width={1400}
          height={700}
          className="
            w-full
            max-w-[320px]
            sm:max-w-[600px]
            md:max-w-[900px]
            lg:max-w-[1400px]
            h-auto
          "
        />
      </div>
    </section>
  );
}