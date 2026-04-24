import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import headingBg from "../../assets/images/decoration-heading-bg.svg";
import cardDecorationBg from "../../assets/images/Group39737.png";

// Import all logos
import cftiLogo from "../../assets/images/rowf1.png";
import germanLogo from "../../assets/images/image.png";
import impactDashLogo from "../../assets/images/rowf3.png";
import gizLogo from "../../assets/images/GIZ-logo-cobaltqube-media1.png";
import chandraLogo from "../../assets/images/rowf5.png";

import yuvaMitraLogo from "../../assets/images/rows1.png";
import manaMahilaLogo from "../../assets/images/rows2.png"; // Circle pink
import atalBhujalLogo from "../../assets/images/rows3.png"; // Circle blue
import tataTrustsLogo from "../../assets/images/tata.jpeg"; // Red box
import safetyResearchLogo from "../../assets/images/safety.png";
import modLogo from "../../assets/images/ministry.png"; // Ministry of Agriculture

import govMahaLogo from "../../assets/images/govtofmah.png";
import krushakMitraLogo from "../../assets/images/rowl2.png";
import lokatmikLogo from "../../assets/images/rowl3.png";
import nhbLogo from "../../assets/images/rowl4.png";
import concernIndiaLogo from "../../assets/images/concern.png";
import ncpedpLogo from "../../assets/images/rowl5.png";

// Row 1 — top 5
const topRow = [
  { name: "CFTI", logo: cftiLogo },
  { name: "German Cooperation", logo: germanLogo },
  { name: "ImpactDash", logo: impactDashLogo },
  { name: "GIZ", logo: gizLogo },
  { name: "Chandra Foundation", logo: chandraLogo },
];

// Left column 
const leftCol = [
  { name: "Yuva Mitra", logo: yuvaMitraLogo },
  { name: "Mana Mahila Foundation", logo: manaMahilaLogo },
  { name: "Safety Research Foundation", logo: safetyResearchLogo },
];

// Right column
const rightCol = [
  { name: "Atal Bhujal Yojana", logo: atalBhujalLogo },
  { name: "TATA Trusts", logo: tataTrustsLogo },
  { name: "Ministry of Agriculture", logo: modLogo },
];

// Bottom row — 6 logos
const bottomRow = [
  { name: "Government of Maharashtra", logo: govMahaLogo },
  { name: "Krushak Mitra", logo: krushakMitraLogo },
  { name: "Lokatmik Foundation", logo: lokatmikLogo },
  { name: "National Horticulture Board", logo: nhbLogo },
  { name: "Concern India Foundation", logo: concernIndiaLogo },
  { name: "NCPEDP", logo: ncpedpLogo },
];

const LogoItem = ({ client, h = "h-12 md:h-14" }) => (
  <div className="flex flex-col items-center justify-center p-0">
    <img
      src={client.logo}
      alt={client.name}
      className={`${h} w-auto object-contain transition-transform hover:scale-105 duration-300`}
    />
  </div>
);

