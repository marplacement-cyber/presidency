type SchoolHeroProps = {
  data: {
    title: string;
    description: string;
    breadcrumb?: string[];
    stats?: {
      label: string;
      value: string;
    }[];
  };
};

export default function SchoolHero({ data }: SchoolHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0F1E3D] via-[#152847] to-[#0D3B5C] text-white py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#0BB5B5,_transparent)]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Breadcrumb */}
          {data.breadcrumb && (
            <div className="text-sm text-teal-300 mb-4">
              {data.breadcrumb.join(" › ")}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            {data.description}
          </p>
        </div>

        {/* RIGHT STATS */}
        {data.stats && (
          <div className="flex flex-col gap-4">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-teal-300">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wide text-gray-300 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
