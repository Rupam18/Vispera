import { motion } from "framer-motion";
import ctaBg from "../../assets/images/start-your-project-img.png";
import cameraIllustration from "../../assets/images/about-us-camera.png";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Ready to tell your story?"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="w-full relative z-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          {/* Camera Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0 pt-2"
          >
            <img 
              src={cameraIllustration} 
              alt="" 
              className="w-24 md:w-32 h-auto object-contain brightness-0 invert opacity-90" 
            />
          </motion.div>

          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 md:space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight drop-shadow-lg">
              Ready to tell your story?
            </h2>
            
            <p className="text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
              Whether you have a fully formed brief or just the seed of an idea, 
              we'd love to hear from you.
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              <button className="bg-[#5EA4A4] hover:bg-[#4D9090] text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-[#5EA4A4]/30 uppercase text-xs tracking-[0.2em] min-w-[240px]">
                Start Your Project
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
