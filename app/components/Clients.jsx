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
    <section className="bg-[#f7f7f7] py-24" id="clients">
      <div className="max-w-7xl mx-auto px-6 ">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black">
            Our Proven{" "}
            <span className="text-blue-600">Partnerships</span>
          </h2>

          <p className="text-2xl text-gray-700 mt-4">
            Successful Collaborations With the{" "}
            <span className="text-blue-600">
              Industry’s Best
            </span>
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">

  {clients.map((logo, index) => (
    <div
      key={index}
      className="w-[180px] h-[90px] flex items-center justify-center"
    >
      <Image
        src={logo}
        alt="client logo"
        width={130}
        height={80}
        className="object-contain max-h-[90px] w-auto"
      />
    </div>
  ))}

</div>
      </div>
    </section>
  );
}