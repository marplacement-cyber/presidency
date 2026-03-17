"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";

export function ProgrammesSection() {
  const programmes = [
    { title: "Doctoral (PhD)", color: "border-b-[#0A8F96]" },
    { title: "Postgraduate", color: "border-b-[#D4A843]" },
    { title: "Undergraduate", color: "border-b-[#0A8F96]" },
    { title: "Online Degree", color: "border-b-[#D4A843]" },
  ];

  return (
    <section className="py-24 bg-[#F5F6F8]" id="programmes">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-full text-sm mb-4"
          >
            Academic Programmes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#1B4E8C] text-4xl font-semibold mb-6"
          >
            Find Your Perfect
            <span className="block text-[#0A8F96]">Degree Programme</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#4A5568] max-w-md mb-5"
          >
            Presidency University offers rigorous academic programmes, global
            exposure, and industry-driven learning.
          </motion.p>
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
              alt="Students"
              className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* OPTIONAL OVERLAY TEXT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
              <p className="text-white text-sm">
                Explore campus life and academic excellence
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* DEGREE BOXES */}
          <div className="grid grid-cols-2 gap-6">
            {programmes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`bg-white shadow-md rounded-xl p-8 text-center border-b-4 ${item.color}`}
              >
                <h3 className="text-[#1B4E8C] font-medium">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* SEARCH */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by: Keyword or course"
              className="w-full border border-gray-300 rounded-md py-4 px-5 pr-12"
            />
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>

          {/* ✅ NEW IMAGE */}
        </div>
      </div>
    </section>
  );
}
