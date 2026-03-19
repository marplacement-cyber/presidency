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
    <>
      {/* 🔹 BREADCRUMB BAR */}
      {data.breadcrumb && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="max-w-[1400px] mx-auto px-6 text-sm text-gray-600">
            {data.breadcrumb.map((item, index) => (
              <span key={index}>
                {item}
                {index !== data.breadcrumb!.length - 1 && (
                  <span className="mx-2 text-gray-400">›</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 🔥 HERO SECTION */}
      <section className="relative w-full h-[520px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={data.image || "/img/law.jpg"}
          alt="School"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/95 via-[#0b2a4a]/85 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative max-w-[1400px] mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl  leading-tight mb-4 font-serif">
              {data.title}
            </h1>

            <p className="text-white/80 mb-6 leading-relaxed text-lg">
              {data.description}
            </p>

            <button className="bg-[#0A8F96] hover:bg-[#0BB5B5] px-6 py-3 rounded-md text-white font-medium transition">
              Request Information
            </button>
          </div>
        </div>

        {/* STATS */}
        {data.stats && (
          <div className="absolute bottom-10 right-10 flex gap-4">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-6 py-4 text-center shadow-xl min-w-[120px]"
              >
                <p className="text-xl font-bold text-[#1e3a5f]">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
