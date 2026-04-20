import { motion } from "framer-motion";
import leftImg from "../../assets/images/Group-39917.png";
import rightImg from "../../assets/images/Group-39731.png";

export default function AboutIntro() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">

          {/* Left — Group-39917 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[32%] shrink-0"
          >
            <img
              src={leftImg}
              alt="Creative workspace"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Center text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[42%] shrink-0 px-0 lg:px-10 text-center"
          >
            <h2
              className="font-heading font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#0A374C" }}
            >
              " We believe every story{" "}
              <span style={{ color: "#5EA4A4" }}>deserves to be told "</span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: "#1a1a1a" }}>
              <strong>Welcome To Vispera Studios Private Limited</strong>, Where Ideas
              Transform Into Powerful Stories.
            </p>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
              We Are A Passionate Team Of Storytellers, Filmmakers,
              Designers, And Digital Experts, Helping Startups, Businesses,
              And Organizations Craft Their Digital Identity Through Stunning
              Visuals And Authentic Narratives.
            </p>

            <a
              href="#"
              className="inline-block text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#5EA4A4" }}
            >
              Learn More
            </a>
          </motion.div>

          {/* Right — Group-39731 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[26%] shrink-0 flex justify-center lg:justify-end"
          >
            <img
              src={rightImg}
              alt="Portfolio"
              className="w-48 md:w-56 lg:w-full h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
