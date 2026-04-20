import { motion } from "framer-motion";
import visionImg from "../../assets/images/our-vision.png";
import missionImg from "../../assets/images/our-mission.png";

export default function VisionMission() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <img src={visionImg} alt="Our Vision" className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0A374C] mb-3">
              OUR VISION
            </h3>
            <p className="text-[#555] text-sm leading-relaxed max-w-sm">
              Our Vision Is To Empower Brands, Startups, Businesses, And Social
              Organizations By Bringing Their Stories To Life Through Creativity,
              Authenticity, And Innovation.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <img src={missionImg} alt="Our Mission" className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0A374C] mb-3">
              OUR MISSION
            </h3>
            <p className="text-[#555] text-sm leading-relaxed max-w-sm">
              Our Mission Is To Use Our Expertise In Storytelling, Videography,
              Photography, Digital Design, And Content Marketing To Help Brands
              And Organizations Craft Authentic Narratives That Inspire And Engage.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
