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

      {/* Clean Full-Bleed Image with High-Centered Title */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-[60%] flex items-center px-10 md:px-14 lg:px-20 z-10">
        <h1 className="text-white text-5xl md:text-6xl lg:text-6xl font-bold font-heading drop-shadow-2xl italic">
          {title}
        </h1>
      </div>
    </section>
  );
}
