import Image from "next/image";

export default function CATFrame() {
  return (
    <section
      id="catframework"
      className="py-16 md:py-20 px-4 md:px-6 bg-[#eef4fc]"
    >
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          The{" "}
          <span className="text-blue-600">
            CAT Framework
          </span>
        </h2>

        <p className="text-base md:text-xl text-gray-600 mt-3">
          Our Proven Approach to{" "}
          <span className="text-blue-600">
            Learning Excellence
          </span>
        </p>
      </div>

      {/* Framework Image */}
      <div className="max-w-6xl mx-auto flex justify-center">
        <Image
          src="/catV2.svg"
          alt="CAT Framework"
          width={1400}
          height={700}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}