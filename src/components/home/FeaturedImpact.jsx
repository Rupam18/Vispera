import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ncpedpImg from "../../assets/images/NCPEDP-Javed-Abidi-Fellowship-on-Disability.png";
import gizImg from "../../assets/images/GIZ-India-doc-img1.png";
import everyDropImg from "../../assets/images/Every-Drop-Counts!.png";
import shapingImg from "../../assets/images/Shaping-Futures-The-WASH-Projects-Impact-in-Khed-Block.png";
import bgImg from "../../assets/images/Group-39875.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";
import tagImg from "../../assets/images/tag.png";

const stories = [
  {
    id: 1,
    tag: "Documentary",
    title: "NCPEDP Javed Abidi Fellowship on Disability",
    client: "NCPEDP- National Centre For Promotion Of Employment For Disabled People",
    location: "6 States",
    overview:
      'The Film "Redefining Disability And Inclusion: NCPEDP-Javed Abidi Fellowship" Captures The Impactful Stories Of Young Leaders With Disabilities Who Are Shaping India\'s Future. Supported By The National Centre For Promotion Of Employment For Disabled People (NCPEDP), These Fellows Challenge Accessibility Barriers, Promote Inclusive Education, And Empower Marginalized Communities. Through Personal Journeys And Advocacy, They Influence Infrastructure And Design Standards, Address Digital Accessibility, And Combat Stigma. This Film Highlights NCPEDP\'s Mission To Create A New Generation Of Changemakers, Ensuring That Disability Rights Become A Lived Reality Across India.',
    image: ncpedpImg,
  },
  {
    id: 2,
    tag: "Documentary",
    title: "Shaping Futures: The WASH Project's Impact in Khed Block",
    client: "Yuva Mitra",
    location: "Khed, Pune Block",
    overview:
      ' "Shaping Futures: The WASH Project\'s Impact In Khed Block" Is A Documentary Film That Showcases The Transformative Effects Of The Water, Sanitation, And Hygiene (WASH) Project Implemented By Yuva Mitra In Collaboration With Tata Trusts And Tata AutoComp Systems. Set In Khed Block, Pune, The Film Highlights The Significant Improvements In School Sanitation Facilities And Menstrual Hygiene Management, Depicting How These Changes Have Enhanced Health, Education, And Overall Quality Of Life In The Community. Through Interviews, Project Implementation Footage, Educational Sessions, And Personal Testimonials, The Film Illustrates The Project\'s Success In Reducing Absenteeism, Empowering Students, And Fostering Sustainable Community Development.',
    image: shapingImg,
  },
  {
    id: 3,
    tag: "Documentary",
    title: "Every Drop Counts!",
    client: "Concern India Foundation",
    location: "Aurangabad Block",
    overview:
      'This Documentary, Titled "Every Drop Counts," Showcases The Transformative Impact Of The Integrated Watershed Development Project Implemented By The Concern India Foundation. Spanning Across The Remote Villages Of Babhultel, Naygavhan, And Mahankalwadgaon, The Film Highlights The Community-Driven Efforts To Combat Water Scarcity, Enhance Agricultural Productivity, And Improve Livelihoods Through Sustainable Practices. Key Interventions Included The Desilting Of Percolation Tanks, Construction Of Recharge Shafts, And Provision Of Modern Irrigation Systems, Resulting In Significant Improvements In Water Storage Capacity And Agricultural Output. The Documentary Captures The Journey From Despair To Hope, Illustrating The Power Of Unity And Innovative Solutions In Creating Lasting Change.',
    image: everyDropImg,
  },
];

export default function FeaturedImpact() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + stories.length) % stories.length);
  const next = () => setCurrent((c) => (c + 1) % stories.length);

  const story = stories[current];

  return (
    <section className="pt-0 pb-6 md:pb-12 bg-bg-light overflow-hidden">
      <div className="w-full relative">
        {/* Header - Padded for readability */}
        <div className="text-center mb-8 px-6 relative w-fit mx-auto">
          <p className="text-[#5EA4A4] font-bold tracking-[0.25em] text-[10px] md:text-xs uppercase mb-1">FEATURED IMPACT</p>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A374C] font-heading leading-tight relative z-10">Stories That Matter</h2>
            <div className="absolute -top-5 -right-14 w-24 h-18 opacity-90 z-0">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Full-Bleed Carousel Container */}
        <div
          className="relative overflow-hidden min-h-[500px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {/* Subtle Dark Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#0A374C]/60 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative z-10"
            >
              <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Image Area - Card Style */}
                <div className="lg:col-span-6 relative pt-4 md:pt-6">
                  {/* Badge (tag.png) - Centered and Overlapping the top edge */}
                  <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-40 md:w-52 lg:w-56 pointer-events-none">
                    <img src={tagImg} alt="" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] pb-1 md:pb-2">
                        {story.tag}
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/5 group">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full aspect-[4/5] md:aspect-[1.25/1] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay - Video Play Option */}
                    <a
                      href="#"
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-20 cursor-pointer"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#5EA4A4] text-white rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 scale-90 group-hover:scale-100 group-hover:rotate-[360deg]">
                        <svg className="w-8 h-8 md:w-10 md:h-10 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="mt-4 overflow-hidden">
                        <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          Play Story
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Text Content - Tightened spacing */}
                <div className="lg:col-span-6 text-white space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{story.title}</h3>

                  <div className="space-y-2.5">
                    <p className="flex items-start gap-2">
                      <span className="font-bold whitespace-nowrap text-[#5EA4A4] tracking-widest text-xs md:text-sm">• Client :</span>
                      <span className="text-white/90 text-sm md:text-base">{story.client}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-bold whitespace-nowrap text-[#5EA4A4] tracking-widest text-xs md:text-sm">• Location:</span>
                      <span className="text-white/90 text-sm md:text-base">{story.location}</span>
                    </p>
                    <div className="flex items-start gap-2 pt-1">
                      <span className="font-bold whitespace-nowrap text-[#5EA4A4] tracking-widest text-xs md:text-sm">• Project Overview:</span>
                    </div>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed pl-4 font-light">
                      {story.overview}
                    </p>
                  </div>

                  <button className="bg-[#5EA4A4] hover:bg-[#5EA4A4] text-white font-bold py-3 px-10 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#5EA4A4]/20 uppercase text-[10px] md:text-xs tracking-[0.2em] mt-2">
                    Watch Video
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Extreme Outer Nav Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#5EA4A4]/20 hover:bg-[#5EA4A4]/40 rounded-full flex items-center justify-center text-white transition-all z-20 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#5EA4A4]/20 hover:bg-[#5EA4A4]/40 rounded-full flex items-center justify-center text-white transition-all z-20 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}


