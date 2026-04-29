import { motion } from "framer-motion";
import { StartProjectButton } from "../common";
import ctaBg from "../../assets/images/start-your-project-img.png";
import ctaBgTablet from "../../assets/images/cta.png";
import cameraIllustration from "../../assets/images/about-us-camera.png";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-1 md:py-1">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Ready to tell your story? Desktop"
          className="w-full h-full object-cover hidden lg:block"
        />
        <img
          src={ctaBgTablet}
          alt="Ready to tell your story? Tablet"
          className="w-full h-full object-cover hidden md:block lg:hidden"
        />
        <img
          src={ctaBg}
          alt="Ready to tell your story? Mobile"
          className="w-full h-full object-cover block md:hidden"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-12 md:py-16">
          {/* Left Column (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[480px] space-y-6"
            >
              <div className="relative inline-block">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-12 left-0 pointer-events-none z-0"
                >
                  <img 
                    src={cameraIllustration} 
                    alt="" 
                    className="w-12 md:w-16 h-auto object-contain brightness-0 invert opacity-60" 
                  />
                </motion.div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight relative z-10 drop-shadow-lg lg:whitespace-nowrap">
                  Ready to tell your story?
                </h2>
              </div>
              
              <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed drop-shadow-md">
                Whether you have a fully formed brief or just the seed of an idea, 
                we'd love to hear from you.
              </p>

              <div className="pt-4">
                <StartProjectButton />
              </div>
            </motion.div>
          </div>

          {/* Right Column (50% - Empty) */}
          <div className="hidden lg:block lg:w-1/2" />
        </div>
      </div>
    </section>
  );
}
