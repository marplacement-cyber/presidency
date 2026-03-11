"use client";

import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "YOUR WORLD-CLASS EDUCATION",
    highlight: "STARTS IN BANGALORE",
    desc: (
      <>
        Study at Presidency University, one of India’s leading private
        universities
        <br />
        located in the heart of Bangalore — the Silicon Valley of India.
      </>
    ),
    image: "/img/slider/2.jpg",
  },
  {
    title: "A GLOBAL CAMPUS FOR",
    highlight: "INTERNATIONAL STUDENTS",
    desc: (
      <>
        Join a vibrant community of students from around the world
        <br />
        and experience world-class teaching and global opportunities.
      </>
    ),
    image: "/img/slider/1.jpg",
  },
  {
    title: "BUILD YOUR FUTURE IN",
    highlight: "INDIA'S TECH CAPITAL",
    desc: (
      <>
        Located in Bangalore — home to global companies
        <br />
        like Amazon, Google, Microsoft and Infosys.
      </>
    ),
    image: "/img/slider/1.jpg",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative mt-16.5 md:mt-0 h-[75vh] md:h-[90vh] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[6000ms]"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-6 md:px-20">
            <div className="max-w-xl md:max-w-3xl text-white">
              {/* Tag */}
              <span className="uppercase tracking-widest text-xs md:text-sm text-orange-400">
                Admissions Open 2026
              </span>

              {/* Heading */}
              <h1 className="mt-3 font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight">
                {slide.title}
                <br />
                <span className="text-orange-400">{slide.highlight}</span>
              </h1>

              {/* Description */}
              <p className="mt-4 md:mt-6 text-sm md:text-lg text-white/80 leading-relaxed">
                {slide.desc}
              </p>

              {/* Buttons */}
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="bg-[#ff8c42] hover:bg-[#e67a32] px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 transition">
                  Apply Now
                  <ArrowRight size={18} />
                </button>

                <button className="border border-white/40 hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 transition">
                  Download Brochure
                  <Download size={18} />
                </button>
              </div>

              {/* Stats */}
              <div className="mt-6 md:mt-10 flex flex-wrap gap-6 md:gap-10 text-sm text-white/80">
                <div>
                  <p className="text-xl md:text-2xl font-heading text-white">
                    150+
                  </p>
                  <p className="text-white">Programs</p>
                </div>

                <div>
                  <p className="text-xl md:text-2xl font-heading text-white">
                    300+
                  </p>
                  <p className="text-white">Recruiters</p>
                </div>

                <div>
                  <p className="text-xl md:text-2xl font-heading text-white">
                    50K+
                  </p>
                  <p className="text-white">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 
        bg-white/10 hover:bg-white/30 backdrop-blur p-2 md:p-3 rounded-full
        opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 
        bg-white/10 hover:bg-white/30 backdrop-blur p-2 md:p-3 rounded-full
        opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${
              current === i ? "bg-orange-400" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
