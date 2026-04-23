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
    <section className=" bg-[#f7f7f7] py-24" id="stats">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-black">
            Our <span className="text-blue-600">Track Record</span>
          </h2>

          <p className="text-1xl text-gray-700 mt-4">
            The Numbers Behind{" "}
            <span className="text-blue-600">Our Success</span>
          </p>
        </div>

        {/* Stats Grid Section */}
        <div className="grid md:grid-cols-3 ">

          {statsData.map((item, index) => (
            <div
              key={index}
              className={`text-center px-8 ${
                index !== 2 ? "md:border-r border-gray-300" : ""
              }`}
            >
              {/* Number Badge Section */}
              <div className="inline-block bg-blue-100 text-blue-600 px-8 py-3 rounded-full text-3xl font-bold mb-8">
                {item.number}
              </div>

              {/* Description Section */}
              <p className="text-xl leading-relaxed font-medium text-black">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}