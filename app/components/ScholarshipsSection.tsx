"use client";

import { Award, ArrowRight } from "lucide-react";

const scholarships = [
  {
    title: "Merit Scholarship",
    percent: "30%",
    desc: "Up to 30% tuition fee waiver for students with outstanding academic performance.",
  },
  {
    title: "Chancellor's Scholarship",
    percent: "40%",
    desc: "Exclusive scholarship for exceptional international students with leadership potential.",
  },
  {
    title: "Early Applicant Scholarship",
    percent: "20%",
    desc: "Fee reduction for students who apply early for the academic intake.",
  },
];

export function ScholarshipsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#ff8c42]/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-[#ff8c42]/10 text-[#ff8c42] px-5 py-2 rounded-full text-sm">
            Scholarships & Financial Aid
          </span>

          <h2 className="mt-4 text-2xl md:text-4xl text-[#1e3a5f] leading-tight">
            Study with
            <span className="block text-[#ff8c42]">Financial Support</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto  text-sm md:text-lg">
            Presidency University offers merit-based and special scholarships to
            help talented international students achieve their academic goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {scholarships.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* badge */}
              <div className="absolute top-0 right-0 bg-[#ff8c42] text-white text-sm px-4 py-2 rounded-bl-xl">
                {item.percent} OFF
              </div>

              {/* icon */}
              <div className="bg-[#ff8c42]/10 w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#ff8c42] transition">
                <Award className="text-[#ff8c42] group-hover:text-white" />
              </div>

              <h3 className="text-xl text-[#1e3a5f] mb-3">{item.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>

              <button className="flex items-center gap-2 text-[#ff8c42] font-medium hover:gap-3 transition">
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#ff8c42] hover:bg-[#e67a32] text-white px-10 py-4 rounded-full transition">
            Apply for Scholarship
          </button>
        </div>
      </div>
    </section>
  );
}
