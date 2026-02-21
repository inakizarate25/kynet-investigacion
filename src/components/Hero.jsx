import heroimg from "../assets/heroimg.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full px-4 py-20 sm:py-24 md:py-32 text-white"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
        backgroundBlendMode: "darken",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-6 rounded-tl-lg rounded-br-lg bg-gray-700 px-4 py-2 text-sm sm:text-base opacity-90">
          Desde Argentina, hacia el mundo
        </p>

        <h1 className="mb-6 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Construyendo hoy la{" "}
          <span className="text-[#e2ec55]">Medicina del futuro</span>
        </h1>

        <p className="max-w-3xl text-base opacity-90 sm:text-lg">
          Calidad humana y técnica al servicio de la investigación clínica
          internacional
        </p>
      </div>
    </section>
  );
};

export default Hero;
