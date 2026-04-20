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
    image: testimonial2,
  },
  {
    id: 2,
    quote:
      "Vispera Studios brought our vision to life with incredible precision and creativity. Their team understood our mission deeply and translated it into a visual story that resonated with our audience across all platforms.",
    name: "Priya Sharma",
    role: "Communications Head, GIZ India",
    image: testimonial1,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 min-h-[460px]">
          
          {/* Section 1: Identity Anchor (Starts from Left Wall) */}
          <div className="lg:w-[30%] bg-[#0d393d] p-10 lg:pl-16 flex flex-col justify-center rounded-r-[3rem] lg:rounded-l-none shadow-xl relative overflow-hidden">
             {/* Pattern */}
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <div className="grid grid-cols-4 gap-2">
                   {Array.from({ length: 16 }).map((_, i) => (
                     <div key={i} className="w-1 h-1 bg-white rounded-full" />
                   ))}
                </div>
             </div>

             <div className="space-y-6 relative z-10">
                <p className="text-[#5EA4A4] font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase">TESTIMONIALS</p>
                <div className="relative inline-block w-fit">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight italic relative z-10">What Our Clients Say</h2>
                  <div className="absolute -top-4 -right-12 w-20 h-20 opacity-60 z-0 brightness-200">
                    <img src={headingBg} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute -right-8 top-0 opacity-30">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5EA4A4" strokeWidth="1.2">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                </div>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-[280px]">
                  We Work Closely With Organizations To Craft Authentic Visual Stories That Connect, Inspire, And Create Meaningful Impact.
                </p>
             </div>
          </div>

          {/* Section 2: Fused Interactive Block (Ends at Right Wall) */}
          <div className="lg:flex-1 flex flex-col md:flex-row bg-[#7ac5c1] rounded-l-[3rem] lg:rounded-r-none overflow-hidden shadow-2xl relative">
            
            {/* Part A: Portrait Anchor (Light Teal) */}
            <div className="md:w-[45%] bg-[#7ac5c1] relative flex items-center justify-center p-12">
              {/* Vertically Stacked Nav Buttons (Figma Style) */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                 <button onClick={next} className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#0d393d] hover:bg-white transition-all shadow-lg group">
                    <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
                 </button>
                 <button onClick={prev} className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#0d393d] hover:bg-white transition-all shadow-lg group">
                    <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
                 </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-full aspect-[4/5] max-w-[280px]"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white/30"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Part B: Narrative Space (Clean Grained White) */}
            <div className="md:flex-1 bg-[#fcfcfc] p-10 md:p-14 lg:pr-24 flex flex-col justify-center relative" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}>
               {/* Pattern */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <div className="grid grid-cols-5 gap-3">
                   {Array.from({ length: 20 }).map((_, i) => (
                     <div key={i} className="w-1.5 h-1.5 bg-[#0d393d] rounded-full" />
                   ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 relative z-10"
                >
                  <p className="text-[#0d393d] text-base md:text-lg lg:text-xl font-medium leading-relaxed tracking-tight">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-[#0d393d]/5 rounded-2xl flex items-center justify-center border border-[#0d393d]/10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0d393d">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0d393d]">{t.name}</h4>
                      <p className="text-[#5EA4A4] text-sm font-semibold tracking-wide uppercase">{t.role}</p>
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
