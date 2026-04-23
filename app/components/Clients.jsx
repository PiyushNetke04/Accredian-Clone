import Image from "next/image";

export default function Clients() {
  const clients = [
    "/reliance.png",
    "/hcl.png",
    "/ibm.png",
    "/crif.png",
    "/adp.svg",
    "/bayer.svg",
  ];

  return (
    <section
      className="bg-[#f7f7f7] py-16 md:py-24"
      id="clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Our Proven{" "}
            <span className="text-blue-600">
              Partnerships
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4">
            Successful Collaborations With the{" "}
            <span className="text-blue-600">
              Industry’s Best
            </span>
          </p>
        </div>

        {/* company logos */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-6
            gap-6 md:gap-8
            items-center
            justify-items-center
          "
        >
          {clients.map((logo, index) => (
            <div
              key={index}
              className="
                w-[120px]
                sm:w-[140px]
                md:w-[160px]
                h-[80px]
                flex
                items-center
                justify-center
              "
            >
              <Image
                src={logo}
                alt="client logo"
                width={120}
                height={70}
                className="
                  object-contain
                  max-h-[60px]
                  md:max-h-[80px]
                  w-auto
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}