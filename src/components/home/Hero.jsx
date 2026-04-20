import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-section-banner.png";

const sections = [
  { label: "Intro", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
];

export default function Hero() {
  return (
    <section className="bg-bg-light pt-16 md:pt-18 lg:pt-20 pb-8 overflow-hidden">

      {/* Full-width Section progress indicator */}
      <div className="w-full pt-4 md:pt-6 pb-4">
        <div className="relative flex items-center justify-between w-full">
          
          {/* Horizontal connecting line — absolutely edge to edge */}
          <div className="absolute inset-x-0 top-[25px] h-[1px] bg-gray-200 z-0" />

          {sections.map((section, i) => (
            <Link
              key={i}
              to={section.href}
              className={`relative z-10 flex flex-col gap-2 group ${
                i === 0 ? "items-start" : i === sections.length - 1 ? "items-end" : "items-center"
              } ${i === 0 ? "pl-2" : i === sections.length - 1 ? "pr-2" : "flex-1"}`}
              style={{ flexBasis: i === 0 || i === sections.length - 1 ? "auto" : "0" }}
            >
              {/* Label */}
              <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 mb-1 ${
                i === 0 ? "text-[#5EA4A4]" : "text-gray-300 group-hover:text-[#5EA4A4]"
              }`}>
                {section.label}
              </span>
              
              {/* Dot */}
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === 0
                  ? "bg-[#5EA4A4] shadow-[0_0_8px_rgba(94,167,160,0.5)]"
                  : "bg-gray-200 group-hover:bg-[#5EA4A4]/50"
              }`} />
            </Link>
          ))}
        </div>
      </div>

      {/* Hero image container */}
      <div className="px-8 md:px-16 mt-6 relative group">
        <div className="absolute -left-2 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#5EA4A4]" />
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden w-full shadow-2xl">
          <img
            src={heroImg}
            alt="Vispera Studios"
            className="w-full h-auto block transform hover:scale-[1.02] transition-transform duration-[2000ms]"
          />
          
          {/* Bottom Welcome Bar - Figma Style */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] bg-white/85 backdrop-blur-md py-4 md:py-6 px-8 rounded-xl md:rounded-2xl border border-white/20 shadow-lg text-center">
            <p className="text-[#0A374C] font-bold text-[10px] md:text-[13px] tracking-[0.4em] uppercase leading-relaxed font-heading">
              WELCOME TO VISPERA STUDIOS, A CREATIVE STUDIO FOR STORIES THAT MATTER
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
