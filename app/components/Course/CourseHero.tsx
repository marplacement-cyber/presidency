import { GraduationCap, CalendarDays, Building2, MapPin } from "lucide-react";
export default function CourseHero({ data, school }: any) {
  const hero = data.hero;

  return (
    <section className="relative text-white bg-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={hero?.image || "/img/campus.jpg"}
          className="w-full h-full object-cover"
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1400px] mx-auto px-6 py-20 mb-10">
        {/* BREADCRUMB */}
        <p className="text-sm text-gray-300 mb-4">
          {hero?.breadcrumb?.join(" › ")}
        </p>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-serif leading-tight max-w-3xl">
          {hero?.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
          {hero?.description}
        </p>

        {/* STATS */}
        <div className="flex flex-wrap gap-4 mt-8 mb-8">
          {hero?.stats?.map((stat: any, i: number) => (
            <div
              key={i}
              className="px-6 py-4 rounded-lg border border-yellow-400/40 bg-black/30 backdrop-blur-sm text-center min-w-[120px]"
            >
              <p className="text-xl font-semibold text-white">{stat.value}</p>
              <p className="text-xs text-gray-300 mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK INFO BAR */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] w-full max-w-[1400px] px-6">
        <div className="rounded-xl overflow-hidden shadow-xl">
          {/* GRADIENT HEADER */}
          <div className="bg-gradient-to-r from-[#1E3A5F] to-[#C9A24A] px-6 py-3 text-white font-semibold">
            Quick Info Bar
          </div>

          {/* INFO GRID */}
          <div className="bg-white grid md:grid-cols-4 gap-6 px-6 py-6 text-gray-800">
            <InfoItem
              icon={<GraduationCap size={20} />}
              label="Degree"
              value={data.degree}
            />
            <InfoItem
              icon={<CalendarDays size={20} />}
              label="Duration"
              value={data.details?.duration}
            />
            <InfoItem
              icon={<Building2 size={20} />}
              label="School"
              value={data.details?.school}
            />
            <InfoItem
              icon={<MapPin size={20} />}
              label="Campus"
              value={data.details?.campus}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔹 Info Item Component */
function InfoItem({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-xl">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}:</p>
        <p className="font-semibold text-sm">{value}</p>
      </div>
    </div>
  );
}
