export default function CourseHero({ data, school }: any) {
  return (
    <section className="bg-gradient-to-r from-[#0F1E3D] to-[#0D3B5C] text-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="text-sm text-teal-300 mb-4">
            Home › Schools › {school.name} › {data.name}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            {data.name.split("(")[0]}
            {data.name.includes("(") && (
              <span className="text-teal-400 italic block mt-2">
                ({data.name.split("(")[1]}
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-6 leading-relaxed">
            {Array.isArray(data.overview) ? data.overview[0] : data.overview}
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="flex lg:flex-col gap-4 min-w-[180px]">
          {/* Duration */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 text-center">
            <p className="text-2xl font-semibold text-teal-400">
              {data.duration || "2 Yr"}
            </p>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-wide">
              Full-Time
            </p>
          </div>

          {/* Semesters */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 text-center">
            <p className="text-2xl font-semibold text-teal-400">
              {data.semesters || "4"}
            </p>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-wide">
              Semesters
            </p>
          </div>

          {/* Specialisation */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 text-center">
            <p className="text-2xl font-semibold text-teal-400">
              {data.specialization || "AI"}
            </p>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-wide">
              Specialisation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