export default function Clients() {
  const navigate = useNavigate();
  return (
    <section id="clients" className="bg-bg-light pt-2 pb-8 md:pt-4 md:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-8 relative">
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
            OUR CLIENTS
          </p>
          <div className="relative inline-block mt-[-8px]">
            <h2 
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
              Stories Built Together
            </h2>
            <div className="absolute top-0 -right-5 w-7 h-7 opacity-80 z-0 pointer-events-none">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* ============================================================
            DESKTOP VIEW (lg:flex) - STRICTLY UNTOUCHED ORIGINAL GRID
           ============================================================ */}
        <div className="hidden lg:flex flex-col gap-0">
          {/* Top Row - 5 Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 border-b border-gray-100 pb-8">
            {topRow.map((c) => (
              <LogoItem key={c.name} client={c} h="h-12 md:h-15" />
            ))}
          </div>

          {/* Middle Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Left Col - 3 Logos */}
            <div className="col-span-3 flex flex-col items-center gap-10">
              {leftCol.map((c) => (
                <LogoItem key={c.name} client={c} h="h-12 md:h-22" />
              ))}
            </div>

            {/* Quote Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-6 bg-[#5EA4A480] border-2 border-[#0A374C] rounded-3xl px-10 py-6 md:px-12 md:py-8 text-center relative shadow-sm"
            >
              <p className="text-[#0A374C] text-lg md:text-xl font-medium leading-[1.6]">
                “ Behind every story is a partnership that <br />
                matters. We've had the privilege of working with <br />
                organizations that are shaping change, capturing <br />
                their journeys through visuals that inform, <br />
                inspire, and connect. ”
              </p>
              <div className="absolute bottom-2 right-4 md:bottom-0 md:right-1 w-16 h-18 md:w-20 md:h-20 opacity-80">
                <img src={cardDecorationBg} alt="" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Right Col - 3 Logos */}
            <div className="col-span-3 flex flex-col items-center gap-10">
              {rightCol.map((c) => (
                <LogoItem key={c.name} client={c} h="h-12 md:h-22" />
              ))}
            </div>
          </div>

          {/* Bottom Row - 6 Logos */}
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 pt-8 border-t border-gray-100">
            {bottomRow.map((c) => (
              <LogoItem key={c.name} client={c} h="h-18 md:h-28" />
            ))}
          </div>
        </div>

        {/* ============================================================
            TABLET VIEW (md:flex lg:hidden) - EXACT FIGMA CLOUD MATCH
           ============================================================ */}
        <div className="hidden md:flex lg:hidden flex-col gap-6">

          {/* Top Row - Dense Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <LogoItem client={topRow[0]} h="h-16" />
            <LogoItem client={{ name: "Safety Research Foundation", logo: safetyResearchLogo }} h="h-14" />
            <LogoItem client={{ name: "GIZ", logo: gizLogo }} h="h-16" />
            <LogoItem client={{ name: "TATA Trusts", logo: tataTrustsLogo }} h="h-14" />
          </div>

          {/* Middle Cluster - Overlapping Cloud */}
          <div className="grid grid-cols-12 gap-0 items-center -my-2">

            {/* Left Cluster - Clean Line */}
            <div className="col-span-3 flex flex-col items-center gap-8">
              <LogoItem client={leftCol[0]} h="h-14" />
              <LogoItem client={leftCol[1]} h="h-14" />
              <LogoItem client={{ name: "German Cooperation", logo: germanLogo }} h="h-14" />
            </div>

            {/* Central Partnership Box - High Density */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-6 bg-[#5EA4A4]/40 border-[1.5px] border-[#0A374C] rounded-[1.5rem] px-6 py-8 text-center relative shadow-sm z-10"
            >
              <p className="text-[#0A374C] text-[15px] font-medium leading-[1.6] italic">
                “ Behind every story is a partnership that matters. We've had the privilege of working with organizations that are shaping change, capturing their journeys through visuals that inform, inspire, and connect. ”
              </p>
              <div className="absolute bottom-2 right-4 w-10 h-10 opacity-10">
                <img src={cardDecorationBg} alt="" className="w-full h-full object-contain grayscale brightness-0" />
              </div>
            </motion.div>

            {/* Right Cluster - Clean Line */}
            <div className="col-span-3 flex flex-col items-center gap-8">
              <LogoItem client={rightCol[0]} h="h-14" />
              <LogoItem client={rightCol[2]} h="h-14" />
              <LogoItem client={{ name: "ImpactDash", logo: impactDashLogo }} h="h-14" />
            </div>
          </div>

          {/* Bottom Clusters - Distributed */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-center gap-10">
              <LogoItem client={bottomRow[0]} h="h-12" />
              <LogoItem client={bottomRow[3]} h="h-12" />
              <LogoItem client={bottomRow[4]} h="h-12" />
              <LogoItem client={bottomRow[5]} h="h-12" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-16">
              <LogoItem client={bottomRow[1]} h="h-18" />
              <LogoItem client={bottomRow[2]} h="h-18" />
              <LogoItem client={{ name: "Ministry of Agriculture", logo: modLogo }} h="h-18" />
            </div>
          </div>
        </div>

        {/* ============================================================
            MOBILE VIEW (flex md:hidden) - EXACT FIGMA MATCH
           ============================================================ */}
        <div className="flex md:hidden flex-col gap-6 px-1">

          {/* Top Grid: 3 rows, 3 cols */}
          <div className="grid grid-cols-3 gap-y-7 gap-x-3 items-center place-items-center">
            {/* Row 1 */}
            <LogoItem client={{ name: "CFTI", logo: cftiLogo }} h="h-8" />
            <LogoItem client={{ name: "Safety Research Foundation", logo: safetyResearchLogo }} h="h-9" />
            <LogoItem client={{ name: "GIZ", logo: gizLogo }} h="h-7" />

            {/* Row 2 */}
            <LogoItem client={{ name: "Yuva Mitra", logo: yuvaMitraLogo }} h="h-9" />
            <LogoItem client={{ name: "TATA Trusts", logo: tataTrustsLogo }} h="h-8" />
            <LogoItem client={{ name: "Ministry of Agriculture", logo: modLogo }} h="h-9" />

            {/* Row 3 */}
            <LogoItem client={{ name: "German Cooperation", logo: germanLogo }} h="h-8" />
            <LogoItem client={{ name: "Lokatmik Foundation", logo: lokatmikLogo }} h="h-14" />
            <LogoItem client={{ name: "Atal Bhujal Yojana", logo: atalBhujalLogo }} h="h-9" />
          </div>

          {/* Central Quote Card */}
          <motion.div className="bg-[#5EA4A4]/30 border-2 border-[#0A374C] rounded-2xl px-6 py-8 text-center relative shadow-sm my-2">
            <p className="text-[#0A374C] text-[12px] font-bold leading-relaxed italic">
              “ Behind every story is a partnership that matters. We've had the privilege of working with organizations that are shaping change, capturing their journeys through visuals that inform, inspire, and connect. ”
            </p>
            <div className="absolute -bottom-3 -right-2 w-10 h-10 opacity-80 pointer-events-none">
              <img src={cardDecorationBg} alt="" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Bottom Grid: 2 rows, 3 cols */}
          <div className="grid grid-cols-3 gap-y-7 gap-x-3 items-center place-items-center">
            {/* Row 4 */}
            <LogoItem client={{ name: "Mana Mahila Foundation", logo: manaMahilaLogo }} h="h-10" />
            <LogoItem client={{ name: "National Horticulture Board", logo: nhbLogo }} h="h-10" />
            <LogoItem client={{ name: "ImpactDash", logo: impactDashLogo }} h="h-6" />

            {/* Row 5 */}
            <LogoItem client={{ name: "Government of Maharashtra", logo: govMahaLogo }} h="h-11" />
            <LogoItem client={{ name: "Chandra Foundation", logo: chandraLogo }} h="h-10" />
            <LogoItem client={{ name: "Krushak Mitra", logo: krushakMitraLogo }} h="h-9" />
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => navigate("/clients")}
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
