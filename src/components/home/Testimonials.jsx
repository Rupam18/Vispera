import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const testimonials = [
  {
    id: 1,
    quote:
      "We work closely with organizations to craft authentic visual stories that connect, inspire, and create meaningful impact. Their ability to capture real stories from the ground is exceptional. The final output was not just a film, but a powerful narrative that moved people.",
    name: "Rohit Deshmukh",
    role: "Program Director, TATA Trusts",
    image: testimonial1,
  },
  {
    id: 2,
    quote:
      "Vispera Studios brought our vision to life with incredible precision and creativity. Their team understood our mission deeply and translated it into a visual story that resonated with our audience across all platforms.",
    name: "Priya Sharma",
    role: "Communications Head, GIZ India",
    image: testimonial2,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="pt-0 pb-10 bg-white overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 min-h-[280px]">
          
          {/* Section 1: Identity Anchor (Starts from Left Wall) */}
          <div className="lg:w-[28%] bg-[#0d393d] p-6 lg:pl-14 flex flex-col justify-center rounded-r-[3rem] lg:rounded-l-none shadow-xl relative overflow-hidden">
             {/* Pattern */}
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <div className="grid grid-cols-4 gap-2">
                   {Array.from({ length: 16 }).map((_, i) => (
                     <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                   ))}
                </div>
             </div>

             <div className="space-y-3 relative z-10">
                <p className="text-[#5EA4A4] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">TESTIMONIALS</p>
                <div className="relative inline-block w-fit">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight italic relative z-10">What Our Clients Say</h2>
                  <div className="absolute -top-4 -right-12 w-20 h-20 opacity-60 z-0 brightness-200">
                    <img src={headingBg} alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-white/60 text-[10px] md:text-xs leading-relaxed max-w-[280px]">
                  We Work Closely With Organizations To Craft Authentic Visual Stories That Connect, Inspire, And Create Meaningful Impact.
                </p>
             </div>
          </div>

          {/* Section 2: Fused Interactive Block (Ends at Right Wall) */}
          <div className="lg:flex-1 flex flex-col md:flex-row bg-[#7ac5c1] rounded-l-[2rem] md:rounded-l-[4rem] lg:rounded-r-none relative shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            
            {/* Part A: Portrait Anchor (Light Teal) - Slimmed Width */}
            <div className="md:w-[28%] bg-[#7ac5c1] rounded-l-[2rem] md:rounded-l-[4rem] relative flex items-center justify-center p-4 md:p-6">
              {/* Vertically Stacked Nav Buttons (Figma Style) */}
              <div className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
                 <button onClick={prev} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#0d393d] hover:bg-white transition-all shadow-xl group">
                    <ChevronLeft size={16} className="group-hover:scale-110 transition-transform" />
                 </button>
                 <button onClick={next} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#0d393d] hover:bg-white transition-all shadow-xl group">
                    <ChevronRight size={16} className="group-hover:scale-110 transition-transform" />
                 </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.92, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 60 }}
                  exit={{ opacity: 0, scale: 0.92, x: 100 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-30 w-full aspect-[4/5] max-w-[300px] lg:translate-x-8"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-[6px] border-white/20"
                  />
                  <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-[#0d393d] rounded-full flex items-center justify-center text-[#5EA4A4] shadow-xl">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Part B: Narrative Space (Clean Grained White) */}
            <div className="md:flex-1 bg-[#fcfcfc] p-8 md:p-12 lg:pl-28 lg:pr-16 flex flex-col justify-center relative rounded-r-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}>
               {/* Pattern */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <div className="grid grid-cols-5 gap-3">
                   {Array.from({ length: 20 }).map((_, i) => (
                     <div key={i} className="w-1.5 h-1.5 bg-[#0d393d] rounded-full" />
                   ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-8 relative z-10"
                >
                  <p className="text-[#0d393d] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-tight italic">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-6 pt-4">
                    <div className="w-[2px] h-12 bg-[#5EA4A4] rounded-full" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-[#0d393d] tracking-tight">{t.name}</h4>
                      <p className="text-[#5EA4A4] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mt-1">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
