type SchoolAboutProps = {
  data: {
    title: string;
    subtitle?: string;
    content: string[];
    image?: string;
    features?: {
      title: string;
      description: string;
    }[];
  };
};

export default function SchoolAbout({ data }: SchoolAboutProps) {
  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={data.image || "/img/law.jpg"}
              alt="School"
              className="rounded-xl w-full h-[260px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Label */}
            <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-2">
              About the School
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f] mb-2">
              {data.title}
            </h2>

            {/* Subtitle */}
            {data.subtitle && (
              <p className="text-[#0A8F96] font-medium mb-4">{data.subtitle}</p>
            )}

            {/* Content */}
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              {data.content.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURES */}
        {data.features && (
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {data.features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mb-3">
                  📘
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[#1e3a5f] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
