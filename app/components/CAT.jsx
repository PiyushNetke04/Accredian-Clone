import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function CAT() {
  const categories = [
    {
      icon: <MonitorCheck size={45} />,
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
    },
    {
      icon: <MonitorX size={45} />,
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
    },
    {
      icon: <GraduationCap size={45} />,
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
    },
    {
      icon: <Briefcase size={45} />,
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20 px-6" id="cat">
      <div className="max-w-7xl mx-auto bg-blue-600 rounded-2xl px-8 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <p className="text-white text-2xl mb-3">
              Who Should Join?
            </p>

            <h2 className="text-white text-5xl font-bold leading-tight">
              Strategic Skill Enhancement
            </h2>

            <div className="mt-10">
              <img
                src="/cat.png"
                alt="Professionals"
                className="w-[350px]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
            {categories.map((item, index) => (
              <div key={index}>
                
                <div className="mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-lg text-blue-100">
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