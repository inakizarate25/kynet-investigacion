import heroimg from "./../assets/heroimg.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full py-32 px-6 text-white"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "darken",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
        <p className="mb-6 text-xl text-primary bg-gray-700 px-4 py-2 rounded-tl-lg rounded-br-lg opacity-90">
          Desde Argentina, hacia el mundo
        </p>

        <h1 className="mb-8 max-w-xl text-2xl md:text-4xl font-semibold opacity-95">
          Impulsando la innovación en{" "}
          <p className="text-[#e2ec55]">investigación científica</p>
        </h1>

        <p className="max-w-4xl text-xl opacity-90">
          Equipo de expertos en ensayos clínicos que brinda datos precisos y
          atención de alta calidad
        </p>
      </div>
    </section>
  );
};

export default Hero;
