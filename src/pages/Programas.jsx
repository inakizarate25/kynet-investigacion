import ProgramaCard from "../components/ProgramaCard.jsx";
import { programas } from "../data/programas.js";
import PageHero from "../components/PageHero.jsx";
import PageTransition from "../components/PageTransition.jsx";
import { NavLink } from "react-router";

const Programas = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PageTransition>
      <PageHero
        title="Nuestros"
        highlight="Programas"
        subtitle="Desarrollamos protocolos de investigación clínica con los más altos estándares globales en diversas áreas terapéuticas."
        image="/assets/bg-programas.jpg"
      />

      <section className="programas-section">
        <div className="mx-auto max-w-7xl px-6">
          {/* Introducción a la sección */}
          <div className="section-intro">
            <span className="section-tag">Áreas de Investigación</span>
            <h2 className="section-title">Innovación en cada especialidad</h2>
            <p className="section-description">
              Explora nuestras líneas de estudio actuales, donde combinamos
              tecnología de vanguardia y rigor científico para mejorar la
              calidad de vida de los pacientes.
            </p>
          </div>

          {/* Grid de Programas */}
          <div className="programas-grid">
            {programas.map((programa, index) => (
              <div
                key={programa.id}
                className="programa-card-wrapper"
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <ProgramaCard
                  title={programa.title}
                  description={programa.description}
                  slug={programa.slug}
                />
              </div>
            ))}
          </div>

          {/* Banner de contacto rápido */}
          <div className="programas-cta">
            <h3>¿Deseas conocer más sobre un protocolo específico?</h3>
            <p>
              Nuestro equipo de coordinación está disponible para brindar
              detalles técnicos a investigadores y patrocinadores.
            </p>
            <NavLink
              to="/contacto"
              className="btn-cta-light"
              onClick={scrollToTop}
            >
              Consultar ahora
            </NavLink>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Programas;
