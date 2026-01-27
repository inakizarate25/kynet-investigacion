import img from "../assets/amgen-1.svg";
import img1 from "../assets/ARWR_BIG.svg";
import img2 from "../assets/astrazeneca-seeklogo.svg";
import img3 from "../assets/Logo_Bayer.svg.png";
import img4 from "../assets/biofarma.png";
import img5 from "../assets/Biogen-logo.png";

const logos = [img, img1, img2, img3, img4, img5];

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
              className="h-10 opacity-80  transition"
            />
          ))}

          {/* Segunda tanda (duplicada para loop infinito) */}
          {logos.map((logo, index) => (
            <img
              key={`logo-1-${index}`}
              src={logo}
              alt="Logo Kynet"
              className="h-10 opacity-80  transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
