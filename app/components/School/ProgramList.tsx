import Link from "next/link";

type Program = {
  slug: string;
  name: string;
  duration: string;
};

type ProgramListProps = {
  programs: Program[];
  slug: string; // school slug
};

export default function ProgramList({ programs, slug }: ProgramListProps) {
  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-2">
          Programmes
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-8">
          Explore Our Courses
        </h2>

        {/* Program List */}
        <div className="space-y-4">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/schools/${slug}/${program.slug}`}
              className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600">
                  {program.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{program.duration}</p>
              </div>

              {/* Arrow */}
              <span className="text-teal-500 text-xl opacity-0 group-hover:opacity-100 transition">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
