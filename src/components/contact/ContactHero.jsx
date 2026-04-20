import headerBg from "../../assets/images/header-bg.png";

export default function ContactHero() {
  return (
    <section className="mt-16 md:mt-20 relative h-[260px] md:h-[320px] overflow-hidden">
      {/* Full width background */}
      <img
        src={headerBg}
        alt="Contact Us"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Teal left panel with dot pattern */}
      <div
        className="absolute left-0 top-0 bottom-0 flex items-center px-10 md:px-14 z-10"
        style={{ width: "28%", backgroundColor: "rgba(26,74,69,0.92)" }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
        <h1 className="relative text-white text-3xl md:text-4xl font-bold font-heading">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
