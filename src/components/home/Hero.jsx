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
            <div 
              className="backdrop-blur-md flex justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-3 md:py-0 px-4"
              style={{
                width: '100%',
                maxWidth: '1180px',
                minHeight: '56px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFFE5',
                opacity: 1
              }}
            >
              <p 
                className="text-center text-[#1a1a1a] uppercase align-middle"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: '22px',
                  lineHeight: '20px',
                  letterSpacing: '0.04em'
                }}
              >
                Welcome to Vispera Studios, <br className="block md:hidden" /> A Creative Studio for Stories That Matter
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
