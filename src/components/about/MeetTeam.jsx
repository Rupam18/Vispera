import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import team1 from "../../assets/images/our-team-1.jpg";
import team2 from "../../assets/images/our-team-2.jpg";
import team3 from "../../assets/images/our-team-3.jpg";
import team4 from "../../assets/images/our-team-4.jpg";
import team5 from "../../assets/images/our-team-5.jpg";

const teamData = [
  { 
    name: "Kishan Chandore", 
    role: "Creative Director", 
    img: team1,
    bio: "With over six years of experience in documentary filmmaking, photography, and journalism, Kishan Chandore is a dedicated professional passionate about visual storytelling. As a Digital Content Creator and Communication Specialist, his skills span content creation, social media management, and video production. Kishan has conceptualized and produced impactful short films, documentaries, and educational videos for various projects, adeptly conducting photo documentation to capture key moments and tell compelling visual stories. Additionally, he has collaborated with project managers and coordinators to create informative newsletters, case studies, and project completion reports.\n\nDriven by a passion for social development and sustainable initiatives, Kishan is eager to contribute his expertise in content creation, social media management, and project coordination to organizations committed to making a positive impact."
  },
  { 
    name: "Akshay Chandorkar", 
    role: "Managing Director", 
    img: team2,
    bio: "Akshay Chandorkar is one of the co-founders of The Vispera Studios and a multitalented individual with a variety of interests in the field of print media, web development, audio-visual production, color management, and editing. He holds an engineering degree in Printing Technology and Graphics Communication, and a Master's degree in Color Science from Rochester, New York.\n\nWith his expertise in these fields, he can provide a wide range of services, from writing and printing annual reports to designing websites. Akshay is also known for his quirky interests such as chess, astronomy, and theater, which he brings to his work, adding a unique perspective to his project. He is a great listener, and is always ready to bring the best ideas to the table for your next project. With his passion and expertise in print media, web development, and color science, Akshay is a valuable asset to The Vispera Studios team."
  },
  { 
    name: "Priyanka Kadam", 
    role: "Content Writer", 
    img: team4,
    bio: "Priyanka is the backbone of The Vispera Studios when it comes to content creation. Her exceptional skills in content writing, report writing, and everything in between have made her an invaluable asset to our team.\n\nPriyanka holds a Bachelor's degree from the College of Engineering, Pune, an MBA in Rural Management from Anand, and an impressive degree in Public Policy from Germany. Her diverse educational background and passion for continuous learning enables her to craft compelling narratives and insightful reports that resonate with our audience and clients alike."
  },
  { 
    name: "Noman Syed", 
    role: "Digital Marketing Expert", 
    img: team5,
    bio: "Meet Noman, our Digital Marketing Expert. A highly motivated and dedicated professional with over six years of combined experience in digital marketing and video production, Noman excels in PPC campaigns, social media management, content creation, Google Analytics, Google Ads, and Meta Ads.\n\nHe has a proven ability to drive traffic, generate leads, and manage cross-functional collaborations. Noman's expertise spans video production, direction, storytelling, digital marketing, and digital advertising. Proficient in the latest digital marketing trends and tools, he is committed to continuous learning and delivering quality content."
  },
  { 
    name: "Pandhari Kadam", 
    role: "Sr. Motion Graphic Artist", 
    img: team3,
    bio: "Meet Pandhari Kadam, a seasoned graphic designer with over 16 years of experience. He excels in creating visually compelling designs using various software and tools. Throughout his career, Pandhari has contributed to multiple organizations, enhancing their visual communication through print and digital media, branding, and advertising.\n\nAs a key member of The Vispera Studios, he brings his extensive industry knowledge and creative flair to every project, ensuring exceptional design quality."
  },
];

export default function MeetTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="pt-16 md:pt-20 pb-24 md:pb-32 relative overflow-hidden" style={{ backgroundColor: "#F7F5F2" }}>
      {/* Background Decoration Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#5EA4A4" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="relative w-fit mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0A374C] font-heading text-center"
          >
            Meet Our Team
          </motion.h2>
          <div className="absolute -right-10 -top-1 w-10 h-10 opacity-30">
                <svg viewBox="0 0 24 24" fill="none" stroke="#5EA4A4" strokeWidth="2">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          {teamData.slice(0, 3).map((member, i) => (
            <TeamCard 
              key={member.name} 
              member={member} 
              delay={i * 0.1} 
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>

        <div className="flex justify-center gap-8 flex-wrap max-w-4xl mx-auto">
          {teamData.slice(3).map((member, i) => (
            <div key={member.name} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-20px)]">
              <TeamCard 
                member={member} 
                delay={i * 0.1} 
                onClick={() => setSelectedMember(member)}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <TeamModal 
            member={selectedMember} 
            onClose={() => setSelectedMember(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function TeamCard({ member, delay = 0, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onClick={onClick}
      className="group relative cursor-pointer rounded-[15px] overflow-hidden bg-white transition-all duration-500 hover:shadow-xl"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-top"
        />
        
        {/* Transparent Teal Hover Screen Animation */}
        <motion.div 
          className="absolute inset-0 bg-[#0A374C]/70 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-[2px]"
        >
           <div className="w-10 h-10 text-white opacity-90">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
               <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
               <circle cx="12" cy="12" r="3" />
               <path d="M9 12h-2M15 12h2M12 9v-2M12 15v2" opacity="0.4" />
             </svg>
           </div>
        </motion.div>
      </div>

      <div className="bg-[#0A374C] py-3 px-4 text-center">
        <h4 className="text-white font-bold text-base font-heading">{member.name}</h4>
        <p className="text-white/70 text-xs mt-0.5">{member.role}</p>
      </div>
    </motion.div>
  );
}

function TeamModal({ member, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="relative bg-white w-full max-w-5xl rounded-[20px] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-gray-400 hover:text-[#0A374C] transition-all hover:rotate-90 duration-300"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Section: Identity Card */}
        <div className="w-full md:w-[35%] p-10 flex flex-col items-center justify-center text-center">
           <div className="w-48 h-48 xl:w-56 xl:h-56 rounded-[15px] overflow-hidden mb-6 shadow-md border border-gray-100">
             <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale" />
           </div>
           <h3 className="text-[#0A374C] font-bold text-2xl font-heading mb-1">{member.name}</h3>
           <p className="text-[#5EA4A4] font-bold text-base font-heading">{member.role}</p>
        </div>

        {/* Right Section: Deep Bio */}
        <div className="w-full md:w-[65%] p-12 md:pl-0 flex items-center">
           <div className="max-h-[450px] overflow-y-auto pr-8 custom-scrollbar space-y-6">
              {member.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#0A374C]/80 text-[13px] xl:text-[15px] leading-relaxed">
                  {para}
                </p>
              ))}
           </div>
        </div>
      </motion.div>
    </div>
  );
}
