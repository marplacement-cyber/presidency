export function InternationalStudentsSection() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden group">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070"
        alt="International Students"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500"></div>

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-xl">
          {/* Heading always visible */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            International Students
          </h2>

          {/* Hidden content */}
          <div
            className="
            opacity-0
            translate-y-6
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            "
          >
            <p className="text-lg text-gray-200 mb-6">
              Presidency University welcomes students from across the world into
              a diverse academic community where cultures meet, innovation
              thrives, and global careers begin.
            </p>

            <button className="bg-[#D4A843] text-white px-6 py-3 rounded-md hover:bg-[#b8932e] transition">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
