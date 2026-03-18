type SchoolAboutProps = {
  data: {
    title: string;
    content: string[];
  };
};

export default function SchoolAbout({ data }: SchoolAboutProps) {
  return (
    <section className="py-16 bg-[#FAFAF7]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-2">
          About the School
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
          {data.title}
        </h2>

        {/* Content */}
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          {data.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
