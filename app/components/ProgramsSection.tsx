"use client";

import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Engineering & Technology",
    desc: "B.Tech programmes in Computer Science, AI & Machine Learning, Data Science, Robotics, Electronics, Civil, Mechanical, and Petroleum Engineering.",
    image: "./img/classes/1.jpg",
    height: "h-[420px]",
  },
  {
    title: "Computer Applications",
    desc: "BCA and MCA programmes focusing on software development, data science, artificial intelligence, and emerging computing technologies.",
    image: "./img/classes/2.jpg",
    height: "h-[320px]",
  },
  {
    title: "Business & Management",
    desc: "BBA and MBA programmes with specialisations in Digital Marketing, Business Analytics, Finance, Aviation, and Hospitality Management.",
    image: "./img/classes/3.jpg",
    height: "h-[300px]",
  },
  {
    title: "Commerce & Finance",
    desc: "Globally recognised B.Com programmes with ACCA, CMA-US, Banking & Finance, and Corporate Accounting pathways.",
    image: "./img/classes/4.jpg",
    height: "h-[380px]",
  },
  {
    title: "Law",
    desc: "Integrated BA LLB and BBA LLB programmes with moot courts, legal research training, and real-world case studies.",
    image: "./img/classes/5.jpg",
    height: "h-[360px]",
  },
  {
    title: "Design & Creative Arts",
    desc: "B.Des programmes in Communication Design, Fashion Design, Product Design, Game Design, and Space Design.",
    image: "./img/classes/6.jpg",
    height: "h-[500px]",
  },
  {
    title: "Media & Communication",
    desc: "Journalism, film production, digital storytelling, and AR/VR immersive media programmes.",
    image: "./img/classes/7.jpg",
    height: "h-[420px]",
  },
  {
    title: "Liberal Arts & Sciences",
    desc: "Interdisciplinary programmes in Psychology, English, Economics, Political Science, History, Sociology, and Performing Arts.",
    image: "./img/classes/8.jpg",
    height: "h-[340px]",
  },
  {
    title: "Allied Health Sciences",
    desc: "Bachelor of Physiotherapy (BPT) preparing students for global healthcare careers.",
    image: "./img/classes/9.jpg",
    height: "h-[380px]",
  },
];

export function ProgramsMasonrySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* SPLIT BACKGROUND */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f8fafc] to-[#eef2f7]"></div>

      {/* DIVIDER */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-100 hidden lg:block"></div>

      {/* GLOW */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#ff8c42]/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 lg:pl-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-4 py-2 rounded-full mb-4">
            Academic Programs
          </span>

          <h2 className="text-2xl md:text-5xl text-[#1e3a5f]">
            DISCOVER OUR
            <span className="block text-[#ff8c42]">ACADEMIC SCHOOLS</span>
          </h2>
        </div>

        {/* TRUE MASONRY */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {programs.map((program, i) => (
            <div
              key={i}
              className={`break-inside-avoid relative rounded-2xl md:rounded-3xl overflow-hidden group 
min-h-[260px] md:${program.height}`}
            >
              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-top transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${program.image})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl  mb-2">{program.title}</h3>

                <p className="text-sm text-white/80 mb-4">{program.desc}</p>

                <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition">
                  View Programs
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#ff8c42] text-white px-8 py-4 rounded-full hover:bg-[#e67a32] transition">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}
