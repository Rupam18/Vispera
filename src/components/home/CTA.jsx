import { motion } from "framer-motion";
import ctaBg from "../../assets/images/start-your-project-img.png";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Ready to tell your story?"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Camera Illustration Placeholder / Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
                <path d="M18 9h.01" />
              </svg>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#5EA4A4] rounded-full animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight drop-shadow-md">
            Ready to tell your story?
          </h2>
          
          <p className="text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Whether you have a fully formed brief or just the seed of an idea, 
            we'd love to hear from you.
          </p>

          <div className="pt-4">
            <button className="bg-[#5EA4A4] hover:bg-[#4D9090] text-white font-bold py-4 px-12 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-[#5EA4A4]/30 uppercase text-sm tracking-[0.2em]">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
