"use client";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

/* ---------- DATA ---------- */

const quickLinks = [
  "Home",
  "About Presidency",
  "Study at Presidency",
  "International Students",
  "Campus Life",
  "Contact",
];

const academics = [
  "Undergraduate Programmes",
  "Postgraduate Programmes",
  "Doctoral (PhD) Programmes",
  "Schools & Departments",
  "Research & Innovation",
  "International Exchange",
];

const socialLinks = [
  { icon: Facebook, link: "#" },
  { icon: Twitter, link: "#" },
  { icon: Instagram, link: "#" },
  { icon: Linkedin, link: "#" },
];

/* ---------- COMPONENT ---------- */

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] text-white">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V0H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* UNIVERSITY INFO */}
            <div>
              <img
                src="/img/inner-logo-white.png"
                className="w-72 mb-6"
                alt="Presidency University"
              />

              <p className="text-white/80 mb-6 leading-relaxed">
                Presidency University is a globally connected campus in
                Bangalore offering undergraduate, postgraduate, and doctoral
                programmes designed to prepare students for international
                careers.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.link}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff8c42] transition"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-xl mb-6">Quick Links</h3>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#ff8c42] flex items-center gap-2 transition"
                    >
                      <span className="w-1.5 h-1.5 bg-[#ff8c42] rounded-full"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ACADEMICS */}
            <div>
              <h3 className="text-xl mb-6">Academics</h3>

              <ul className="space-y-3">
                {academics.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#ff8c42] flex items-center gap-2 transition"
                    >
                      <span className="w-1.5 h-1.5 bg-[#ff8c42] rounded-full"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-xl mb-6">Contact</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#ff8c42] mt-1" size={20} />
                  <div className="text-white/80">
                    Presidency University
                    <br />
                    Yelahanka, Bangalore
                    <br />
                    Karnataka 560064, India
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-[#ff8c42]" size={20} />
                  <a
                    href="tel:+918040000000"
                    className="text-white/80 hover:text-[#ff8c42]"
                  >
                    +91 80 4000 0000
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-[#ff8c42]" size={20} />
                  <a
                    href="mailto:international@presidencyuniversity.in"
                    className="text-white/80 hover:text-[#ff8c42]"
                  >
                    international@presidencyuniversity.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 Presidency University. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a className="text-white/60 hover:text-[#ff8c42] text-sm">
                Privacy Policy
              </a>

              <a className="text-white/60 hover:text-[#ff8c42] text-sm">
                Terms & Conditions
              </a>

              <a className="text-white/60 hover:text-[#ff8c42] text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
