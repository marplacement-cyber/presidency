"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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
    <section className="bg-white">
      {/* OPTIONAL HEADER */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-full text-sm mb-4"
          >
            Academic Schools
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#1e3a5f]"
          >
            Explore Our
            <span className="block text-[#0A8F96]">Schools & Departments</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Presidency University offers diverse academic schools designed to
            provide industry-relevant knowledge, global exposure, and research
            opportunities.
          </motion.p>
        </div>
      </div>

      {/* 🔥 FULL WIDTH SLIDER */}
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {schools.map((school, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[550px]">
              {/* IMAGE */}
              <img
                src={school.image}
                alt={school.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full">
                  <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden max-w-xl hover:-translate-y-1 transition duration-300">
                    {/* TITLE BAR */}
                    <div className="bg-[#1e3a5f] text-white px-6 py-4 text-xl md:text-2xl font-semibold">
                      {school.title}
                    </div>

                    {/* BODY */}
                    <div className="p-6 md:p-8">
                      <p className="text-gray-700 mb-6">{school.description}</p>

                      {/* 🔥 PREMIUM BUTTON */}
                      <button className="bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 flex items-center gap-3  py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Explore
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
