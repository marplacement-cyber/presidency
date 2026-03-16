"use client";

import { ArrowRight } from "lucide-react";

export function CampusVirtualTourSection() {
  return (
    <section className="relative pt-20 pb-32 bg-gray-100">
      {/* BACKGROUND IMAGE */}
      <div className="relative h-[420px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
          alt="Campus"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* 360 ICON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-6xl font-bold border-4 border-white rounded-full w-32 h-32 flex items-center justify-center">
            360°
          </div>
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="relative max-w-[1000px] mx-auto bg-white shadow-xl px-10 py-14 -mt-24 text-center">
        <h2 className="text-4xl font-semibold text-[#1e2b38] mb-6">
          Explore Our Campus Through a 360° Virtual Tour
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Experience the vibrant campus of Presidency University located in
          Bangalore — a thriving academic environment where innovation, global
          learning, and student life come together. Discover modern facilities,
          collaborative learning spaces, and a dynamic international community.
        </p>

        <button className="mt-10 bg-[#d4a72c] hover:bg-[#c59a24] text-black px-8 py-4 rounded-md flex items-center gap-3 mx-auto transition">
          Virtual Tour 360
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
