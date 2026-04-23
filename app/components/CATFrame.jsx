export default function CATFrame() {
  return (
    <section
      id="catframework"
      className="
        py-16 md:py-20
        px-4 sm:px-6
        bg-linear-to-
        from-[#f8fbff]
        via-[#eef4fc]
        to-[#f8fbff]
      "
    >
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          The{" "}
          <span className="text-blue-600">
            CAT Framework
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3">
          Our Proven Approach to{" "}
          <span className="text-blue-600">
            Learning Excellence
          </span>
        </p>
      </div>

      {/* Framework Image */}
      <div className="max-w-5xl mx-auto flex justify-center">
        <img
          src="/catV2.svg"
          alt="CAT Framework"
          className="
            w-full
            max-w-[320px]
            sm:max-w-[600px]
            md:max-w-[900px]
            lg:max-w-[1100px]
            h-auto
            object-contain
          "
        />
      </div>
    </section>
  );
}