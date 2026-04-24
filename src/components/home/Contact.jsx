import { motion } from "framer-motion";
import contactImg from "../../assets/images/contactus.png";
import backgroundImg from "../../assets/images/2.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-12" style={{ backgroundColor: "#F5F3EF" }}>
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Tablet / Mobile Centered Header */}
        <div className="lg:hidden text-center mb-4 max-w-2xl mx-auto">
          <p className="text-[#5EA4A4] text-xs font-semibold tracking-widest uppercase mb-2">
            Always Here to Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A374C] font-heading leading-tight mb-4">
            Let's Tell Your Story
          </h2>
          <p className="text-[#555] text-sm md:text-base leading-relaxed">
            We're here to understand your vision and help you bring meaningful stories to life.
            Reach out to collaborate or start your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">

          {/* ── COL 1: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full order-2 lg:order-1"
          >
            {/* Desktop Only Header */}
            <div className="hidden lg:block">
              <p className="text-[#5EA4A4] text-xs font-semibold tracking-widest uppercase mb-1">
                Always Here to Connect
              </p>
              <div className="relative inline-block mb-3">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0A374C] font-heading leading-tight">
                  Let's Tell Your Story
                </h2>
              </div>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                We're here to understand your vision and help you bring meaningful stories to life.
                Reach out to collaborate or start your project.
              </p>
            </div>

            {/* Info card (Quick Contact) */}
            <div
              className="rounded-xl p-5 md:p-6 space-y-5 flex-1 lg:flex-none mt-5 lg:mt-auto"
              style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
            >
              {/* Phone */}
              <div>
                <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Quick Contact</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5EA4A4] text-xs font-semibold uppercase tracking-wide">Main Office</p>
                    <p className="text-[#1a1a1a] text-sm font-semibold">+91 9767346346</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Email</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5EA4A4] text-xs font-semibold uppercase tracking-wide">Mail to</p>
                    <p className="text-[#1a1a1a] text-sm font-semibold">contact@visperastudios.in</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Address</p>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5EA4A4] text-xs font-semibold uppercase tracking-wide">Our Office</p>
                    <p className="text-[#1a1a1a] text-sm font-semibold leading-relaxed">
                      Art Construction Ro.Ho. 08, Veer Savarkar Nagar, Sinnar, Maharashtra, 422103
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── COL 2: Image ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center items-center h-full order-1 lg:order-2 -mt-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-none transform transition-transform duration-700 hover:scale-[1.02]">
              <img
                src={contactImg}
                alt="Contact Vispera Studios"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* ── COL 3: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-2 lg:col-span-1 mt-6 md:mt-0 order-3 lg:order-3"
          >
            <div className="text-center lg:text-left mb-0 lg:mb-8">
              <p className="text-[#5EA4A4] text-xs font-semibold tracking-widest uppercase mb-1 hidden lg:block">
                Start a Conversation
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A374C] font-heading mb-3 italic hidden lg:block">
                Let's Work Together
              </h2>
              <p className="text-[#555] text-sm leading-relaxed max-w-sm mx-auto lg:mx-0 hidden lg:block">
                Tell us about your project, idea, or story - we'd love to collaborate with you
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-xl overflow-hidden max-w-xl mx-auto lg:max-w-none shadow-sm"
              style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
            >
              {[
                { icon: "user", placeholder: "Your Name*" },
                { icon: "mail", placeholder: "Email Address*" },
                { icon: "phone", placeholder: "Mobile Number*" },
                { icon: "file", placeholder: "Subject*" },
              ].map(({ icon, placeholder }, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
                  <FieldIcon type={icon} />
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none bg-transparent"
                  />
                </div>
              ))}

              <div className="flex items-start gap-3 px-4 py-3.5 border-b border-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" className="w-4 h-4 mt-0.5 shrink-0">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                <textarea
                  rows={3}
                  placeholder="Your Message..."
                  className="w-full text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none bg-transparent resize-none"
                />
              </div>

              <div className="p-4">
                <button
                  type="submit"
                  className="w-full bg-[#5EA4A4] hover:bg-[#4a8282] text-white font-bold tracking-wide uppercase text-[13px] py-3.5 rounded-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FieldIcon({ type }) {
  const cls = "w-4 h-4 shrink-0";
  const s = "#9ca3af";
  if (type === "user") return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
  if (type === "mail") return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
  if (type === "phone") return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  );
}
