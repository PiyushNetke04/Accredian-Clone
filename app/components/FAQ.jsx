"use client";

import { useState } from "react";

export default function FAQ() {
  const faqData = {
    course: [
      {
        question:
          "What types of corporate training programs does Accredian offer?",
        answer:
          "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "We offer programs in leadership, tech, data science, fintech, digital transformation and emerging technologies.",
      },
    ],

    delivery: [
      {
        question:
          "Can the courses be customized for specific industries or teams?",
        answer:
          "Yes, programs can be tailored according to your team's learning needs.",
      },
      {
        question: "Who are the instructors for these programs?",
        answer:
          "Our instructors are experienced industry professionals and mentors.",
      },
      {
        question: "What formats are the programs delivered in?",
        answer:
          "Online, offline, hybrid and self-paced formats are available.",
      },
    ],

    misc: [
      {
        question:
          "What is the ideal team size for corporate training?",
        answer:
          "We can accommodate both small teams and large enterprise groups depending on your requirements.",
      },
      {
        question:
          "How do we get started with Accredian?",
        answer:
          "Simply click Enquire Now and our team will reach out to understand your training needs.",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState(null);

  const currentFaqs = faqData[activeTab];

  const handleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-[#f8f8f8] py-16 md:py-20 px-4 sm:px-6"
      id="faq"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-10 md:mb-12 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Frequently Asked{" "}
          <span className="text-blue-600">
            Questions
          </span>
        </h2>
      </div>

      {/* Main Layout */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-[220px_1fr]
          gap-8 md:gap-16
        "
      >
        {/* Left Buttons */}
        <div className="flex flex-col gap-4 md:gap-5">
          {[
            {
              id: "course",
              label: "About the Course",
            },
            {
              id: "delivery",
              label: "About the Delivery",
            },
            {
              id: "misc",
              label: "Miscellaneous",
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIndex(null);
              }}
              className={`w-full h-[55px] md:h-[64px] rounded-xl border text-sm sm:text-base md:text-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-white shadow-md text-blue-600 border-gray-200"
                  : "text-gray-500 border-gray-300 bg-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Right Side */}
        <div className="flex flex-col">
          <div className="space-y-4">
            {currentFaqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-5"
              >
                {/* Question */}
                <div
                  onClick={() =>
                    handleAccordion(index)
                  }
                  className="flex justify-between items-center cursor-pointer gap-4"
                >
                  <h3
                    className={`text-base sm:text-lg font-semibold transition ${
                      openIndex === index
                        ? "text-blue-600"
                        : "text-black"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <span className="text-lg text-gray-500 flex-shrink-0">
                    {openIndex === index
                      ? "⌃"
                      : "⌄"}
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button
              className="
                bg-blue-600
                text-white
                px-8
                py-3
                rounded-xl
                text-base
                font-semibold
                shadow-md
                hover:bg-blue-700
                transition
                w-full sm:w-auto
              "
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}