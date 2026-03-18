export default function CourseUSP({ data }: any) {
  if (!data?.highlights || data.highlights.length === 0) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      {/* Section Heading */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
          Why Choose This Programme
        </p>
        <h2 className="text-3xl font-serif mt-2 text-gray-900">
          Key Highlights
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {data.highlights.map((item: any, index: number) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-teal-500"
          >
            {/* Dot */}
            <div className="w-3 h-3 bg-teal-500 rounded-full mb-4"></div>

            {/* Title */}
            {typeof item === "string" ? (
              <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
