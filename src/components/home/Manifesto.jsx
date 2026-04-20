import { motion } from "framer-motion";
import illustrationImg from "../../assets/images/quote-img-2.png";
import personImg from "../../assets/images/quote-img-1.png";

export default function Manifesto() {
  return (
    <section className="py-12 bg-bg-light overflow-visible">
      <div className="w-full px-8 md:px-16 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative border-[5px] md:border-[8px] border-[#00403d] rounded-2xl md:rounded-3xl overflow-visible bg-[#e0f7f6] flex flex-col md:flex-row items-center justify-between shadow-lg"
        >
          {/* Left Illustration - Overlapping look */}
          <div className="md:w-1/4 relative flex justify-center items-center">
            <img 
              src={illustrationImg} 
              alt="Creative Illustration" 
              className="max-h-28 md:max-h-40 lg:max-h-52 object-contain -translate-y-4 md:-translate-y-8 lg:-translate-y-12 drop-shadow-lg"
            />
          </div>

          {/* Center Text */}
          <div className="md:w-2/4 px-6 py-6 md:py-8 text-center">
            <h2 className="text-[#0A374C] font-bold text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed tracking-wider uppercase my-0 drop-shadow-sm font-heading">
              "We design experiences, not just websites. We craft stories, not just videos. We build brands that move people."
            </h2>
          </div>

          {/* Right Person Image - Overlapping look */}
          <div className="md:w-1/4 relative flex justify-end items-end h-full">
            <img 
              src={personImg} 
              alt="Photographer" 
              className="max-h-48 md:max-h-64 lg:max-h-80 object-contain -translate-y-4 md:-translate-y-10 lg:-translate-y-16 pointer-events-none drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
