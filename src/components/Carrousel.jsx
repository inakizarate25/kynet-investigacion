import img1 from "../assets/astrazeneca-seeklogo.svg";
import img2 from "../assets/sanofi-logo-2022.svg";
import img3 from "../assets/Labcorp.svg";
import img4 from "../assets/pngegg.png";
import img5 from "../assets/jyj.png";
import img6 from "../assets/novo.svg";
import img7 from "../assets/crinetics.svg";
import img8 from "../assets/ICONplc.svg";
import img9 from "../assets/recordati.svg";
import img10 from "../assets/argenx.svg";

const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Carousel = () => {
  const brands = [
    { name: "Brand 1", logo: img1 },
    { name: "Brand 2", logo: img2 },
    { name: "Brand 3", logo: img3 },
    { name: "Brand 4", logo: img4 },
    { name: "Brand 5", logo: img5 },
    { name: "Brand 6", logo: img6 },
    { name: "Brand 7", logo: img7 },
    { name: "Brand 8", logo: img8 },
    { name: "Brand 9", logo: img9 },
    { name: "Brand 10", logo: img10 },
  ];

  // Duplicamos el array para crear el efecto infinito
  const doubleBrands = [...brands, ...brands];

  return (
    <section>
      <h3 className="text-lg font-bold text-gray-600 text-center mt-7">
        NOS ACOMPAÑAN
      </h3>
      <div className="carousel-container">
        {/* Capas de degradado para los bordes (Efecto Glass/Fade) */}
        <div className="fade-overlay left"></div>
        <div className="fade-overlay right"></div>

        <div className="carousel-track">
          {/* Renderizamos dos veces el set de imágenes */}
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="carousel-item">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
