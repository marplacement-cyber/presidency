"use client";

import { Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Tech Innovation Summit",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
  },
  {
    title: "Startup Expo",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
  },
  {
    title: "Cultural Festival",
    date: "May 05, 2026",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    title: "Global Leadership Forum",
    date: "June 20, 2026",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
];

export function EventsActivitiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION HEADER */}
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-[#ff8c42] uppercase">
            Campus Life
          </span>

          <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#1e3a5f] mt-3 leading-tight">
            Events & Activities That
            <span className="block text-[#ff8c42]">Inspire You</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Discover exciting campus experiences including cultural festivals,
            innovation summits, leadership forums, and student-led activities.
          </p>
        </div>

        {/* EVENT GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FEATURED EVENT */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group">
            <img
              src={events[0].image}
              className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-700"
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">
              <div className="flex items-center gap-2 text-orange-400 text-sm mb-2">
                <Calendar size={16} />
                {events[0].date}
              </div>

              <h3 className="text-2xl font-semibold">{events[0].title}</h3>
            </div>
          </div>

          {/* SMALL EVENT CARDS */}
          <div className="flex flex-col gap-6">
            {events.slice(1).map((event, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={event.image}
                  className="w-24 h-24 object-cover rounded-xl"
                  alt=""
                />

                <div>
                  <div className="flex items-center gap-2 text-orange-500 text-sm mb-1">
                    <Calendar size={14} />
                    {event.date}
                  </div>

                  <h4 className="text-[#1e3a5f] font-semibold">
                    {event.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-14">
          <button className="flex items-center gap-2 bg-[#ff8c42] text-white px-7 py-4 rounded-full hover:bg-[#e67932] transition">
            View All Events
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
