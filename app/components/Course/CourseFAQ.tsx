"use client";

import { useState } from "react";

export default function CourseFAQ({ data }: any) {
  const faqs = data?.faq || [];
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
          Have Questions?
        </p>
        <h2 className="text-3xl font-serif text-gray-900 mt-2">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((item: any, index: number) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className={`border rounded-xl transition-all ${
                isOpen ? "border-teal-500" : "border-gray-200"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="font-medium text-gray-900">{item.q}</span>

                <span
                  className={`text-teal-500 text-xl transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 px-5 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
