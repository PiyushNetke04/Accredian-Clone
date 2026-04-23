export default function Course() {
  const courses = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      image:
        "/course1.png",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image:
        "/course2.png",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image:
        "/course3.png",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      image:
        "/course4.png",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20 px-6" id="courses">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Tailored{" "}
          <span className="text-blue-600">
            Course Segmentation
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mt-3">
          Explore{" "}
          <span className="text-blue-600">
            Custom-fit Courses
          </span>{" "}
          Designed to Address Every Professional Focus
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden 
            hover:shadow-xl transition duration-300"
          >
            
            {/* Image */}
            <div className="h-[220px]">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center min-h-[180px] flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                {course.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                {course.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}