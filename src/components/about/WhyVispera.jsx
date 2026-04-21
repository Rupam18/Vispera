import { motion } from "framer-motion";
import storiesImg from "../../assets/images/Stories-That-Create-Impact-why-vispera.png";
import builtImg from "../../assets/images/Built-for-Purpose-Driven-Brands-why vispera.png";
import img1 from "../../assets/images/why-vispera-img1.png";
import img2 from "../../assets/images/why-vispera-img2.png";

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
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start">

          {/* Card 1: Stories That Create Impact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] p-8 flex flex-col justify-center border border-[#0A374C]/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-[350px] lg:mt-24 relative overflow-hidden"
            style={{ backgroundColor: "#d4eeea" }}
          >
             {/* Blob Decor */}
             <div className="absolute top-10 right-0 w-32 h-32 bg-[#5EA4A4]/10 rounded-full blur-2xl" />
             <div className="relative z-10 space-y-4">
                <h3 className="text-[#0A374C] font-bold text-2xl xl:text-3xl font-heading leading-tight italic">
                  Stories That <br/> Create Impact
                </h3>
                <p className="text-[#0A374C]/60 text-sm xl:text-base leading-relaxed">
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
            className="rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.05)] h-[480px] lg:mt-0"
          >
             <div className="bg-white flex-1 p-8 xl:p-10 flex flex-col justify-center">
                <h3 className="text-[#0A374C] font-bold text-xl xl:text-3xl font-heading leading-tight mb-4">
                  Creative Meets <br/> Strategy
                </h3>
                <p className="text-[#0A374C]/60 text-[13px] xl:text-[15px] leading-relaxed">
                  We blend storytelling, design, and digital thinking to craft narratives that truly resonate.
                </p>
             </div>
             <div className="bg-[#5EA4A4] p-8 xl:p-10 flex flex-col justify-center relative overflow-hidden group h-[200px]">
                <div className="absolute top-6 left-6 w-12 h-12 opacity-30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                </div>
                <p className="text-white font-bold text-2xl xl:text-3xl font-heading mt-6 leading-tight">
                  Your Story, <br/> Brought to Life
                </p>
             </div>
          </motion.div>

          {/* Card 3: Stories That Inspire Change */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[3rem] overflow-hidden relative shadow-[0_25px_50px_rgba(0,0,0,0.15)] group h-[520px] lg:mt-12"
          >
            <img src={img1} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <h3 className="text-white text-2xl xl:text-3xl font-bold font-heading mb-0 text-center lg:text-left">
                Stories That <br/> Inspire Change
              </h3>
            </div>
          </motion.div>

          {/* Card 4: Connection Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-[3rem] overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.1)] group h-[420px] lg:mt-6"
          >
            <img src={img2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8 h-[160px] flex items-center justify-center text-center">
              <p className="text-white text-sm xl:text-base leading-relaxed font-medium italic">
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
            className="rounded-[2.8rem] p-10 flex flex-col items-center justify-center relative overflow-hidden text-center shadow-[0_15px_40px_rgba(0,0,0,0.1)] h-[360px] lg:mt-20"
            style={{ backgroundColor: "#0A374C" }}
          >
            {/* Dot Pattern Wrapper */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="grid grid-cols-12 gap-3 opacity-10">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
               </div>
            </div>
            
            <h3 className="text-white font-bold text-2xl xl:text-3xl font-heading leading-tight px-2 relative z-10 italic">
              Built for <br/> Purpose-Driven <br/> Brands
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
