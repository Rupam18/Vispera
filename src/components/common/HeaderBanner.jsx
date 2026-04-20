import headerBg from "../../assets/images/header-bg.png";

export default function HeaderBanner({ title }) {
  return (
    <section className="relative h-[240px] md:h-[300px] lg:h-[340px] overflow-hidden">
      {/* header-bg.png — full width background */}
      <img
        src={headerBg}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Teal left panel overlay with dot pattern */}
      <div
        className="absolute left-0 top-0 bottom-0 flex items-center px-10 md:px-14 lg:px-20 z-10"
        style={{ width: "32%", backgroundColor: "rgba(26,74,69,0.94)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <h1 className="relative text-white text-3xl md:text-4xl lg:text-5xl font-bold font-heading">
          {title}
        </h1>
      </div>
    </section>
  );
}
