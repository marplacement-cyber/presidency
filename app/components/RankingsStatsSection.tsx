"use client";

import { Trophy, Users, Briefcase, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CountUp from "react-countup";

import "swiper/css";

const stats = [
  {
    icon: Trophy,
    value: 100,
    suffix: "+",
    label: "Undergraduate & Postgraduate Programmes",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Student Clubs & Communities",
  },
  {
    icon: Briefcase,
    value: 300,
    suffix: "+",
    label: "Industry Recruiters",
  },
  {
    icon: Star,
    value: 100,
    suffix: " Acre",
    label: "Green Campus in Bangalore",
  },
  {
    icon: Trophy,
    value: 20,
    suffix: "+",
    label: "International Academic Partnerships",
  },
];

export function RankingsStatsSlider() {
  return (
    <section className="relative py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* TAG */}
        <div className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-3 py-1 md:px-4 md:py-2 rounded-full mb-3 md:mb-4 text-xs md:text-sm">
          Achievements & Excellence
        </div>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#1e3a5f] mb-4 md:mb-6 leading-tight">
          RANKINGS & STATS THAT
          <span className="block text-[#ff8c42]">DEFINE OUR SUCCESS</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 text-sm md:text-lg max-w-xl mx-auto mb-8 md:mb-16">
          Our global recognition, academic excellence, and strong industry
          partnerships make us a leading destination for higher education.
        </p>

        {/* SWIPER */}
        <Swiper
          slidesPerView={1.2}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
        >
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={i}>
                <div className="group bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-8 h-full hover:shadow-xl transition">
                  {/* Icon */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="bg-[#ff8c42]/10 p-3 md:p-4 rounded-full group-hover:bg-[#ff8c42] transition">
                      <Icon
                        size={22}
                        className="text-[#ff8c42] group-hover:text-white"
                      />
                    </div>
                  </div>

                  {/* Count */}
                  <h3 className="text-2xl md:text-3xl text-[#1e3a5f] mb-1 md:mb-2">
                    <CountUp end={item.value} duration={2} />
                    {item.suffix}
                  </h3>

                  {/* Label */}
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
