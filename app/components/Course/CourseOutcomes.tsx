"use client";

import { useState } from "react";

export default function CourseOutcomes({ data }: any) {
  const tabs = data?.tabs?.outcomes || {};

  const keys = Object.keys(tabs);
  const [active, setActive] = useState(keys[0]);

  if (!keys.length) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      {/* Heading */}
      <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
        Programme Outcomes
      </p>

      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2 mb-8">
        Educational Objectives & Competencies
      </h2>

      {/* Tabs */}
      <div className="flex gap-3 mb-10">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-full text-sm border transition ${
              active === key
                ? "bg-white shadow border-gray-300 font-medium"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {tabs[active].map((item: any, index: number) => (
          <div
            key={index}
            className="flex gap-5 border-b pb-6 last:border-none"
          >
            {/* Left Badge */}
            <div className="min-w-[70px] h-[50px] flex items-center justify-center rounded-xl bg-teal-50 text-teal-600 font-semibold text-sm">
              {item.id}
            </div>

            {/* Right Content */}
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
