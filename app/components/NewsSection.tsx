"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const news = [
  {
    title: "Global Academic Partnerships Expanded",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070",
  },
  {
    title: "Innovation and Research Initiatives Launched",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070",
  },
  {
    title: "International Student Exchange Programmes",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
  },
  {
    title: "TechBiz Innovation Challenge Highlights",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  },
];

export function NewsSection() {
  return (
    <section className="bg-[#062f54] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* WORLD MAP */}
        <div className="hidden lg:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
            className="opacity-80"
            alt="World Map"
          />
        </div>

        {/* NEWS CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold mb-3">NEWS</h2>

          <p className="text-white/80 mb-10">
            Stay updated with the latest developments at Presidency University,
            including global collaborations, research breakthroughs and
            international programmes.
          </p>

          {/* NEWS CAROUSEL */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-[#1e3a5f] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img
                    src={item.image}
                    className="w-full h-[160px] object-cover"
                    alt=""
                  />

                  <div className="p-5">
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* VIEW ALL */}
          <button className="flex items-center gap-2 mt-10 text-white hover:text-gray-200">
            View All
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
