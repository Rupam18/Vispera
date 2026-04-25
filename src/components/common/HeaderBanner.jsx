import headerBgDefault from "../../assets/images/header-bg.png";

export default function HeaderBanner({ title, image }) {
  const bgImage = image || headerBgDefault;

  return (
    <section className="relative h-[240px] md:h-[300px] lg:h-[340px] overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay Content */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center px-10 md:px-14 lg:px-20 z-10">
        <h1 className="text-white text-4xl md:text-5xl lg:text-[32px] lg:leading-tight font-bold font-heading drop-shadow-2xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
