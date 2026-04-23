"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/leads",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setMessage(
          "Lead submitted successfully!"
        );

        setFormData({
          name: "",
          email: "",
          company: "",
        });
      } else {
        setMessage(
          "Failed to submit lead."
        );
      }
    } catch (error) {
      console.log(error);
      setMessage(
        "Something went wrong."
      );
    }
  };

  return (
    <section className="bg-[#f8f8f8] py-16 md:py-20 px-4 sm:px-6">
      <div
        className="
          max-w-xl
          mx-auto
          bg-white
          p-5 sm:p-8
          rounded-xl
          shadow-md
        "
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
          Enquire Now
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full
              border border-gray-300
              p-3
              rounded-lg
              text-gray-700
              text-sm sm:text-base
            "
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="
              w-full
              border border-gray-300
              p-3
              rounded-lg
              text-gray-700
              text-sm sm:text-base
            "
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="
              w-full
              border border-gray-300
              p-3
              rounded-lg
              text-gray-700
              text-sm sm:text-base
            "
            required
          />

          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-lg
              font-semibold
              hover:bg-blue-700
              transition
              text-sm sm:text-base
            "
          >
            Submit
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className="
              text-center
              mt-4
              text-green-600
              font-medium
              text-sm sm:text-base
            "
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}