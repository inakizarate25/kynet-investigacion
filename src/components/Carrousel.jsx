import img from "../assets/amgen-1.svg";
import img1 from "../assets/ARWR_BIG.svg";
import img2 from "../assets/astrazeneca-seeklogo.svg";
import img3 from "../assets/Logo_Bayer.svg.png";
import img4 from "../assets/biofarma.png";
import img5 from "../assets/Biogen-logo.png";

const logos = [img, img1, img2, img3, img4, img5];

const Carousel = () => {
  return (
    <section className="py-12 w-[90vw] mx-auto ">
      <h2 className="mb-10 px-4 text-center text-xl font-bold text-gray-700 sm:text-2xl">
        Nos acompañan
      </h2>

      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div className="flex gap-10 animate-logo-scroll">
          {/* Primera tanda */}
          {logos.map((logo, index) => (
            <img
              key={`logo-${index}`}
              src={logo}
              alt="Logo sponsor"
              className="h-8 sm:h-10 opacity-80 transition"
            />
          ))}

          {/* Segunda tanda */}
          {logos.map((logo, index) => (
            <img
              key={`logo-dup-${index}`}
              src={logo}
              alt="Logo sponsor"
              className="h-8 sm:h-10 opacity-80 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
