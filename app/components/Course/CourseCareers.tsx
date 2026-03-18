export default function CourseCareers({ data }: any) {
  const careers = data?.careers || [];

  if (!careers.length) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
          After Graduation
        </p>
        <h2 className="text-3xl font-serif text-gray-900 mt-2">
          Career Opportunities
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careers.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-500 transition-all duration-300"
          >
            {/* Category */}
            <span className="inline-block text-xs font-semibold bg-teal-50 text-teal-600 px-2 py-1 rounded mb-3 uppercase tracking-wide">
              {item.category}
            </span>

            {/* Roles */}
            <div className="space-y-2">
              {item.roles.map((role: string, i: number) => (
                <p
                  key={i}
                  className="text-sm text-gray-700 border-b last:border-none pb-1"
                >
                  {role}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
