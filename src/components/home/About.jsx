import { motion } from "framer-motion";
import leftImg from "../../assets/images/Group-39917.png";
import rightImg from "../../assets/images/Group-39731.png";

export default function About() {
  return (
    <section id="about" className="bg-bg-light overflow-hidden relative">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="flex flex-col lg:flex-row items-center relative z-10 py-8 md:py-10">

        {/* ── Left image (Circular Mask Illustration) ── */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[30%] flex-shrink-0 mb-8 lg:mb-0"
        >
          <div className="relative -ml-4 md:-ml-8 lg:-ml-12">
            <img
              src={leftImg}
              alt="Creative workspace visualization"
              className="w-full max-h-[350px] object-contain"
            />
          </div>
        </motion.div>

        {/* ── Right Content Area ── */}
        <div className="container-custom lg:ml-0 lg:flex-grow flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* ── Center text (Content Section) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[60%] flex-shrink-0"
          >
            <div className="max-w-lg lg:max-w-xl">
              {/* Quote */}
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#0A374C]">
                <span className="text-gray-400 text-6xl block mb-1">“</span>
                We believe every story
                <br />
                <span className="text-[#5EA4A4]">deserves to be told</span>
              </p>

              {/* Subheading */}
              <p className="mt-5 font-bold text-[#0A374C] text-sm md:text-base leading-relaxed tracking-wide uppercase font-heading">
                Welcome To Vispera Studios Private Limited,
                <span className="block font-normal text-gray-500 normal-case mt-1">
                  Where Ideas Transform Into Powerful Stories.
                </span>
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed text-[13px] md:text-sm font-light">
                We are a passionate team of storytellers, filmmakers, designers, and digital experts,
                helping startups, businesses, and organizations craft their digital identity through
                stunning visuals and authentic narratives.
              </p>

              {/* Button */}
              <button className="mt-6 px-8 py-3 bg-[#5EA4A4] text-white rounded-lg shadow-lg hover:bg-[#4D9090] transition-all transform hover:scale-105 active:scale-95">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* ── Right image (Polaroid Group) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[35%] flex-shrink-0 flex justify-center lg:justify-end"
          >
            <img
              src={rightImg}
              alt="Portfolio polaroid cards"
              className="w-40 md:w-52 lg:w-[85%] max-h-[300px] object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
