import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <section id="services" className="py-2 md:py-4" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">

        <div className="flex flex-col items-center mb-10 relative">
          <p
            className="text-[#5EA4A4] w-full text-center"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "42px",
              textAlign: "center",
              verticalAlign: "middle",
              textTransform: "uppercase"
            }}
          >
            OUR SERVICES
          </p>
          <div className="relative inline-block mt-[-8px]">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#0A374C] relative z-10 text-center"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "42px",
                letterSpacing: "0.02em",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              How We Help
            </motion.h2>
            <div className="absolute top-0 -right-5 w-7 h-7 opacity-80 z-0 pointer-events-none">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Row 1 — 4 cards in one line - Pushed More Left/Right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6">
          {services.slice(0, 4).map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 0.08} />
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-8 pb-4">
          <button 
            onClick={() => navigate("/services")}
            className="bg-[#5EA4A4] hover:bg-[#4D9090] text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center rounded-[8px]"
            style={{
              width: "180px",
              height: "42px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              textTransform: "capitalize"
            }}
          >
            view all
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
