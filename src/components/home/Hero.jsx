import heroImg from "../../assets/images/hero-section-banner.png";
import heroTabletImg from "../../assets/images/Tablet/herosectionbanner.png";
// Explicitly importing mobile banner as requested
import heroMobileImg from "../../assets/images/Mobile/herosectionbanner.png";

export default function Hero() {
  return (
    <section className="bg-bg-light pt-[104px] lg:pt-[72px] pb-12 relative">

      {/* Hero image container */}
      <div className="px-8 md:px-16 mt-2 relative group">
        <div className="relative rounded-2xl w-full">
          <div className="relative rounded-2xl overflow-hidden w-full group">
            {/* Desktop Image */}
            <img
              src={heroImg}
              alt="Vispera Studios"
              className="w-full h-auto hidden lg:block"
            />
            {/* Tablet Image */}
            <img
              src={heroTabletImg}
              alt="Vispera Studios"
              className="w-full h-auto hidden md:block lg:hidden"
            />
            {/* Mobile Image */}
            <img
              src={heroMobileImg}
              alt="Vispera Studios"
              className="w-full h-auto block md:hidden"
            />
            {/* Indicated dots at bottom left of the image */}
            <div className="absolute left-6 bottom-16 md:bottom-20 flex flex-col gap-3 z-10">
              <div className="w-2 h-2 rounded-full bg-[#5EA4A4] shadow-[0_0_8px_rgba(94,164,164,0.6)]" />
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <div className="w-2 h-2 rounded-full bg-white/60" />
            </div>
          </div>

          {/* Overlay on the edge of the hero banner */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-[50%] z-20 flex justify-center w-full px-4 md:px-0">
            <div className="bg-white/85 backdrop-blur-md py-4 px-6 md:px-12 w-full max-w-[88%] md:max-w-[90%] lg:max-w-4xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40">
              <p className="text-center text-[#1a1a1a] font-bold text-[10px] md:text-[13px] tracking-[0.2em] uppercase leading-relaxed">
                WELCOME TO VISPERA STUDIOS, <br className="block md:hidden" /> A CREATIVE STUDIO FOR STORIES THAT MATTER
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
