import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/transparent-logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Vispera Studios" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-6 lg:gap-8 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[13px] lg:text-[14px] font-semibold tracking-wide transition-colors ${
                    location.pathname === link.href ? "text-[#5EA4A4]" : "text-[#0A374C] hover:text-[#5EA4A4]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link 
              to="/contact" 
              className="bg-[#0A374C] text-white text-[13px] lg:text-[14px] font-bold px-8 py-3 rounded-xl transition-all hover:bg-[#0A374C] hover:shadow-lg active:scale-95"
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#0A374C] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden border-t border-gray-50"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-base font-semibold transition-colors py-2 border-b border-gray-50 ${
                    location.pathname === link.href ? "text-[#5EA4A4]" : "text-[#0A374C]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-[#0A374C] text-white text-center font-bold py-4 rounded-xl mt-2" 
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
