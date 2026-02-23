import heroimg from "../assets/heroimg.jpg";

const Hero = () => {
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
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Hero;
