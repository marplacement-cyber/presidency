"use client";

export function ResearchHighlightsSection() {
  const sections = [
    {
      title: "Advancing Knowledge Through Research and Innovation",
      description:
        "Presidency University is committed to building a globally connected research culture. The Research & Innovation Council oversees a growing portfolio of academic and sponsored research, supporting scholars through publication in peer-reviewed journals, international conference participation, and industry-sponsored projects.",
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3250f3a1?q=80&w=2070",
      bg: "bg-[#1565A8]",
    },
    {
      title: "Supporting Global Research Collaboration",
      description:
        "International scholars are welcomed into Presidency University's research ecosystem. Researchers benefit from seed grant funding, advanced laboratories, and partnerships with universities worldwide to develop collaborative research addressing global challenges.",
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070",
      bg: "bg-[#0B3551]",
    },
  ];

  return (
    <section className="py-20 bg-[#EEF1F5]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {sections.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300"
            >
              {/* TEXT SIDE */}
              <div
                className={`${item.bg} text-white p-10 flex flex-col justify-center`}
              >
                <h3 className="text-2xl md:text-3xl  mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-white/90 leading-relaxed">
                  {item.description}
                </p>

                <button className="mt-6 border border-white px-5 py-2 w-fit hover:bg-white hover:text-black transition">
                  Explore
                </button>
              </div>

              {/* IMAGE SIDE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
