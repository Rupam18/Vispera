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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 sm:pt-32 md:md:pt-44 lg:pt-52 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="space-y-5">
            <div className="inline-block">
              <img src={logo} alt="Vispera Studios" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-white/90 text-[15px] font-medium leading-[22px] max-w-xs">
              We craft meaningful visual stories that inspire, connect, and
              create impact. From NGOs to purpose-driven brands, we bring
              stories to life through creativity and authenticity.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/vispera-studios" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#5EA4A4] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-5 lg:pt-2">
            <h3 className="text-[16px] font-semibold text-white leading-[28px]">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span className="text-white/50 text-xs">•</span>
                  <Link
                    to={link.href}
                    className="text-white/85 hover:text-[#0A374C] transition-colors duration-300 text-[15px] font-medium leading-[22px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact Info */}
          <div className="space-y-5 lg:pt-2">
            <h3 className="text-[16px] font-semibold text-white leading-[28px]">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/85 text-[15px] font-medium leading-[22px]"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/85 text-[15px] font-medium leading-[22px]"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <address className="text-white/85 text-[15px] font-medium not-italic leading-[22px]">
                  {contactInfo.address}
                </address>
              </li>
            </ul>
          </div>

          {/* Col 4 — CTA + QR */}
          <div className="space-y-4 lg:pt-2 flex flex-col items-start">
            <h3 className="text-[16px] font-semibold text-white leading-[28px]">Have a story to tell?</h3>
            <p className="text-white/85 text-[15px] font-medium leading-[22px]">
              Let's create something meaningful together.
            </p>
            <div className="pt-2">
              <StartProjectButton 
                variant="dark"
                className="!rounded-lg"
                style={{ padding: "10px 20px" }}
              />
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-4 pt-8 flex flex-col md:flex-row items-end justify-between gap-6 text-[15px] font-medium text-white/80 leading-[20px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          <div className="w-full md:w-1/3 text-left">
            <p>© {currentYear} Vispera Studios. All rights reserved.</p>
          </div>

          <div className="w-full md:w-1/3 flex justify-center gap-x-8">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/sitemap">Sitemap</a>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-end gap-3">
            <img
              src={footerScanner}
              alt="QR Code"
              className="w-20 h-20 object-cover rounded-lg shrink-0 mr-35"
            />
            <p className="text-white">
              Scan to save our contact details
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
