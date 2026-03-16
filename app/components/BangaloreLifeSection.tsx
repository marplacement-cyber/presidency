"use client";

export function BangaloreLifeSection() {
  type BangaloreItem = {
    title: string;
    subtitle: string;
    image: string;
    large?: boolean;
    wide?: boolean;
  };
  const items: BangaloreItem[] = [
    {
      title: "Global Technology Hub",
      subtitle: "Home to Google, Microsoft & Amazon",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2070",
      large: true,
    },
    {
      title: "Startup Capital of India",
      subtitle: "Thousands of innovation-driven startups",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070",
    },
    {
      title: "World-Class Career Opportunities",
      subtitle: "Multinational companies and global careers",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070",
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "A vibrant international student city",
      image:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2070",
      wide: true,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#1e3a5f]">
            Experience Life in Bangalore
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Known as India’s Silicon Valley, Bangalore offers students
            unparalleled opportunities for innovation, global careers,
            entrepreneurship, and vibrant cultural experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[260px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                item.large ? "md:col-span-2 row-span-2" : ""
              } ${item.wide ? "md:col-span-2" : ""}`}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                alt=""
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
