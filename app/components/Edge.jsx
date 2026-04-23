import Image from "next/image";

export default function Edge() {
  return (
    <section className="bg-[#f8f8f8] py-20 px-6" id="edge">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-black">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>

        <p className="text-lg text-gray-600 mt-3">
          Key Aspects of{" "}
          <span className="text-blue-600">
            Our Strategic Training
          </span>
        </p>
      </div>

      {/* Original SVG */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <Image
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
          alt="Accredian Edge"
          width={1400}
          height={700}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}