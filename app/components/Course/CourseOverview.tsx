export default function CourseOverview({ data }: any) {
  if (!data?.overview) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16 ">
      {/* Section Label */}
      <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-2">
        Programme Overview
      </p>

      {/* Title */}
      <h2 className="text-3xl font-serif text-gray-900 mb-6">
        About This Programme
      </h2>

      {/* Content */}
      <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
        {Array.isArray(data.overview) ? (
          data.overview.map((para: string, index: number) => (
            <p key={index}>{para}</p>
          ))
        ) : (
          <p>{data.overview}</p>
        )}
      </div>
    </section>
  );
}
