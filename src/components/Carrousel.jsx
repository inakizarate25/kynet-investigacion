import img from "../assets/logo_kynet.svg";

const logos = Array(8).fill(img);

const Carousel = () => {
  return (
    <section className="w-7xl py-10 self-center">
      <h2 className="mb-10 pl-6 text-xl font-bold text-gray-700">
        NOS ACOMPAÑAN
      </h2>

      <div className="relative overflow-hidden w-[95%] mx-auto max-w-7xl">
        <div className="flex w-max gap-14 logo-slider">
          {/* Primera tanda */}
          {logos.map((logo, index) => (
            <img
              key={`logo-1-${index}`}
              src={logo}
              alt="Logo Kynet"
              className="h-12 w-auto opacity-80  transition"
            />
          ))}

          {/* Segunda tanda (duplicada para loop infinito) */}
          {logos.map((logo, index) => (
            <img
              key={`logo-2-${index}`}
              src={logo}
              alt="Logo Kynet"
              className="h-12 w-auto opacity-80  transition "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
