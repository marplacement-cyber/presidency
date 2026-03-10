"use client";

import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

/* ---------------- DATA ---------------- */

const studyPrograms = [
  "Undergraduate Programmes",
  "Postgraduate Programmes",
  "Doctoral (PhD)",
  "International Pathways",
  "Foreign Language Electives",
  "Short Courses",
];

const schools = [
  "Computer Science & Engineering",
  "Engineering",
  "Information Science",
  "Management",
  "Commerce",
  "Law",
  "Design",
  "Media Studies",
  "Liberal Arts & Sciences",
  "Allied Health Sciences",
];

const mobileLinks = [
  "Study",
  "Schools",
  "Campus Life",
  "Life in Bangalore",
  "International",
  "About",
  "FAQ",
  "Contact",
];

/* ---------------- COMPONENT ---------------- */

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* ================= MOBILE HEADER ================= */}

      <div className="md:hidden bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo + Text */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f1e3d] to-[#0bb5b5] flex items-center justify-center text-white font-bold">
              P
            </div>

            <div className="leading-tight">
              <p className="text-[#0f1e3d] font-semibold text-sm">
                Presidency University
              </p>
              <p className="text-[#0bb5b5] text-xs tracking-widest">
                INTERNATIONAL
              </p>
            </div>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#0f1e3d]"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Gradient line */}
        {/* <div className="h-2 bg-gradient-to-r from-[#0f1e3d] to-[#0bb5b5]" /> */}
      </div>

      {/* ================= DESKTOP NAV ================= */}

      <div className="hidden md:block bg-[#1e3a5f] border-b border-gray-700">
        <div className=" mx-auto px-6">
          <div className="flex items-center justify-between h-[88px]">
            {/* Logo */}
            <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm flex-shrink-0">
              <img
                src="/img/inner-logo.png"
                alt="Presidency University"
                className="h-14 lg:h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-10 text-white">
              {/* STUDY DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("study")}
                onMouseLeave={() => setActiveMenu("")}
              >
                <button className="hover:text-orange-400 transition">
                  Study
                </button>

                {activeMenu === "study" && (
                  <div className="absolute top-full left-0 mt-2 w-[320px] bg-[#0f2f4a] rounded-lg shadow-xl p-6">
                    <ul className="space-y-3 text-gray-300">
                      {studyPrograms.map((item) => (
                        <li
                          key={item}
                          className="hover:text-white cursor-pointer transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* SCHOOLS MEGA MENU */}
              <div
                className=""
                onMouseEnter={() => setActiveMenu("schools")}
                onMouseLeave={() => setActiveMenu("")}
              >
                <button className="hover:text-orange-400 transition">
                  Schools
                </button>

                {activeMenu === "schools" && (
                  <div className="absolute top-full left-0 w-full bg-gradient-to-r from-[#0f2f4a] to-[#123a5a] shadow-[0_25px_80px_rgba(0,0,0,0.4)] text-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 px-10 py-12">
                      {/* Sidebar */}
                      <div className="border-r border-white/10 pr-6">
                        <h3 className="text-lg font-semibold mb-4">Schools</h3>

                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="hover:text-orange-400 cursor-pointer">
                            All Schools
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Academic Calendar
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Research Centers
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Innovation Labs
                          </li>
                        </ul>
                      </div>

                      {/* Engineering */}
                      <div>
                        <h4 className="font-semibold mb-4">Engineering</h4>

                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="hover:text-orange-400 cursor-pointer">
                            Computer Science & Engineering
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Information Science
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Mechanical Engineering
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Civil Engineering
                          </li>
                        </ul>
                      </div>

                      {/* Business */}
                      <div>
                        <h4 className="font-semibold mb-4">
                          Business & Commerce
                        </h4>

                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="hover:text-orange-400 cursor-pointer">
                            Management
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Commerce
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Economics
                          </li>
                        </ul>
                      </div>

                      {/* Other Schools */}
                      <div>
                        <h4 className="font-semibold mb-4">Other Schools</h4>

                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="hover:text-orange-400 cursor-pointer">
                            Law
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Design
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Media Studies
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Liberal Arts & Sciences
                          </li>
                          <li className="hover:text-orange-400 cursor-pointer">
                            Allied Health Sciences
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a className="hover:text-orange-400 transition">Campus Life</a>

              <a className="hover:text-orange-400 transition">
                Life in Bangalore
              </a>

              <a className="hover:text-orange-400 transition">International</a>

              <a className="hover:text-orange-400 transition">About</a>

              <a className="hover:text-orange-400 transition">Contact</a>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-6">
              <Search className="text-white hover:text-orange-400 cursor-pointer" />

              <button className="bg-orange-500 text-white px-6 py-2.5 rounded-md hover:bg-orange-600 transition">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="md:hidden bg-[#0f1e3d] text-white px-6 py-6 space-y-5 shadow-lg">
          {mobileLinks.map((item) => (
            <a
              key={item}
              className="block text-lg hover:text-orange-400 transition"
            >
              {item}
            </a>
          ))}

          <button className="bg-orange-500 w-full py-3 rounded-md mt-4 hover:bg-orange-600 transition">
            APPLY NOW
          </button>
        </div>
      )}
    </nav>
  );
}
