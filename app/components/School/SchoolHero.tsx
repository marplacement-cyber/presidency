type SchoolHeroProps = {
  data: {
    title: string;
    description: string;
    breadcrumb?: string[];
    stats?: {
      label: string;
      value: string;
    }[];
    image?: string;
  };
};

export default function SchoolHero({ data }: SchoolHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#f7f9fc] to-[#eef3f8] py-20 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Breadcrumb */}
            {data.breadcrumb && (
              <div className="text-sm text-gray-500 mb-4">
                {data.breadcrumb.join(" › ")}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif text-[#1e3a5f] mb-4 leading-tight">
              {data.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-6 max-w-xl leading-relaxed">
              {data.description}
            </p>

            {/* CTA */}
            <div className="flex gap-4 mb-10">
              <button className="flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-3 rounded-lg text-sm font-medium shadow hover:scale-105 transition">
                📘 View Programs
              </button>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#8B0000] to-[#C0392B] text-white px-6 py-3 rounded-lg text-sm font-medium shadow hover:scale-105 transition">
                🔥 Apply Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={data.image || "/img/law.jpg"}
              alt="School"
              className="rounded-xl w-full h-[380px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* STATS BAR (FLOATING EFFECT) */}
        {data.stats && (
          <div className="mt-[-40px] relative z-10 max-w-3xl bg-white shadow-xl rounded-xl px-8 py-6 flex flex-wrap gap-10">
            {data.stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* Icon */}
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-[#1e3a5f]">
                  📊
                </div>

                <div>
                  <p className="text-xl font-semibold text-[#1e3a5f]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
