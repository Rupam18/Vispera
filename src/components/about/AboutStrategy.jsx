import { motion } from "framer-motion";
import aboutImg from "../../assets/images/about-us-2nd section.png";

export default function AboutStrategy() {
  return (
    <section className="py-16" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-2xl overflow-hidden border border-gray-200"
          style={{ backgroundColor: "#eef6f5" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-14"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#0A374C] mb-4 italic">
                "Creative Strategy For The Digital Age"
              </h3>
              <p className="text-[#555] text-sm leading-relaxed text-center">
                In Today's Fast-Moving World, Brands Don't Just Need Presence –
                They Need Connection. From Cinematic Video Production And
                Website Development To Social Media Management And Branding,
                Vispera Studios Delivers Strategic Creative Solutions That Inspire
                Engagement And Drive Growth.
              </p>
            </motion.div>

            {/* Center image — overlapping */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-0 items-end justify-center z-10 pointer-events-none">
              <img
                src={aboutImg}
                alt="Photographer"
                className="h-64 object-contain"
              />
            </div>

            {/* Right card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 border-t lg:border-t-0 lg:border-l border-gray-200"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#0A374C] mb-4 italic">
                "Built On Passion, Powered By Excellence"
              </h3>
              <p className="text-[#555] text-sm leading-relaxed text-center">
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
