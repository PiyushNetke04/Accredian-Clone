import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  Wallet,
} from "lucide-react";

export default function Experties() {
  const domains = [
    {
      title: "Product & Innovation Hub",
      icon: <Lightbulb size={45} className="text-blue-600" />,
    },
    {
      title: "Gen-AI Mastery",
      icon: <Brain size={45} className="text-blue-600" />,
    },
    {
      title: "Leadership Elevation",
      icon: <Users size={45} className="text-blue-600" />,
    },
    {
      title: "Tech & Data Insights",
      icon: <BarChart3 size={45} className="text-blue-600" />,
    },
    {
      title: "Operations Excellence",
      icon: <Settings size={45} className="text-blue-600" />,
    },
    {
      title: "Digital Enterprise",
      icon: <Globe size={45} className="text-blue-600" />,
    },
    {
      title: "Fintech Innovation Lab",
      icon: <Wallet size={45} className="text-blue-600" />,
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-16 md:py-20 px-4 sm:px-6">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Our{" "}
          <span className="text-blue-600">
            Domain Expertise
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3">
          <span className="text-blue-600">
            Specialized Programs
          </span>{" "}
          Designed to Fuel Innovation
        </p>
      </div>

      {/* First 6 cards */}
      <div
        className="
          max-w-5xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-5 md:gap-6
        "
      >
        {domains.slice(0, 6).map((domain, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-xl
              shadow-md
              h-[120px] md:h-[130px]
              flex flex-col
              items-center
              justify-center
              hover:shadow-lg
              transition
              duration-300
            "
          >
            <div className="mb-3">
              {domain.icon}
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-center px-4 text-gray-800">
              {domain.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Last card */}
      <div className="flex justify-center mt-5 md:mt-6">
        <div
          className="
            bg-white
            rounded-xl
            shadow-md
            h-[130px] md:h-[160px]
            w-full
            sm:w-[300px]
            md:w-[380px]
            flex flex-col
            items-center
            justify-center
            hover:shadow-lg
            transition
            duration-300
          "
        >
          <div className="mb-3">
            {domains[6].icon}
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-center px-4 text-gray-800">
            {domains[6].title}
          </h3>
        </div>
      </div>
    </section>
  );
}