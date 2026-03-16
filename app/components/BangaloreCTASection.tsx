"use client";

import { ArrowRight } from "lucide-react";

export function BangaloreCTASection() {
  return (
    <section className="relative py-28 text-white">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Bangalore skyline"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-[1000px] mx-auto px-6 text-center">
        {/* GLASS CARD */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl px-10 py-12 border border-white/20">
          {/* TITLE */}
          <h2 className="text-4xl font-semibold mb-4">
            Study in India’s Silicon Valley
          </h2>

          <p className="text-lg text-white/80 mb-8">
            Bangalore is home to leading global companies and offers exceptional
            opportunities for innovation, technology, entrepreneurship, and
            global careers.
          </p>

          {/* COMPANY LOGOS */}
          <div className="flex flex-wrap justify-center gap-8 items-center mb-10 opacity-90">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              className="h-8"
              alt="Google"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              className="h-8"
              alt="Amazon"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              className="h-8"
              alt="Microsoft"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
              className="h-8"
              alt="Infosys"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Wipro_Primary_Logo_Color_RGB.svg"
              className="h-8"
              alt="Wipro"
            />
          </div>

          {/* CTA */}
          <button className="bg-[#1e3a5f] hover:bg-[#162d49] px-8 py-4 rounded-md flex items-center gap-3 mx-auto transition">
            Explore Bangalore Life
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
