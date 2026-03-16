import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = [
    { label: "About", href: "#why-presidency" },
    { label: "Academics", href: "#programmes", hasDropdown: true },
    { label: "Admissions", href: "#admissions", hasDropdown: true },
  ];

  const rightNavItems = [
    { label: "Campus Life", href: "#campus-life" },
    { label: "Research", href: "#research" },
    { label: "International", href: "#life-in-bangalore" },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0F1E3D] text-white h-[40px] relative z-50">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left Utility Links */}
            <div className="flex items-center gap-6">
              <a
                href="#bangalore"
                className="text-white/80 hover:text-white transition-colors text-xs uppercase tracking-wider no-underline flex items-center gap-1.5"
              >
                <MapPin size={12} />
                <span className="hidden sm:inline">Bangalore, India</span>
              </a>
              <a
                href="tel:+91"
                className="text-white/80 hover:text-white transition-colors text-xs uppercase tracking-wider no-underline flex items-center gap-1.5"
              >
                <Phone size={12} />
                <span className="hidden md:inline">Contact</span>
              </a>
              <a
                href="#international"
                className="text-white/80 hover:text-white transition-colors text-xs uppercase tracking-wider no-underline flex items-center gap-1.5"
              >
                <Globe size={12} />
                <span className="hidden lg:inline">International Office</span>
              </a>
            </div>

            {/* Right Utility Links */}
            <div className="flex items-center gap-6">
              <a
                href="#students"
                className="text-white/80 hover:text-white transition-colors text-xs uppercase tracking-wider no-underline hidden md:inline"
              >
                Current Students
              </a>
              <a
                href="#alumni"
                className="text-white/80 hover:text-white transition-colors text-xs uppercase tracking-wider no-underline hidden lg:inline"
              >
                Alumni
              </a>
              <a
                href="#faculty"
                className="text-white/80 hover:text-white transition-colors text-xs uppercase tracking-wider no-underline hidden lg:inline"
              >
                Faculty & Staff
              </a>
              <button
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
          isScrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative">
          <div className="flex items-center justify-between h-[85px]">
            {/* Left Navigation Items */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-end pr-36">
              {leftNavItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-[#4A5568] hover:text-[#0A8F96] transition-colors text-sm font-medium tracking-wide no-underline flex items-center gap-1"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-200 shadow-xl mt-4 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="py-2">
                        <a
                          href="#"
                          className="block px-6 py-3 text-[#4A5568] hover:text-[#0A8F96] hover:bg-[#FAFAF7] transition-colors no-underline text-sm"
                        >
                          {item.label === "Academics"
                            ? "All Programmes"
                            : "Undergraduate"}
                        </a>
                        <a
                          href="#"
                          className="block px-6 py-3 text-[#4A5568] hover:text-[#0A8F96] hover:bg-[#FAFAF7] transition-colors no-underline text-sm"
                        >
                          {item.label === "Academics"
                            ? "Schools & Departments"
                            : "Postgraduate"}
                        </a>
                        <a
                          href="#"
                          className="block px-6 py-3 text-[#4A5568] hover:text-[#0A8F96] hover:bg-[#FAFAF7] transition-colors no-underline text-sm"
                        >
                          {item.label === "Academics"
                            ? "Faculty"
                            : "International Students"}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Center Logo - Overlapping Top Bar */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-3">
              <a href="#" className="no-underline block">
                <div className="bg-white px-8 py-3 shadow-lg rounded-b-lg border-t-4 border-[#0A8F96]">
                  <div className="flex flex-col items-center">
                    <img
                      src="/img/logo.webp"
                      alt="Presidency University"
                      className="h-20 w-auto"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Right Navigation Items */}
            <div className="hidden lg:flex items-center gap-8 flex-1 pl-12">
              {rightNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#4A5568] hover:text-[#0A8F96] transition-colors text-sm font-medium tracking-wide no-underline"
                >
                  {item.label}
                </a>
              ))}

              {/* CTA Button */}
              <button className="ml-4 bg-[#0A8F96] text-white px-7 py-2.5 rounded-md hover:bg-[#0BB5B5] transition-all duration-300 text-sm font-semibold tracking-wide uppercase shadow-md hover:shadow-lg hover:scale-105">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#0F1E3D] relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl">
              <div className="px-6 py-6 max-h-[calc(100vh-125px)] overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {/* Mobile Logo Spacer */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="text-center">
                      <div
                        className="text-[#0F1E3D] text-xl font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Presidency University
                      </div>
                    </div>
                  </div>

                  {/* Combined Navigation */}
                  {[...leftNavItems, ...rightNavItems].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="text-[#4A5568] hover:text-[#0A8F96] hover:bg-[#FAFAF7] transition-colors no-underline py-3 px-4 rounded text-sm font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}

                  {/* Mobile Utility Links */}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
                    <a
                      href="#students"
                      className="text-[#4A5568] hover:text-[#0A8F96] transition-colors no-underline py-2 px-4 text-xs uppercase tracking-wider"
                    >
                      Current Students
                    </a>
                    <a
                      href="#alumni"
                      className="text-[#4A5568] hover:text-[#0A8F96] transition-colors no-underline py-2 px-4 text-xs uppercase tracking-wider"
                    >
                      Alumni
                    </a>
                    <a
                      href="#faculty"
                      className="text-[#4A5568] hover:text-[#0A8F96] transition-colors no-underline py-2 px-4 text-xs uppercase tracking-wider"
                    >
                      Faculty & Staff
                    </a>
                  </div>

                  {/* Mobile CTA */}
                  <button className="bg-[#0A8F96] text-white px-6 py-3 rounded-md hover:bg-[#0BB5B5] transition-colors w-full mt-6 font-semibold uppercase tracking-wide text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
