import { motion } from "framer-motion";
import storiesImg from "../../assets/images/Stories-That-Create-Impact-why-vispera.png";
import builtImg from "../../assets/images/Built-for-Purpose-Driven-Brands-why vispera.png";
import img1 from "../../assets/images/3rd.png";
import img2 from "../../assets/images/4th.png";
import img5 from "../../assets/images/5th.png";
import roundRectBg from "../../assets/images/Roundedrectangle.png";
import whyVisperaImg from "../../assets/images/whyvispera.png";

export default function WhyVispera() {
  return (
    <section className="pt-12 md:pt-16 pb-0" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-[1500px] mx-auto px-6">

        {/* Header */}
        <div className="relative w-fit mx-auto mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0A374C] font-heading text-center"
          >
            Why Vispera Studios?
          </motion.h2>
          <div className="absolute -right-10 -top-1 w-10 h-10 opacity-40">
            <svg viewBox="0 0 24 24" fill="none" stroke="#5EA4A4" strokeWidth="2">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>

        <div className="flex flex-row flex-nowrap xl:flex-wrap overflow-x-auto xl:overflow-visible justify-start xl:justify-center items-center xl:items-start gap-6 xl:gap-6 mt-10 pb-12 pt-4 -mx-6 px-6 xl:mx-0 xl:px-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

          {/* Card 1: Stories That Create Impact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[237px] h-[234px] p-6 flex flex-col justify-center relative shrink-0 snap-center xl:mt-[80px] rounded-[32px] border-[1px] border-[#5EA4A4]/30 overflow-hidden shadow-sm"
          >
            {/* Absolute Backing Image to bypass CSS background bounding shrink mapping */}
            <img src={roundRectBg} alt="" className="absolute inset-0 w-full h-full object-fill z-0 scale-[1.05]" />
            <div className="relative z-10 flex flex-col justify-center h-full">
              <h3 className="text-[#0A374C] font-heading font-bold text-[22px] leading-[30px] mb-2">
                Stories That <br /> Create Impact
              </h3>
              <p className="text-[#5EA4A4] font-body font-medium text-[14px] leading-[22px]">
                We turn ideas into meaningful visual stories that connect, inspire, and drive real change.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Creative Meets Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-[274px] h-[370px] rounded-[32px] bg-white shadow-md flex flex-col relative shrink-0 snap-center xl:mt-0"
          >
            {/* Top White Section */}
            <div className="p-6 h-[179px] px-8 flex flex-col justify-center text-center">
              <h3 className="text-[#0A374C] font-body font-bold text-[20px] leading-[28px] mb-2 mt-4">
                Creative Meets <br /> Strategy.
              </h3>
              <p className="text-[#5EA4A4] font-body font-medium text-[14px] leading-relaxed">
                We blend storytelling, design, and digital thinking to craft narratives that truly resonate.
              </p>
            </div>

            {/* Bottom Teal Section perfectly overlapping */}
            <div className="bg-[#5EA4A4] w-[274px] h-[191px] rounded-[32px] p-6 flex flex-col justify-end pb-8 relative overflow-hidden group">
              <img src={whyVisperaImg} alt="" className="absolute -left-2 top-0 w-[140px] h-[140px] object-contain opacity-90 mixing-blend-screen" />
              <h4 className="text-white font-heading font-semibold text-[24px] leading-[28px] w-[130px] ml-auto relative z-10 text-right pr-1">
                Your Story, Brought to Life
              </h4>
            </div>
          </motion.div>

          {/* Card 3: Stories That Inspire Change */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-[252px] h-[370px] rounded-[32px] overflow-hidden relative shadow-md group shrink-0 snap-center xl:mt-0"
          >
            <img src={img1} alt="Stories That Inspire Change" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A374C]/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
              <h3 className="text-white font-body font-bold text-[22px] leading-[28px] text-center">
                Stories That <br /> Inspire Change
              </h3>
            </div>
          </motion.div>

          {/* Card 4: Connection Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-[226px] h-[260px] rounded-[32px] overflow-hidden relative shadow-md group shrink-0 snap-center xl:mt-[40px]"
          >
            <img src={img2} alt="Genuine connection" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 text-center">
              <p className="text-white text-[14px] leading-[22px] font-medium italic drop-shadow-md">
                Every story we tell begins with people, emotions, and genuine connection
              </p>
            </div>
          </motion.div>

          {/* Card 5: Built for Purpose-Driven Brands */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-[240px] h-[245px] rounded-[32px] p-8 flex flex-col items-center justify-center relative overflow-hidden text-center shadow-md shrink-0 snap-center xl:mt-[48px]"
          >
            <img src={img5} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
            <h3 className="text-white font-bold text-[24px] font-heading leading-[36px] px-2 relative z-10">
              Built for <br /> Purpose-Driven <br /> Brands
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
