import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ncpedpImg from "../../assets/images/NCPEDP-Javed-Abidi-Fellowship-on-Disability.png";
import gizImg from "../../assets/images/GIZ-India-doc-img1.png";
import everyDropImg from "../../assets/images/service-img-9.png";
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
          <p className="text-[#5EA4A4] font-bold tracking-[0.50em] text-[10px] md:text-xs uppercase mb-1">FEATURED IMPACT</p>
          <div className="relative inline-block">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0A374C] font-heading leading-tight relative z-10">Stories That Matter</h3>
            <div className="absolute top-0 -right-[10px] md:top-[6px] md:-right-[14px] w-[30px] h-[30px] opacity-100 z-0 pointer-events-none">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Full-Bleed Carousel Container - Stable Compact Height */}
        <div
          className="relative overflow-hidden min-h-[450px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {/* Background image overlay removed per user request */}

          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative z-10"
            >
              <div className="max-w-[1440px] mx-auto px-12 md:px-20 lg:px-28 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

                {/* Image Area - Card Style */}
                <div className="lg:col-span-6 relative">
                  {/* Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-36 md:w-44 lg:w-48 pointer-events-none">
                    <img src={tagImg} alt="" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-[8px] md:text-[10px] font-bold tracking-[0.2em] pb-1.5 md:pb-2">
                        {story.tag}
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl border-[3px] border-[#5EA4A4] group h-full">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <a
                      href="#"
                      className="absolute inset-0 bg-black/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-20 cursor-pointer"
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-[#5EA4A4] rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 scale-90 group-hover:scale-100">
                        <svg className="w-7 h-7 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Text Content - Aligned to match image height */}
                <div className="lg:col-span-6 text-white flex flex-col justify-between py-1">
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-xl lg:text-[1.5rem] font-bold leading-none font-heading whitespace-nowrap overflow-hidden text-ellipsis">{story.title}</h3>

                    <div className="space-y-2.5">
                      <p className="flex items-start gap-2">
                        <span className="font-bold whitespace-nowrap text-white text-base md:text-lg tracking-wide">• Client :</span>
                        <span className="text-white/90 text-sm md:text-base leading-relaxed">{story.client}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="font-bold whitespace-nowrap text-white text-base md:text-lg tracking-wide">• Location:</span>
                        <span className="text-white/90 text-sm md:text-base leading-relaxed">{story.location}</span>
                      </p>
                      <div className="pt-1">
                        <p className="text-white/90 text-sm md:text-[15px] leading-relaxed font-light">
                          <span className="font-bold text-white mr-2">• Project Overview:</span>
                          {story.overview}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-0 flex justify-center lg:justify-start pb-12 md:pb-0">
                    <button className="bg-[#5EA4A4] hover:bg-[#4D9090] text-white font-bold py-3 px-12 rounded-xl transition-all shadow-xl text-xs tracking-[0.2em] transform active:scale-95">
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Clustered Bottom Center for Mobile, Edges for Tablet/Desktop */}
          <button
            onClick={prev}
            className="absolute bottom-6 md:bottom-auto left-1/2 md:left-6 -translate-x-[calc(100%+8px)] md:-translate-x-0 md:top-1/2 md:-translate-y-1/2 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all z-20 backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute bottom-6 md:bottom-auto left-1/2 md:left-auto md:right-6 translate-x-[8px] md:translate-x-0 md:top-1/2 md:-translate-y-1/2 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all z-20 backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}


