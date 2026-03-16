import {
  BookOpen,
  Briefcase,
  FlaskConical,
  Plane,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export function ProgrammesSection() {
  const programmes = [
    {
      icon: <BookOpen size={48} />,
      title: "Undergraduate Degrees",
      description:
        "Bachelor programmes in Engineering, Business, Arts, Science, Law, and Design for aspiring professionals.",
      cta: "View Undergraduate Programmes",
      color: "bg-[#0F1E3D]",
      image:
        "https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBncm91cCUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MzM5OTQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Briefcase size={48} />,
      title: "Postgraduate Degrees",
      description:
        "Master programmes for specialized knowledge and advanced career opportunities across all disciplines.",
      cta: "View Postgraduate Programmes",
      color: "bg-[#0A8F96]",
      image:
        "https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHRlY2hub2xvZ3klMjBjbGFzc3Jvb218ZW58MXx8fHwxNzczMzk5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <FlaskConical size={48} />,
      title: "Doctoral Research",
      description:
        "PhD programmes for research scholars seeking to advance knowledge and innovation in their fields.",
      cta: "Explore PhD Programmes",
      color: "bg-[#0BB5B5]",
      image:
        "https://images.unsplash.com/photo-1602052294200-a8b75e03adfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc3MzM1MTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Plane size={48} />,
      title: "International Pathways",
      description:
        "Dual degree and exchange programmes with partner universities worldwide for global exposure.",
      cta: "Explore International Programmes",
      color: "bg-[#D4A843]",
      image:
        "https://images.unsplash.com/photo-1770364292883-befec1322e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBkaXZlcnNlJTIwZ3JvdXB8ZW58MXx8fHwxNzczMzk5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAF7]" id="programmes">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0F1E3D] mb-4"
          >
            Programmes for Every Ambition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4A5568] max-w-2xl mx-auto"
          >
            Find the perfect programme to launch your global career
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmes.map((programme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
            >
              {/* Background Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 ${programme.color} opacity-85 group-hover:opacity-75 transition-opacity duration-300`}
                ></div>

                {/* Icon and Title on Image */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-start text-white">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {programme.icon}
                  </div>
                  <h3 className="text-white mb-2">{programme.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-[#4A5568] mb-6">{programme.description}</p>
                <button className="flex items-center gap-2 text-[#0A8F96] hover:text-[#0BB5B5] transition-colors group-hover:gap-3 duration-300 bg-transparent border-none p-0">
                  {programme.cta}
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
