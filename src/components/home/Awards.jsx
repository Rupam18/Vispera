import { motion } from "framer-motion";
import rewardFrame from "../../assets/images/frame-reward.png";
import rewardBg from "../../assets/images/reward.png";
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
    <section id="awards" className="bg-bg-light overflow-hidden py-8 md:py-12">
      {/* Header - Outside the dark box on light background */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mb-6 md:mb-10">
        <div className="flex flex-col items-center">
          <p className="text-[#5EA4A4] font-bold tracking-[0.3em] text-[10px] md:text-sm uppercase mb-2">AWARDS</p>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A374C] font-heading leading-tight relative z-10 text-center">
              Recognized for Our Work
            </h2>
            <div className="absolute -top-2 -right-10 w-12 h-12 opacity-80 z-0">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* The Awards Container - Dark Blue Rectangle with Background Image */}
      <div 
        className="w-full bg-[#0A374C] py-10 md:py-14 relative group"
        style={{ 
          backgroundImage: `url(${rewardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Subtle Background Decorations */}
        <div className="absolute top-6 right-10 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 left-10 opacity-10 pointer-events-none">
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Award Illustration/Frame */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1"
            >
              <div className="relative w-full max-w-[500px] transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={rewardFrame}
                  alt="Vispera Awards"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right: Trophy Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-y-16 sm:gap-y-0 gap-x-4 md:gap-6 items-stretch order-1 lg:order-2 mt-10 sm:mt-0">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-[#518b8b] pt-12 sm:pt-10 pb-8 sm:pb-4 px-6 sm:px-3 md:px-2 rounded-2xl sm:rounded-[8px] border border-white/10 shadow-xl flex flex-col items-center justify-center text-center group hover:bg-[#5EA4A4] transition-all min-h-[140px] w-full max-w-[300px] sm:max-w-none mx-auto"
                >
                  {/* Overlapping Badge */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-14 sm:h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-[5px] sm:border-4 border-[#0A374C] group-hover:scale-110 transition-transform z-10 p-[6px] sm:p-2">
                    <img src={award.icon} alt="Award Badge" className="w-full h-full object-contain" />
                  </div>

                  <p className="text-white text-[13px] md:text-[13px] font-medium leading-relaxed tracking-wide uppercase px-2 font-inter">
                    {award.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
