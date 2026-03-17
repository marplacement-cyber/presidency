"use client";

import { motion } from "motion/react";

export function ResearchHighlightsSection() {
  const sections = [
    {
      title: "Advancing Knowledge Through Research and Innovation",
      description:
        "Presidency University is committed to building a globally connected research culture. The Research & Innovation Council oversees academic and sponsored research.",
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070",
      bg: "bg-[#1565A8]",
    },
    {
      title: "Supporting Global Research Collaboration",
      description:
        "International scholars benefit from advanced labs, seed funding, and global partnerships to solve real-world challenges.",
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070",
      bg: "bg-[#0B3551]",
    },
  ];

  return (
    <section className="py-24 bg-[#EEF1F5]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* ✅ COMMON HEADER */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-full text-sm mb-4"
          >
            Research & Innovation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#1e3a5f]"
          >
            Driving Impact Through
            <span className="block text-[#0A8F96]">Research Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Explore how Presidency University fosters innovation, global
            collaboration, and impactful discoveries.
          </motion.p>
        </div>

        {/* ✅ 2 COLUMN GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div className={`${item.bg} text-white p-6 h-full`}>
                <h3 className="text-xl md:text-2xl mb-3">{item.title}</h3>

                <p className="text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>

                <button className="mt-4 border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
