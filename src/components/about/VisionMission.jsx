import { motion } from "framer-motion";
import visionImg from "../../assets/images/our-vision.png";
import missionImg from "../../assets/images/our-mission.png";

export default function VisionMission() {
  return (
    <section className="pt-0 pb-0" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-0">
              {/* Branding Blob Background */}
              <div className="absolute inset-0 bg-[#e0f1f1] rounded-full filter blur-2xl opacity-60 scale-150 -z-10 group-hover:scale-175 transition-transform duration-700" />
              <div className="relative z-10 w-48 h-48 md:w-56 md:h-56">
                <img src={visionImg} alt="Our Vision" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <div className="relative inline-block mb-3">
              <h3 className="text-xl md:text-23 font-bold uppercase tracking-[0.3em] text-[#0A374C] font-heading">
                OUR VISION
              </h3>
              <div className="absolute -right-10 -top-1 w-8 h-8 opacity-40">
                <svg viewBox="0 0 24 24" fill="none" stroke="#5EA4A4" strokeWidth="2">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
            </div>
            
            <p className="text-[#0A374C]/70 text-sm md:text-base leading-relaxed max-w-sm font-medium">
              Our Vision Is To Empower Brands, Startups, Businesses, And Social
              Organizations By Bringing Their Stories To Life Through Creativity,
              Authenticity, And Innovation.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-0">
              {/* Branding Blob Background */}
              <div className="absolute inset-0 bg-[#e0f1f1] rounded-full filter blur-2xl opacity-60 scale-150 -z-10 group-hover:scale-175 transition-transform duration-700" />
              <div className="relative z-10 w-48 h-48 md:w-56 md:h-56">
                <img src={missionImg} alt="Our Mission" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="relative inline-block mb-3">
              <h3 className="text-xl md:text-23 font-bold uppercase tracking-[0.3em] text-[#0A374C] font-heading">
                OUR MISSION
              </h3>
              <div className="absolute -right-10 -top-1 w-8 h-8 opacity-40">
                <svg viewBox="0 0 24 24" fill="none" stroke="#5EA4A4" strokeWidth="2">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
            </div>

            <p className="text-[#0A374C]/70 text-sm md:text-base leading-relaxed max-w-sm font-medium">
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
