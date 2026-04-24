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
        <div className="flex flex-col items-center relative">
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
            AWARDS
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
              Recognized for Our Work
            </h2>
            <div className="absolute top-0 -right-5 w-7 h-7 opacity-80 z-0 pointer-events-none">
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


        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Left: Award Illustration/Frame */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="relative w-full max-w-[626px] aspect-[626/352] transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={rewardFrame}
                  alt="Vispera Awards"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right: Trophy Cards */}
            <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 items-center lg:mt-[48px]">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-[#5EA4A4] border border-white/10 shadow-xl flex flex-col items-center justify-center text-center group hover:brightness-105 transition-all shrink-0"
                  style={{
                    width: "203px",
                    height: "198px",
                    borderRadius: "12px"
                  }}
                >
                  {/* Overlapping Badge */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-14 sm:h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-[5px] sm:border-4 border-[#0A374C] group-hover:scale-110 transition-transform z-10 p-[6px] sm:p-2">
                    <img src={award.icon} alt="Award Badge" className="w-full h-full object-contain" />
                  </div>

                  <p 
                    className="text-white text-center"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: award.id === 2 ? "28px" : "24px",
                      textTransform: "capitalize",
                      padding: "0 1rem"
                    }}
                  >
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
