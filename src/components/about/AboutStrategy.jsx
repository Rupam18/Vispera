import { motion } from "framer-motion";
import aboutImg from "../../assets/images/about-us-2nd section.png";

export default function AboutStrategy() {
  return (
    <section className="py-3 md:py-5" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div
          className="relative rounded-[2rem] lg:rounded-[4rem] p-1 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border-[1.5px] border-[#0A374C]/20"
          style={{ backgroundColor: "#eef6f5" }}
        >
          {/* Inner Border Look */}
          <div className="absolute inset-2 border-[1px] border-[#0A374C]/10 rounded-[1.8rem] lg:rounded-[3.8rem] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[220px]">
            {/* Left narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 p-6 md:p-8 lg:pl-16 text-center lg:text-left"
            >
              <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-[#0A374C] mb-3 italic font-heading lg:whitespace-nowrap">
                "Creative Strategy For The Digital Age"
              </h3>
              <p className="text-[#0A374C]/70 text-[10px] md:text-xs xl:text-sm leading-relaxed max-w-md">
                In Today's Fast-Moving World, Brands Don't Just Need Presence –
                They Need Connection. From Cinematic Video Production And
                Website Development To Social Media Management And Branding,
                Vispera Studios Delivers Strategic Creative Solutions That Inspire
                Engagement And Drive Growth.
              </p>
            </motion.div>

            {/* Center image — Hidden on Tab/Mobile per Figma */}
            <div className="hidden lg:col-span-2 lg:flex justify-center relative h-full">
               <div className="absolute bottom-3 left-1/2 -translate-x-25 flex items-end translate-y-70">
                 <img
                  src={aboutImg}
                  alt="Photographer Sketch"
                  className="h-80 object-contain scale-250 origin-bottom"
                />
               </div>
            </div>

            {/* Right narrative */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 p-6 md:p-8 lg:pr-16 text-center lg:text-left"
            >
              <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-[#0A374C] mb-3 italic font-heading lg:whitespace-nowrap">
                "Built On Passion, Powered By Excellence"
              </h3>
              <p className="text-[#0A374C]/70 text-[10px] md:text-xs xl:text-sm leading-relaxed max-w-md">
                With Years Of Experience And A Relentless Focus On Detail, We
                Bring Clarity, Creativity, And Impact To Every Project. At Vispera
                Studios, Every Story We Tell, Every Brand We Build, And Every
                Idea We Shape Is Fueled By Purpose – And Designed To Leave A
                Lasting Impression.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
