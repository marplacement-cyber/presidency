"use client";

import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

import { Dialog } from "@/components/ui/dialog";
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
  "Information Science",
  "Mechanical Engineering",
  "Civil Engineering",
  "Management",
  "Commerce",
  "Law",
  "Design",
  "Media Studies",
];

const mobileLinks = [
  "Campus Life",
  "Life in Bangalore",
  "International",
  "About",
  "Contact",
];

/* ---------------- COMPONENT ---------------- */

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const hoverTimeout = useRef<any>(null);

  /* Hover delay handlers */

  const handleMouseEnter = (menu: string) => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setActiveMenu(menu);
    }, 200);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setActiveMenu("");
    }, 250);
  };

  /* Mobile submenu toggle */

  const toggleMobileSubMenu = (menu: string) => {
    setMobileSubMenu(mobileSubMenu === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* ================= MOBILE HEADER ================= */}

      <div className="md:hidden bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
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
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}

      <div className="hidden md:block bg-[#1e3a5f] border-b border-gray-700">
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between h-[88px]">
            {/* Logo */}
            <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm">
              <img
                src="/img/inner-logo.png"
                alt="Presidency University"
                className="h-10"
              />
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-10 text-white">
              {/* STUDY */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("study")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="hover:text-orange-400">Study</button>

                {activeMenu === "study" && (
                  <div className="absolute top-full left-0 mt-2 w-[320px] bg-[#0f2f4a] rounded-lg shadow-xl p-6">
                    <ul className="space-y-3 text-gray-300">
                      {studyPrograms.map((item) => (
                        <li
                          key={item}
                          className="hover:text-white cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* SCHOOLS */}
              <div
                className=""
                onMouseEnter={() => handleMouseEnter("schools")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="hover:text-orange-400">Schools</button>

                {activeMenu === "schools" && (
                  <div className="absolute top-full left-0 w-screen bg-gradient-to-r from-[#0f2f4a] to-[#123a5a] shadow-xl">
                    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 px-10 py-10 text-white">
                      <div>
                        <h4 className="font-semibold mb-4">Engineering</h4>
                        <ul className="space-y-2 text-gray-300">
                          {schools.slice(0, 4).map((item) => (
                            <li
                              key={item}
                              className="hover:text-orange-400 cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Business</h4>
                        <ul className="space-y-2 text-gray-300">
                          {schools.slice(4, 6).map((item) => (
                            <li
                              key={item}
                              className="hover:text-orange-400 cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Other Schools</h4>
                        <ul className="space-y-2 text-gray-300">
                          {schools.slice(6).map((item) => (
                            <li
                              key={item}
                              className="hover:text-orange-400 cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a className="hover:text-orange-400">Campus Life</a>
              <a className="hover:text-orange-400">Life in Bangalore</a>
              <a className="hover:text-orange-400">International</a>
              <a className="hover:text-orange-400">About</a>
              <a className="hover:text-orange-400">Contact</a>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-6">
              <Search
                onClick={() => setSearchOpen(true)}
                className="text-white cursor-pointer hover:text-orange-400"
              />

              <button
                onClick={() => setApplyOpen(true)}
                className="bg-[#ff8c42] hover:bg-[#e67a32] px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 transition text-white"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="md:hidden bg-[#0f1e3d] text-white px-6 py-6 space-y-4">
          {/* STUDY */}
          <div>
            <button
              onClick={() => toggleMobileSubMenu("study")}
              className="flex justify-between w-full text-lg"
            >
              Study
              <ChevronDown size={20} />
            </button>

            {mobileSubMenu === "study" && (
              <ul className="mt-3 space-y-2 pl-4 text-gray-300">
                {studyPrograms.map((item) => (
                  <li key={item} className="hover:text-orange-400">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* SCHOOLS */}
          <div>
            <button
              onClick={() => toggleMobileSubMenu("schools")}
              className="flex justify-between w-full text-lg"
            >
              Schools
              <ChevronDown size={20} />
            </button>

            {mobileSubMenu === "schools" && (
              <ul className="mt-3 space-y-2 pl-4 text-gray-300">
                {schools.map((item) => (
                  <li key={item} className="hover:text-orange-400">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Other Links */}
          {mobileLinks.map((link) => (
            <a key={link} className="block text-lg hover:text-orange-400">
              {link}
            </a>
          ))}

          <button className="bg-orange-500 w-full py-3 rounded-md hover:bg-orange-600">
            APPLY NOW
          </button>
        </div>
      )}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-40 z-50">
          <div className="bg-white w-[500px] rounded-lg p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Search</h3>
              <button onClick={() => setSearchOpen(false)}>
                <X />
              </button>
            </div>

            <input
              type="text"
              placeholder="Search programmes, schools, campus..."
              className="w-full border px-4 py-3 rounded-md outline-none"
            />

            <button className="mt-4 bg-[#1e3a5f] text-white px-6 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      )}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-40 z-50">
          <div className="bg-white w-[500px] rounded-lg p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg ">Search</h3>
              <button onClick={() => setSearchOpen(false)}>
                <X />
              </button>
            </div>

            <input
              type="text"
              placeholder="Search programmes, schools, campus..."
              className="w-full border px-4 py-3 rounded-md outline-none"
            />

            <button className="mt-4 bg-[#1e3a5f] text-white px-6 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      )}
      {applyOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] rounded-xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl  text-[#1e3a5f]">
                International Student Enquiry
              </h2>

              <button onClick={() => setApplyOpen(false)}>
                <X />
              </button>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-4 py-3 rounded-md"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border px-4 py-3 rounded-md"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border px-4 py-3 rounded-md"
              />

              <select className="w-full border px-4 py-3 rounded-md">
                <option>Select Programme</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>PhD</option>
              </select>

              <textarea
                placeholder="Your message"
                className="w-full border px-4 py-3 rounded-md"
              />

              {/* Document Upload */}

              <div>
                <label className="block text-sm mb-2">
                  Upload Documents (Passport / Transcript)
                </label>

                <input type="file" className="w-full border p-2 rounded-md" />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff8c42] text-white py-3 rounded-md hover:bg-[#e67a32]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
