import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import ncpedpImg from "../../assets/images/NCPEDP-Javed-Abidi-Fellowship-on-Disability.png";
import krushakImg from "../../assets/images/Krushak-Mitra-Agro-Services-Pvt-Ltd.png";
import gizImg from "../../assets/images/GIZ-Green-Innovation-Centres-Agriculture-Food-Sector.png";
import jalImg from "../../assets/images/Jal-Srot-Punarjivikaran.png";
import everyDropImg from "../../assets/images/Every-Drop-Counts!.png";
import greenInnovImg from "../../assets/images/Green-Innovation-Centres-for-the-Agriculture-and-Food-Sector.png";
import shamImg from "../../assets/images/Sham-Sundar-Misal-Nashik.png";
import khedImg from "../../assets/images/Kheds1-Path-to-Hygiene-MHM-and-WASH-Progress.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const categories = ["All", "Documentaries", "Corporate Films", "Brand Films", "Short Content"];

const projects = [
  { 
    id: 1, 
    title: "NCPEDP Javed Abidi Fellowship on Disability", 
    category: "Documentaries", 
    image: ncpedpImg, 
    badge: "Documentary",
    client: "NCPEDP- National Centre For Promotion Of Employment For Disabled People",
    location: "6 States",
    overview: "The Film \"Redefining Disability And Inclusion: NCPEDP-Javed Abidi Fellowship\" Captures The Impactful Stories Of Young Leaders With Disabilities Who Are Shaping India's Future. Supported By The National Centre For Promotion Of Employment For Disabled People (NCPEDP), These Fellows Challenge Accessibility Barriers, Promote Inclusive Education, And Empower Marginalized Communities. Through Personal Journeys And Advocacy, They Influence Infrastructure And Design Standards, Address Digital Accessibility, And Combat Stigma. This Film Highlights NCPEDP's Mission To Create A New Generation Of Changemakers, Ensuring That Disability Rights Become A Lived Reality Across India.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 2, 
    title: "Krushak Mitra Agro Services Pvt. Ltd.", 
    category: "Corporate Films", 
    image: krushakImg, 
    badge: "Corporate Film",
    client: "Krushak Mitra Agro Services Pvt. Ltd.",
    location: "Nashik District And Surrounding Regions",
    overview: "This Corporate Film Showcases The Transformative Work Of Krushak Mitra Agro Services Pvt. Ltd. In Strengthening Farming Communities Across Maharashtra. It Highlights Their Farmer-First Approach Through Timely Agri-Inputs, Expert Advisory, FPC Formation, And Market Linkages. Through Real Farmer Stories And On-Ground Interventions, The Film Captures How Krushak Mitra Is Turning Farmers Into Entrepreneurs, Enhancing Rural Livelihoods, And Promoting Sustainable Agricultural Practices.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 3, 
    title: "GIZ's Green Innovation Centres for the Agriculture and Food Sector", 
    category: "Documentaries", 
    image: gizImg, 
    badge: "Documentary",
    client: "GIZ India",
    location: "Maharashtra And Andhra Pradesh",
    overview: "This Film Presents A Powerful Overview Of GIZ's Renewable Energy Initiatives Implemented Across Maharashtra And Andhra Pradesh, Showcasing The Tangible Impact Of Sustainable Technologies In Rural And Semi-Urban Landscapes. Through Real Life Stories, Field Visuals, And Expert Insights, The Film Captures How GIZ-Supported Solutions—Ranging From Solar Dryer Machines To Biogas Systems And Decentralized Energy Models—Are Transforming Lives, Improving Livelihoods, And Fostering Environmental Resilience. By Highlighting The Success Stories Of Local Communities, Institutions, And Entrepreneurs, The Film Not Only Documents The Scale And Innovation Of The Interventions But Also Reinforces The Potential Of Renewable Energy As A Catalyst For Inclusive Development And Climate Action In India.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 4, 
    title: "जलस्रोतों का पुनर्जीवीकरण - एक परिचय", 
    category: "Brand Films", 
    image: jalImg, 
    badge: "Informative Film",
    client: "Unknown",
    location: "Unknown",
    overview: "This informative film provides a powerful introduction to the revitalization of water sources.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 5, 
    title: "Every Drop Counts!", 
    category: "Documentaries", 
    image: everyDropImg, 
    badge: "Documentary",
    client: "Concern India Foundation",
    location: "Aurangabad Block",
    overview: "This Documentary, Titled \"Every Drop Counts,\" Showcases The Transformative Impact Of The Integrated Watershed Development Project Implemented By The Concern India Foundation. Spanning Across The Remote Villages Of Babhultel, Naygavhan, And Mahankalwadgaon, The Film Highlights The Community-Driven Efforts To Combat Water Scarcity, Enhance Agricultural Productivity, And Improve Livelihoods Through Sustainable Practices. Key Interventions Included The Desilting Of Percolation Tanks, Construction Of Recharge Shafts, And Provision Of Modern Irrigation Systems, Resulting In Significant Improvements In Water Storage Capacity And Agricultural Output. The Documentary Captures The Journey From Despair To Hope, Illustrating The Power Of Unity And Innovative Solutions In Creating Lasting Change.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 6, 
    title: "Green Innovation Centres for the Agriculture and Food Sector", 
    category: "Brand Films", 
    image: greenInnovImg, 
    badge: "Filmmaking",
    client: "GIZ India",
    year: "2024",
    overview: "Documented Renewable Energy Innovations In Maharashtra And Andhra Pradesh For The GIZ Project. Produced 150+ High-Quality Photographs, 6 Testimonies, 6 Interview Videos, And A 3-Minute Process Video. Ensured Consent From All Subjects And Provided Edited Media With Detailed Metadata",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 7, 
    title: "Sham Sundar Misal, Nashik", 
    category: "Corporate Films", 
    image: shamImg, 
    badge: "Corporate Film",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 8, 
    title: "Aloma Home Care", 
    category: "Documentaries", 
    image: khedImg, 
    badge: "Documentary",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="work" className="bg-bg-light overflow-hidden py-8 md:py-10">
        <div className="w-full px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 px-4 md:px-8">
            <div className="space-y-4">
              <p className="text-[#5EA4A4] font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase">OUR WORK</p>
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0A374C] font-heading leading-tight italic relative z-10">
                  Stories We've Told
                </h2>
                <div className="absolute -top-1 -right-8 w-12 h-12 opacity-80 z-0">
                   <img src={headingBg} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
            
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${activeCategory === cat
                    ? "bg-[#0A374C] text-white shadow-lg"
                    : "bg-white text-gray-400 border border-gray-100 hover:border-[#5EA4A4] hover:text-[#5EA4A4]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] bg-gray-100 shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Sliding Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A374C]/90 via-[#0A374C]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center p-6 text-center">
                  
                  {/* Category Top Badge (Rectangle) */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#5EA4A4] text-[#0A374C] px-6 py-1.5 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg">
                    {project.badge}
                  </div>

                  <div className="space-y-4 px-2 mt-8">
                    <h3 className="text-white text-sm md:text-base lg:text-lg font-bold leading-tight">
                      {project.title}
                    </h3>
                    
                    <button className="bg-[#5EA4A4] hover:bg-[#4D9090] text-[#0A374C] text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-2.5 rounded-lg transition-colors shadow-xl mx-auto block">
                      View
                    </button>
                  </div>
                </div>

                {/* Default Bottom Bar (Fades out on hover) */}
                <div className="absolute inset-x-0 bottom-0 bg-[#0A374C]/70 backdrop-blur-md py-4 px-6 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-white text-[11px] md:text-xs font-bold leading-tight uppercase tracking-wider text-center">
                    {project.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-16">
            <button className="bg-[#5EA4A4] hover:bg-[#5EA4A4] text-white font-bold py-4 px-14 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#5EA4A4]/20 uppercase text-[11px] tracking-[0.2em]">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Modal / Card */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-[#0A374C] rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch z-10"
              style={{ border: "2px dashed rgba(255, 255, 255, 0.4)" }} 
            >
              {/* Close Button */}
              <button 
                className="absolute -top-4 -right-4 md:-right-10 md:-top-10 text-white hover:text-gray-300 z-50 p-2"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Left Side: Image with Ribbon & Hand-drawn border */}
              <div className="relative w-full md:w-[45%] flex-shrink-0 flex flex-col justify-center">
                <div className="relative w-full aspect-video md:aspect-[4/3] p-1">
                  
                  {/* The Ribbon Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#5EA4A4] text-[#0A374C] text-[11px] sm:text-xs px-6 py-2 rounded-b-xl shadow-lg relative font-bold min-w-[120px] text-center">
                      <span className="relative z-10">{selectedProject.badge}</span>
                      {/* Left fold */}
                      <div className="absolute top-0 -left-[10px] w-0 h-0 border-t-[8px] border-r-[10px] border-t-transparent border-r-[transparent] border-b-[8px] border-b-[#0A374C] transform scale-y-[-1]"></div>
                      <div className="absolute top-[8px] -left-[10px] w-0 h-0 border-t-[8px] border-r-[10px] border-t-[#0A374C] border-r-[#0A374C] border-b-transparent border-l-transparent"></div>
                      
                      {/* Right fold */}
                      <div className="absolute top-0 -right-[10px] w-0 h-0 border-t-[8px] border-l-[10px] border-t-transparent border-l-[transparent] border-b-[8px] border-b-[#0A374C] transform scale-y-[-1]"></div>
                      <div className="absolute top-[8px] -right-[10px] w-0 h-0 border-t-[8px] border-l-[10px] border-t-[#0A374C] border-l-[#0A374C] border-b-transparent border-r-transparent"></div>
                    </div>
                  </div>

                  {/* Main Image with Wavy/Drawn Border */}
                  <div className="w-full h-full rounded-xl overflow-hidden border-4 border-[#5EA4A4]"
                       style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                  >
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col w-full md:w-[55%] py-2 justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-heading leading-tight mb-5 drop-shadow-md">
                  {selectedProject.title}
                </h3>
                
                <ul className="text-white/90 text-[13px] md:text-sm leading-[1.8] space-y-4 font-body">
                  {selectedProject.client && (
                    <li className="flex items-start">
                      <span className="mr-3 mt-[7px] w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></span>
                      <div><strong className="font-semibold text-white">Client :</strong> {selectedProject.client}</div>
                    </li>
                  )}
                  {selectedProject.location && (
                    <li className="flex items-start">
                      <span className="mr-3 mt-[7px] w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></span>
                      <div><strong className="font-semibold text-white">Location:</strong> {selectedProject.location}</div>
                    </li>
                  )}
                  {selectedProject.year && (
                    <li className="flex items-start">
                      <span className="mr-3 mt-[7px] w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></span>
                      <div><strong className="font-semibold text-white">Year:</strong> {selectedProject.year}</div>
                    </li>
                  )}
                  {selectedProject.overview && (
                    <li className="flex items-start">
                      <span className="mr-3 mt-[7px] w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></span>
                      <div>
                        <strong className="font-semibold text-white">Project Overview:</strong> {selectedProject.overview}
                      </div>
                    </li>
                  )}
                </ul>

                {selectedProject.link && (
                  <div className="mt-8">
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#5EA4A4] hover:bg-[#5EA4A4] text-[#0A374C] font-bold py-2.5 px-6 rounded-md transition-all shadow-md text-[13px] tracking-wide"
                    >
                      Watch Video
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
