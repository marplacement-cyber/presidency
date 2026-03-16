import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const footerLinks = {
    about: [
      "About Presidency",
      "Vision & Mission",
      "Leadership",
      "Accreditations",
      "Rankings",
    ],
    schools: [
      "School of Engineering",
      "School of Business",
      "School of Design",
      "School of Law",
      "School of Sciences",
    ],
    admissions: [
      "How to Apply",
      "Programmes",
      "Scholarships",
      "Fees & Funding",
      "Campus Tours",
    ],
    international: [
      "Why Choose Us",
      "Student Visa",
      "Life in Bangalore",
      "Accommodation",
      "Support Services",
    ],
  };

  return (
    <footer className="bg-[#0F1E3D] text-white pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h4 className="text-white mb-4">About</h4>
            <ul className="space-y-2 list-none p-0">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schools Column */}
          <div>
            <h4 className="text-white mb-4">Schools</h4>
            <ul className="space-y-2 list-none p-0">
              {footerLinks.schools.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Column */}
          <div>
            <h4 className="text-white mb-4">Admissions</h4>
            <ul className="space-y-2 list-none p-0">
              {footerLinks.admissions.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* International Office Column */}
          <div>
            <h4 className="text-white mb-4">International Office</h4>
            <ul className="space-y-2 list-none p-0">
              {footerLinks.international.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white mb-3">Contact Us</h4>
              <p className="text-white/70 text-sm mb-2">
                Presidency University
                <br />
                Itgalpura, Rajanakunte, Yelahanka
                <br />
                Bangalore - 560064, Karnataka, India
              </p>
              <p className="text-white/70 text-sm mb-1">
                Email: international@presidencyuniversity.in
              </p>
              <p className="text-white/70 text-sm">Phone: +91 80 4012 9999</p>
            </div>

            <div>
              <h4 className="text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm m-0">
            © 2026 Presidency University. All rights reserved. | Privacy Policy
            | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
