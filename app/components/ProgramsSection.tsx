import { Search } from "lucide-react";
import { motion } from "motion/react";

export function ProgrammesSection() {
  const programmes = [
    { title: "Doctoral (PhD)", color: "border-b-[#0A8F96]" },
    { title: "Postgraduate", color: "border-b-[#D4A843]" },
    { title: "Undergraduate", color: "border-b-[#0A8F96]" },
    { title: "Online Degree", color: "border-b-[#D4A843]" },
  ];

  return (
    <section className="py-24 bg-[#F5F6F8]" id="programmes">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1B4E8C] text-4xl font-semibold mb-6"
          >
            Find your Degree
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#4A5568] max-w-md leading-relaxed"
          >
            Presidency University offers rigorous programmes, valuable
            resources, and countless opportunities that enable you to pursue
            your desired course of study.
          </motion.p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* DEGREE BOXES */}
          <div className="grid grid-cols-2 gap-6">
            {programmes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`bg-white shadow-md rounded-lg p-8 text-center cursor-pointer border-b-4 ${item.color} hover:shadow-xl transition-all`}
              >
                <h3 className="text-[#1B4E8C] font-medium tracking-wide">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* SEARCH */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by: Keyword  course"
              className="w-full border border-gray-300 rounded-md py-4 px-5 pr-12 outline-none focus:border-[#0A8F96]"
            />
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
