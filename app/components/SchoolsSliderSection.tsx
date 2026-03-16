"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function SchoolsSliderSection() {
  const schools = [
    {
      title: "School of Computer Science & Engineering",
      description:
        "Offers UG, PG and PhD programmes in Artificial Intelligence, Data Science, Cyber Security, Blockchain and Robotics.",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6b8c4b95?q=80&w=2070",
    },
    {
      title: "School of Engineering",
      description:
        "Engineering programmes in Electronics, Electrical, Civil, Mechanical, Petroleum and VLSI technologies.",
      image:
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070",
    },
    {
      title: "School of Management",
      description:
        "Business education including BBA, MBA and doctoral research across finance, marketing and analytics.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    },
    {
      title: "School of Design",
      description:
        "Creative design programmes including product design, fashion design, game design and multimedia.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
    },
    {
      title: "School of Law",
      description:
        "Integrated BA LLB, BBA LLB and LLM programmes with moot court training and legal research.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
    },
  ];

  return (
    <section className="w-full relative  bg-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {schools.map((school, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[550px] ">
              {/* Background Image */}
              <img
                src={school.image}
                alt={school.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content Box */}
              <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-xl  max-w-[1200px] mx-auto">
                <div className="bg-[#4C5482] text-white px-8 py-6 text-3xl font-semibold">
                  {school.title}
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6">{school.description}</p>

                  <button className="bg-[#4C5482] text-white px-6 py-3 hover:bg-[#2F3561] transition">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
