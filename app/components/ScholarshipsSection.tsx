"use client";

import { useEffect, useState } from "react";
import { GraduationCap, HandCoins, Users } from "lucide-react";

type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function ScholarshipsSection() {
  return (
    <section className="relative py-28 text-white">
      {/* BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0A2E4E]/80"></div>

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl font-semibold mb-16">
          Scholarships & Financial Support
        </h2>

        {/* COUNTERS */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* ITEM 1 */}
          <div className="flex flex-col items-center">
            <GraduationCap size={70} className="text-[#ff7a2f] mb-4" />

            <h3 className="text-5xl font-bold">
              <Counter end={600} suffix="+" />
            </h3>

            <p className="text-white/80 mt-2">Scholarships</p>
          </div>

          {/* ITEM 2 */}
          <div className="flex flex-col items-center border-x border-white/30 px-10">
            <HandCoins size={70} className="text-[#ff7a2f] mb-4" />

            <h3 className="text-5xl font-bold">
              ₹<Counter end={4.87} suffix=" Cr" />
            </h3>

            <p className="text-white/80 mt-2">Worth of Scholarships</p>
          </div>

          {/* ITEM 3 */}
          <div className="flex flex-col items-center">
            <Users size={70} className="text-[#ff7a2f] mb-4" />

            <h3 className="text-5xl font-bold">
              <Counter end={579} suffix="+" />
            </h3>

            <p className="text-white/80 mt-2">Students Supported</p>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-16 bg-[#ff7a2f] px-8 py-3 rounded-md hover:bg-[#e46720] transition">
          View More →
        </button>
      </div>
    </section>
  );
}
