"use client";

import {
  Briefcase,
  TrendingUp,
  Award,
  Users,
  DollarSign,
  BarChart,
} from "lucide-react";

const companies = [
  "Amazon",
  "Deloitte",
  "Capgemini",
  "KPMG",
  "Infosys",
  "Cognizant",
];

const stats = [
  {
    icon: <Award size={30} />,
    value: "Top Global Recruiters",
    label: "Amazon, Deloitte, Infosys, KPMG",
  },
  {
    icon: <TrendingUp size={30} />,
    value: "300+",
    label: "Industry Recruitment Partners",
  },
  {
    icon: <Users size={30} />,
    value: "Dedicated Career Services",
    label: "Learning & Development Trainers",
  },
  {
    icon: <Briefcase size={30} />,
    value: "Campus Recruitment",
    label: "Regular Industry Hiring Drives",
  },
  {
    icon: <DollarSign size={30} />,
    value: "Global Career Opportunities",
    label: "Multinational Companies Recruiting",
  },
  {
    icon: <BarChart size={30} />,
    value: "Industry Connected Curriculum",
    label: "Internships & Live Projects",
  },
];

export function PlacementPartnersSection() {
  return (
    <section className="py-24 bg-[#f4f7fb]">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl font-semibold text-[#0A2E4E] mb-3">
          Career Outcomes & Industry Partners
        </h2>

        <p className="text-xl text-[#ff7a2f] mb-6">
          Connecting Talent with Global Opportunities
        </p>

        {/* DESCRIPTION */}
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Presidency University maintains strong industry connections, enabling
          students to transition seamlessly from academic learning to
          professional careers. Global companies regularly participate in campus
          recruitment drives, offering students exceptional career opportunities
          across technology, finance, consulting, and innovation sectors.
        </p>

        {/* COMPANY LOGOS */}
        <div className="flex flex-wrap justify-center gap-12 mb-14 opacity-80">
          {companies.map((company, index) => (
            <span key={index} className="text-xl font-semibold text-gray-700">
              {company}
            </span>
          ))}
        </div>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 flex items-center gap-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-[#0A2E4E]">{item.icon}</div>

              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#0A2E4E]">
                  {item.value}
                </h3>

                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-[#ff7a2f] text-white px-8 py-3 rounded-md hover:bg-[#e46720] transition">
          View More
        </button>
      </div>
    </section>
  );
}
