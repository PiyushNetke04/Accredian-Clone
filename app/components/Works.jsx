import {
  BarChart3,
  Monitor,
  Presentation,
} from "lucide-react";

export default function Works() {
  const steps = [
    {
      number: "1",
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: <BarChart3 size={28} />,
    },
    {
      number: "2",
      title: "Customized Training Plan",
      desc:
        "Create a tailored roadmap addressing organizational goals.",
      icon: <Monitor size={28} />,
    },
    {
      number: "3",
      title: "Flexible Program Delivery",
      desc:
        "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: <Presentation size={28} />,
    },
  ];

  return (
    <section
      className="bg-[#f8f8f8] py-16 md:py-20 px-4 sm:px-6"
      id="works"
    >
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
          How We{" "}
          <span className="text-blue-600">
            Deliver Results
          </span>{" "}
          That Matter?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600">
            Skill Development
          </span>
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="
              relative
              bg-[#eef5ff]
              border border-blue-200
              rounded-2xl
              shadow-md
              px-6 md:px-9
              py-8
              text-center
              min-h-[220px]
              max-w-[360px]
              mx-auto
              flex flex-col justify-center
            "
          >
            {/* Step Number */}
            <div
              className="
                absolute
                top-4 left-4
                w-7 h-7
                rounded-full
                border border-blue-300
                bg-white
                flex items-center justify-center
                font-bold text-sm text-black
              "
            >
              {step.number}
            </div>

            {/* Left Bar */}
            <div
              className="
                hidden md:block
                absolute
                -left-2
                top-1/2
                -translate-y-1/2
                w-[8px]
                h-36
                bg-blue-600
                rounded-full
              "
            ></div>

            {/* Right Bar */}
            <div
              className="
                hidden md:block
                absolute
                -right-2
                top-1/2
                -translate-y-1/2
                w-[8px]
                h-36
                bg-blue-600
                rounded-full
              "
            ></div>

            {/* Icon */}
            <div
              className="
                w-14 h-14 md:w-16 md:h-16
                mx-auto
                bg-blue-600
                text-white
                rounded-full
                flex items-center justify-center
                shadow-md
                mb-5
              "
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-black mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-gray-600
                text-sm md:text-base
                leading-relaxed
                max-w-[240px]
                mx-auto
              "
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}