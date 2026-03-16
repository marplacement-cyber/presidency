"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const focusItems = [
  {
    title: "Global Academic Partnerships",
    description:
      "Presidency University continues to expand international collaborations with universities across Europe, Asia, and the Americas, strengthening research and exchange programmes.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070",
  },
  {
    title: "Research and Innovation Initiatives",
    description:
      "The Research & Innovation Council supports faculty and doctoral scholars through global research collaborations, publications, and advanced laboratory infrastructure.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3250f3a1?q=80&w=2070",
  },
  {
    title: "International Student Community",
    description:
      "Students from across the world study at Presidency University, creating a vibrant multicultural campus environment and global learning experience.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
  },
  {
    title: "Innovation & Entrepreneurship",
    description:
      "The Presidency Launchpad incubation centre supports student startups and entrepreneurship initiatives, transforming research ideas into real-world impact.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  },
];

export function InFocusSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TITLE */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl font-semibold text-[#0A2E4E]">In Focus</h2>
          <div className="w-20 h-[2px] bg-gray-300 relative">
            <span className="absolute right-0 top-[-3px] w-2 h-2 bg-yellow-500 rounded-full"></span>
          </div>
        </div>

        {/* CAROUSEL */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {focusItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition">
                <img
                  src={item.image}
                  className="w-full h-[180px] object-cover"
                  alt=""
                />

                <div className="p-5 flex flex-col ">
                  <h3 className="font-semibold text-[#0A2E4E] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm flex-grow">
                    {item.description}
                  </p>

                  <button className="mt-4 bg-[#0A2E4E] text-white px-4 py-2 rounded-md w-fit hover:bg-[#08315a] transition">
                    View More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* VIEW ALL */}
        <div className="mt-10">
          <button className="flex items-center gap-2 bg-[#0A2E4E] text-white px-6 py-3 rounded-md hover:bg-[#08315a] transition">
            View All
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
