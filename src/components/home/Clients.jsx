import { motion } from "framer-motion";

// Client logos
import cftiLogo from "../../assets/images/client-logos/cfti_1658408319_43.png";
import germanLogo from "../../assets/images/client-logos/GYVFNblW8AAa45p.png";
import impactDashLogo from "../../assets/images/client-logos/impact-dash.jpg";
import gizLogo from "../../assets/images/client-logos/logo-w-2x.png";
import chandraLogo from "../../assets/images/client-logos/81504159.png";
import yuvaMitraLogo from "../../assets/images/client-logos/yLEi-Aq8_400x400.jpg";
import manaVahiniLogo from "../../assets/images/client-logos/EYkZlZSpUrmvstnyjo15173743258937.png";
import atalBhujalLogo from "../../assets/images/client-logos/Atal-Bhujal-Yojana-july-2025.png";
import tataTrustsLogo from "../../assets/images/client-logos/tata-trusts.jfif";
import safetyResearchLogo from "../../assets/images/client-logos/imgpsh_fullsize_anim-1.png";
import krushakMitraLogo from "../../assets/images/client-logos/Krushak-Mitra-Logo.png";
import lokatmikLogo from "../../assets/images/client-logos/thig_x550.png";
import govMahaLogo from "../../assets/images/client-logos/image-(2).png";
import nhbLogo from "../../assets/images/client-logos/National_Horticulture_Board_2923.png";
import concernIndiaLogo from "../../assets/images/client-logos/image-(3).png";
import ncpedpLogo from "../../assets/images/client-logos/image-(4).png";
import agriLogo from "../../assets/images/client-logos/f686e6_ae5b70decde146698be2586f255b65fe~mv2.png";
import alomaLogo from "../../assets/images/client-logos/aloma-logo-1.webp";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const topClients = [
  { name: "CFTI", logo: cftiLogo },
  { name: "German Cooperation", logo: germanLogo },
  { name: "ImpactDash", logo: impactDashLogo },
  { name: "GIZ", logo: gizLogo },
  { name: "Chandra Foundation", logo: chandraLogo },
];

const allClients = [
  { name: "Yuva Mitra", logo: yuvaMitraLogo },
  { name: "Mana Vahini Foundation", logo: manaVahiniLogo },
  { name: "Atal Bhujal Yojana", logo: atalBhujalLogo },
  { name: "TATA Trusts", logo: tataTrustsLogo },
  { name: "Safety Research Foundation", logo: safetyResearchLogo },
  { name: "Krushak Mitra", logo: krushakMitraLogo },
  { name: "Lokatmik Foundation", logo: lokatmikLogo },
  { name: "Government of Maharashtra", logo: govMahaLogo },
  { name: "National Horticulture Board", logo: nhbLogo },
  { name: "Concern India Foundation", logo: concernIndiaLogo },
  { name: "NCPEDP", logo: ncpedpLogo },
  { name: "Ministry of Agriculture", logo: agriLogo },
  { name: "Aloma Home Care", logo: alomaLogo },
];

export default function Clients() {
  return (
    <section id="clients" className="bg-bg-light overflow-hidden py-16">
      <div className="w-full px-8 md:px-16 lg:px-20">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 relative">
          <p className="text-[#5EA4A4] font-bold tracking-[0.3em] text-[10px] md:text-sm uppercase mb-2">OUR CLIENTS</p>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#0A374C] font-heading leading-tight relative z-10">Stories Built Together</h2>
            <div className="absolute -top-6 -right-12 w-20 h-20 opacity-80 z-0">
               <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Dynamic Logo Wall */}
        <div className="space-y-12">
          {/* Row 1 - Top Partners */}
          <div className="flex flex-wrap items-center justify-between gap-10 border-b border-gray-100 pb-12">
            {topClients.map((client) => (
              <motion.div
                key={client.name}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="flex items-center justify-center grayscale-[0.2] hover:grayscale-0 transition-all"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Center Area with Quote and Surrounding Logos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Logos */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-8">
              {allClients.slice(0, 4).map((client) => (
                <div key={client.name} className="flex flex-col items-center gap-3">
                  <img src={client.logo} alt={client.name} className="h-14 md:h-18 object-contain" />
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter text-center">{client.name}</p>
                </div>
              ))}
            </div>

            {/* Central Quote Box */}
            <div className="lg:col-span-6 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-[#d1e9e7]/50 backdrop-blur-sm border-2 border-[#5EA4A4]/20 rounded-[3rem] p-10 md:p-16 text-center shadow-inner relative overflow-hidden"
              >
                <div className="absolute top-6 right-8 opacity-10">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H3c-1.25 0-2 .75-2 2v8c0 4 0 8 2 8zm15 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-5c-1.25 0-2 .75-2 2v8c0 4 0 8 2 8z"/>
                  </svg>
                </div>
                <p className="text-[#0A374C] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed italic z-10 relative">
                  " Behind every story is a partnership that matters. We've had the privilege of working with organizations that are shaping change, capturing their journeys through visuals that inform, inspire, and connect. "
                </p>
                <div className="mt-8 flex justify-center opacity-30">
                   <div className="w-12 h-1 bg-[#5EA4A4] rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Right Column Logos */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-8">
              {allClients.slice(4, 8).map((client) => (
                <div key={client.name} className="flex flex-col items-center gap-3">
                  <img src={client.logo} alt={client.name} className="h-14 md:h-18 object-contain" />
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter text-center">{client.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Remaining Logos */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 pt-8">
            {allClients.slice(8).map((client) => (
              <motion.div
                key={client.name}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-4"
              >
                <img src={client.logo} alt={client.name} className="h-12 md:h-16 object-contain" />
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter text-center">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-20">
          <button className="bg-[#5EA4A4] hover:bg-[#5EA4A4] text-white font-bold py-4 px-16 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-[#5EA4A4]/20 uppercase text-xs tracking-[0.3em]">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
