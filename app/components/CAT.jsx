import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function CAT() {
  const categories = [
    {
      icon: <MonitorCheck size={40} />,
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
    },
    {
      icon: <MonitorX size={40} />,
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
    },
    {
      icon: <GraduationCap size={40} />,
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
    },
  ];

  return (
    <section
      className="bg-[#f8f8f8] py-16 md:py-20 px-4 sm:px-6"
      id="cat"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          bg-blue-600
          rounded-2xl
          px-5 sm:px-8
          py-8 md:py-10
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left Side */}
          <div className="text-center lg:text-left">
            <p className="text-white text-lg sm:text-xl md:text-2xl mb-3">
              Who Should Join?
            </p>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Strategic Skill Enhancement
            </h2>

            <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
              <img
                src="/cat.png"
                alt="Professionals"
                className="
                  w-full
                  max-w-[250px]
                  sm:max-w-[320px]
                  md:max-w-[350px]
                  h-auto
                "
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 text-white">
            {categories.map((item, index) => (
              <div
                key={index}
                className="text-center sm:text-left"
              >
                <div className="mb-4 flex justify-center sm:justify-start">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}