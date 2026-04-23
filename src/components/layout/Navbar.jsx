import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/transparent-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/our-work" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm h-[88px] flex items-center">

      {/* Main navbar row */}
      <div className="w-full px-8 md:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Vispera Studios"
              className="w-auto h-[85px] object-contain"
            />
          </Link>

          {/* Desktop nav links — hidden on tablet, show on lg+ */}
          <div className="hidden lg:flex items-center gap-7 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors duration-200 text-[15px] ${
                  location.pathname === link.href
                    ? "text-[#5EA4A4]"
                    : "text-[#0A374C] hover:text-[#5EA4A4]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <Link
            to="/contact"
            className="hidden lg:inline-block text-white font-bold rounded-lg transition-all duration-300 hover:opacity-90 shadow-sm"
            style={{
              backgroundColor: "#0A374C",
              fontSize: "13px",
              padding: "14px 32px",
              letterSpacing: "0.05em"
            }}
          >
            Start Your Project
          </Link>

          {/* Mobile/Tablet toggle — visible below lg */}
          <button
            className="lg:hidden text-[#0A374C] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg px-6 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-[#1a1a1a] hover:text-[#2a9d8f] transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-block text-center text-white text-sm font-semibold px-6 py-3 rounded-lg mt-2"
                style={{ backgroundColor: "#1a3a3a" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
