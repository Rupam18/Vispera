import { motion } from "framer-motion";
import s1 from "../../assets/images/service1-illustration.png";
import s2 from "../../assets/images/service2-illustration.png";
import s3 from "../../assets/images/service3-illustration.png";
import s4 from "../../assets/images/service4-illustration.png";
import s5 from "../../assets/images/service5-illustration.png";
import s6 from "../../assets/images/service6-illustration.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const services = [
  { id: 1, title: "VISUAL STORYTELLING AND CONTENT PRODUCTION", img: s1 },
  { id: 2, title: "PHOTOGRAPHY AND BRAND IMAGING", img: s2 },
  { id: 3, title: "SOCIAL MEDIA STRATEGY AND MANAGEMENT", img: s3 },
  { id: 4, title: "WEBSITE DEVELOPMENT & DIGITAL PRESENCE BUILDING", img: s4 },
  { id: 5, title: "CREATIVE GRAPHIC DESIGN AND BRAND IDENTITY", img: s5 },
  { id: 6, title: "DIGITAL MARKETING AND CONTENT STRATEGY", img: s6 },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center mb-16 relative">
          <p className="text-[#5EA4A4] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-2">OUR SERVICES</p>
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#0A374C] font-heading relative z-10"
            >
              How We Help
            </motion.h2>
            <div className="absolute -top-6 -right-12 w-20 h-20 opacity-80 z-0">
               <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          {services.slice(0, 4).map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 0.08} />
          ))}
        </div>
        
        {/* View All */}
        <div className="flex justify-center mt-12">
          <button
            className="bg-[#5EA4A4] hover:bg-[#4D9090] text-white font-bold py-4 px-16 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#5EA4A4]/20 uppercase text-xs tracking-[0.2em]"
          >
            View All
          </button>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
      style={{ border: "1px solid #e8e4dc" }}
    >
      <div className="w-full h-40 flex items-center justify-center">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-center text-xs font-bold text-[#0A374C] uppercase leading-snug tracking-wide">
        {service.title}
      </p>
    </motion.div>
  );
}
