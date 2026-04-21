import { useState, useEffect } from "react";
import heroImg from "../../assets/images/hero-section-banner.png";

const sections = [
  { label: "INTRO", href: "#" },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "CLIENTS", href: "#clients" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-bg-light pt-20 md:pt-24 relative">

      {/* Section indicator — Fixed at top for clarity */}
      <div className="w-full px-8 md:px-16 mb-8 mt-4">
        <div className="relative flex items-end justify-between w-full">
          {/* Subtle Progress Line */}
          <div className="absolute inset-x-0 bottom-[6px] h-[0.5px] bg-[#0A374C]/10 w-full" />
          
          {sections.map((section, i) => (
            <a 
              key={i} 
              href={section.href} 
              className="relative z-10 flex flex-col items-center gap-4 group"
            >
              <span className={`text-[7px] md:text-[9px] uppercase tracking-[0.25em] font-bold whitespace-nowrap transition-all duration-300 ${
                i === 0 
                  ? "text-[#5EA4A4]" 
                  : "text-gray-300 group-hover:text-[#5EA4A4]"
              }`}>
                {section.label}
              </span>
              
              <div className={`rounded-full transition-all duration-300 ${
                i === 0
                  ? "w-2.5 h-2.5 bg-[#5EA4A4] shadow-[0_0_10px_rgba(94,164,164,0.4)]"
                  : "w-2 h-2 bg-gray-200 group-hover:bg-[#5EA4A4]"
              }`} />
            </a>
          ))}
        </div>
      </div>

      {/* Hero image container */}
      <div className="px-8 md:px-16 mt-6 relative group">
        <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#5EA4A4]" />
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        </div>

        <div className="relative rounded-2xl overflow-hidden w-full">
          <img
            src={heroImg}
            alt="Vispera Studios — RNLI Lifeboat"
            className="w-full h-auto block"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/75 backdrop-blur-sm py-3 px-6">
            <p className="text-center text-[#1a1a1a] font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              WELCOME TO VISPERA STUDIOS, A CREATIVE STUDIO FOR STORIES THAT MATTER
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
