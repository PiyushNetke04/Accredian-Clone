export default function Stats() {
  const statsData = [
    {
      number: "10K+",
      text: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      text: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      text: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section
      className="bg-[#f7f7f7] py-16 md:py-24"
      id="stats"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Our{" "}
            <span className="text-blue-600">
              Track Record
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mt-4">
            The Numbers Behind{" "}
            <span className="text-blue-600">
              Our Success
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">

          {statsData.map((item, index) => (
            <div
              key={index}
              className={`text-center px-4 md:px-8 ${
                index !== 2
                  ? "md:border-r border-gray-300"
                  : ""
              }`}
            >
              {/* Number Badge */}
              <div
                className="
                  inline-block
                  bg-blue-100
                  text-blue-600
                  px-6 md:px-8
                  py-2 md:py-3
                  rounded-full
                  text-2xl md:text-3xl
                  font-bold
                  mb-6 md:mb-8
                "
              >
                {item.number}
              </div>

              {/* Description */}
              <p
                className="
                  text-base
                  sm:text-lg
                  md:text-xl
                  leading-relaxed
                  font-medium
                  text-black
                  max-w-[300px]
                  mx-auto
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}