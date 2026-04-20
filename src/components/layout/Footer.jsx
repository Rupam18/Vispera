import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/images/Logo.png";
import footerBg from "../../assets/images/footer-img.png";
import qrImg from "../../assets/images/Screenshot-2026-03-28-162900.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
];

const contactInfo = {
  email: "contact@visperastudios.in",
  phone: "+91 9767346346",
  address: "Art Construction Ro.Ho. 08, Veer Savarkar Nagar, Sinnar, Maharashtra, 422103",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">

      {/* Wave shape SVG — sits on top of the section below */}
      <div style={{ backgroundColor: "#F7F5F2", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "60px", display: "block" }}
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="#0A374C"
          />
        </svg>
      </div>

      {/* Background image layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Secondary color overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10,55,76,0.92)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Vispera Studios" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-white/90 text-sm leading-relaxed max-w-xs">
              We craft meaningful visual stories that inspire, connect, and
              create impact. From NGOs to purpose-driven brands, we bring
              stories to life through creativity and authenticity.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-5 lg:pt-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span className="text-white/50 text-xs">•</span>
                  <Link
                    to={link.href}
                    className="text-white/85 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact Info */}
          <div className="space-y-5 lg:pt-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/85 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/85 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <address className="text-white/85 text-sm not-italic leading-relaxed">
                  {contactInfo.address}
                </address>
              </li>
            </ul>
          </div>

          {/* Col 4 — CTA + QR */}
          <div className="space-y-4 lg:pt-2">
            <h3 className="text-base font-bold text-white">Have a story to tell?</h3>
            <p className="text-white/85 text-sm leading-relaxed">
              Let's create something meaningful together.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#0A374C] hover:bg-[#0A374C] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300"
            >
              Start Your Project
            </Link>
            <div className="flex items-start gap-3 pt-1">
              <img
                src={qrImg}
                alt="QR Code"
                className="w-16 h-16 object-cover rounded-lg shrink-0"
              />
              <p className="text-white/60 text-xs leading-relaxed mt-1">
                Scan to save our<br />contact details
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <p>© {currentYear} Vispera Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
