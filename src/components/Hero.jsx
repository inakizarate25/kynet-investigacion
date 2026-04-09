import heroimg from "../assets/heroimg.jpg";
import { NavLink } from "react-router";

const Hero = () => {
  const handleNavClick = () => {
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="hero-section">
      {/* Contenedor de imagen con efecto zoom */}
      <div className="hero-bg-wrapper">
        <img
          src={heroimg}
          alt="Medicina del futuro"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">Desde Argentina, hacia el mundo</div>

        <h1 className="hero-title">
          Construyendo hoy la <br className="desktop-only" />
          <span className="highlight">Medicina del futuro</span>
        </h1>

        <p className="hero-description">
          Calidad humana y técnica al servicio de la investigación clínica
          internacional.
        </p>
        <NavLink
          to="/participacion"
          onClick={handleNavClick}
          className="ml-4 rounded-lg bg-[#e2ec55] px-6 py-2.5 text-lgfont-bold text-gray-800 shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          QUIERO PARTICIPAR
        </NavLink>
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Hero;
