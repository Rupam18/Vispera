import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { StartProjectButton } from "../common";
import logo from "../../assets/images/transparent-logo.png";
import desktopFooter from "../../assets/images/footer-img.png";
import tabFooter from "../../assets/images/Tablet/footer.png";
import mobileFooter from "../../assets/images/Mobile/footer-mobile.png";
import footerScanner from "../../assets/images/qr.png";

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
    <footer className="relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

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

      {/* Background image layer - Responsive */}
      <div
        className="sm:hidden absolute inset-0"
        style={{
          backgroundImage: `url(${mobileFooter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="hidden sm:block lg:hidden absolute inset-0"
        style={{
          backgroundImage: `url(${tabFooter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url(${desktopFooter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />



      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 sm:pt-20 md:pt-28 lg:pt-40 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="space-y-5">
            <div className="inline-block">
              <img src={logo} alt="Vispera Studios" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-white/90 text-sm leading-relaxed max-w-xs">
              We craft meaningful visual stories that inspire, connect, and
              create impact. From NGOs to purpose-driven brands, we bring
              stories to life through creativity and authenticity.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-5 lg:pt-2 sm:flex sm:flex-col sm:items-center lg:items-start">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5 sm:text-center lg:text-left">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2 sm:justify-center lg:justify-start">
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
          <div className="space-y-4 lg:pt-2 flex flex-col items-start sm:items-center lg:items-center justify-start sm:justify-center lg:justify-center">
            <h3 className="text-base font-bold text-white">Have a story to tell?</h3>
            <p className="text-white/85 text-sm leading-relaxed text-left sm:text-center lg:text-center">
              Let's create something meaningful together.
            </p>
            <StartProjectButton 
              variant="dark"
              className="!rounded-lg"
              style={{ padding: "10px 20px" }}
            />
            <div className="flex flex-col sm:items-center lg:items-center items-start gap-3 pt-2">
              <img
                src={footerScanner}
                alt="QR Code"
                className="w-20 h-20 object-cover rounded-lg shrink-0"
              />
              <p className="text-white text-xs leading-relaxed sm:text-center lg:text-center text-left">
                Scan to save our<br />contact details
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[15px] font-semibold text-white/80"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          <p>© {currentYear} Vispera Studios. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
