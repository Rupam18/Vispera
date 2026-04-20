import { motion } from "framer-motion";
import storiesImg from "../../assets/images/Stories-That-Create-Impact-why-vispera.png";
import builtImg from "../../assets/images/Built-for-Purpose-Driven-Brands-why vispera.png";
import img1 from "../../assets/images/why-vispera-img1.png";
import img2 from "../../assets/images/why-vispera-img2.png";

const cards = [
  {
    type: "text-teal",
    title: "Stories That Create Impact",
    body: "We turn ideas into meaningful visual stories that connect, inspire, and drive real change.",
  },
  {
    type: "text-white",
    title: "Creative Meets Strategy",
    body: "We blend storytelling, design, and digital thinking to craft narratives that truly resonate.",
    sub: "Your Story, Brought to Life",
  },
  {
    type: "image",
    img: img1,
    caption: "Stories That Inspire Change",
    overlay: "Every story we tell begins with people, emotions, and genuine connection",
  },
  {
    type: "image",
    img: img2,
    caption: "",
  },
  {
    type: "text-dark",
    title: "Built for Purpose-Driven Brands",
    body: "",
  },
];

export default function WhyVispera() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0A374C] text-center mb-12 font-heading"
        >
          Why Vispera Studios?
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-stretch">

          {/* Card 1 — teal bg text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{ backgroundColor: "#d4eeea", minHeight: "280px" }}
          >
            <h3 className="text-[#0A374C] font-bold text-base leading-snug mb-3">
              Stories That Create Impact
            </h3>
            <p className="text-[#444] text-xs leading-relaxed">
              We turn ideas into meaningful visual stories that connect, inspire, and drive real change.
            </p>
          </motion.div>

          {/* Card 2 — white bg with sub-card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ backgroundColor: "#fff", minHeight: "280px" }}
          >
            <div>
              <h3 className="text-[#0A374C] font-bold text-base leading-snug mb-2">
                Creative Meets Strategy
              </h3>
              <p className="text-[#555] text-xs leading-relaxed">
                We blend storytelling, design, and digital thinking to craft narratives that truly resonate.
              </p>
            </div>
            <div
              className="rounded-xl p-4 mt-auto"
              style={{ backgroundColor: "#5EA4A4" }}
            >
              <p className="text-white font-bold text-sm">Your Story, Brought to Life</p>
            </div>
          </motion.div>

          {/* Card 3 — image with overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ minHeight: "280px" }}
          >
            <img src={img1} alt="Stories" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-xs font-semibold leading-snug">
                Stories That Inspire Change
              </p>
              <p className="text-white/80 text-[10px] mt-1 leading-snug">
                Every story we tell begins with people, emotions, and genuine connection
              </p>
            </div>
          </motion.div>

          {/* Card 4 — image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ minHeight: "280px" }}
          >
            <img src={img2} alt="Why Vispera" className="w-full h-full object-cover absolute inset-0" />
          </motion.div>

          {/* Card 5 — dark teal text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-6 flex items-center justify-center"
            style={{ backgroundColor: "#0A374C", minHeight: "280px" }}
          >
            <h3 className="text-white font-bold text-base text-center leading-snug">
              Built for Purpose-Driven Brands
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
