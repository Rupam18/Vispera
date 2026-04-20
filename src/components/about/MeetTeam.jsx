import { motion } from "framer-motion";
import team1 from "../../assets/images/our-team-1.jpg";
import team2 from "../../assets/images/our-team-2.jpg";
import team3 from "../../assets/images/our-team-3.jpg";
import team4 from "../../assets/images/our-team-4.jpg";
import team5 from "../../assets/images/our-team-5.jpg";

const team = [
  { name: "Kishan Chandore", role: "Creative Director", img: team1 },
  { name: "Akshay Chandorkar", role: "Managing Director", img: team2 },
  { name: "Priyanka Kadam", role: "Content Writer", img: team3 },
  { name: "Noman Syed", role: "Digital Marketing Expert", img: team4 },
  { name: "Pandhari Kadam", role: "Sr. Motion Graphic Artist", img: team5 },
];

export default function MeetTeam() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0A374C] text-center mb-12 font-heading"
        >
          Meet Our Team
        </motion.h2>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {team.slice(0, 3).map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 0.1} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="flex justify-center gap-6 flex-wrap">
          {team.slice(3).map((member, i) => (
            <div key={member.name} className="w-full md:w-[calc(33.333%-12px)]">
              <TeamCard member={member} delay={i * 0.1} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ member, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: "#F7F5F2" }}
    >
      <div className="relative">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-64 object-cover object-top grayscale"
        />
      </div>
      <div
        className="px-5 py-4 text-center"
        style={{ backgroundColor: "#0A374C" }}
      >
        <p className="text-white font-semibold text-base">{member.name}</p>
        <p className="text-white/70 text-sm mt-0.5">{member.role}</p>
      </div>
    </motion.div>
  );
}
