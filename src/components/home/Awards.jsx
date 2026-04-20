import { motion } from "framer-motion";
import awardImg from "../../assets/images/Screenshot-2026-03-28-162900.png";
import badge1 from "../../assets/images/award-badge1.png";
import badge2 from "../../assets/images/award-badge2.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const awards = [
  {
    id: 1,
    icon: badge1,
    title: "1st Prize In Atal Bhujal Best Informative Films",
  },
  {
    id: 2,
    icon: badge2,
    title: "Award For State Government's Best Covid-19 Awareness Video",
  },
  {
    id: 3,
    icon: badge2,
    title: "Employee Of The Year – Content Creation Award, Yuva Mitra",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="relative py-12 bg-[#0a363d] overflow-hidden">
      {/* Background Pattern - Dotted */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
          ))}
        </div>
      </div>

      <div className="w-full px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 relative w-fit mx-auto">
          <p className="text-[#5EA4A4] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-1">AWARDS</p>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight relative z-10">Recognized for Our Work</h2>
            <div className="absolute -top-6 -right-12 w-20 h-20 opacity-60 z-0 brightness-200">
               <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Film Strip */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-black p-4 md:p-6 rounded-[1rem] shadow-2xl relative"
          >
            {/* Horizontal Film Strip Perforations */}
            <div className="absolute inset-y-0 left-4 md:left-6 flex flex-col justify-between py-8 md:py-12 z-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-4 h-6 md:w-6 md:h-8 bg-[#0a363d] rounded-sm border border-gray-800" />
              ))}
            </div>
            
            <div className="ml-10 md:ml-16 mr-10 md:mr-16">
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-gray-800 shadow-inner">
                <img 
                  src={awardImg} 
                  alt="Award Ceremony Group" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute inset-y-0 right-4 md:right-6 flex flex-col justify-between py-8 md:py-12 z-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-4 h-6 md:w-6 md:h-8 bg-[#0a363d] rounded-sm border border-gray-800" />
              ))}
            </div>
          </motion.div>

          {/* Right: Trophy Cards */}
          <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-row gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-[#5EA4A4]/80 backdrop-blur-sm pt-8 pb-6 px-4 rounded-2xl md:rounded-3xl border border-white/10 shadow-xl flex-1 flex flex-col items-center justify-center text-center group hover:bg-[#5EA4A4] transition-all min-h-[180px]"
              >
                {/* Overlapping Badge */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-[#0a363d] group-hover:scale-110 transition-transform z-10 p-2">
                  <img src={award.icon} alt="Award Badge" className="w-full h-full object-contain" />
                </div>

                <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">
                  {award.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
