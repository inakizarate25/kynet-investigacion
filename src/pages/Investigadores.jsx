import { useState } from "react";
import InvestigatorCard from "../components/InvestigatorCard.jsx";
import { investigators } from "../data/investigators.js";
import PageHero from "../components/PageHero.jsx";
import PageTransition from "../components/PageTransition.jsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Investigadores = () => {
  const [search, setSearch] = useState("");
  const [letter, setLetter] = useState("All");

  const filtered = investigators.filter((inv) => {
    const fullText =
      `${inv.firstName} ${inv.lastName} ${inv.role} ${inv.specialty}`.toLowerCase();
    const matchesSearch = fullText.includes(search.toLowerCase());
    const matchesLetter =
      letter === "All" || inv.lastName.toUpperCase().startsWith(letter);
    return matchesSearch && matchesLetter;
  });

  return (
    <PageTransition>
      <PageHero
        title="Nuestros"
        highlight="Investigadores"
        subtitle="Un equipo multidisciplinario comprometido con la excelencia científica y la ética profesional."
        image="/assets/bg-investigadores.jpg"
      />

      <section className="investigadores-section">
        <div className="mx-auto max-w-7xl px-6">
          {/* Barra de Filtros Flotante */}
          <div className="filters-container">
            <div className="search-wrapper">
              <svg
                className="search-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar por nombre, especialidad o rol..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="alphabet-scroll">
              <button
                onClick={() => setLetter("All")}
                className={`text-xs letter-btn ${letter === "All" ? "active" : ""}`}
              >
                Todos
              </button>
              {alphabet.map((l) => (
                <button
                  key={l}
                  onClick={() => setLetter(l)}
                  className={`letter-btn ${letter === l ? "active" : ""}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Contador y Grid */}
          <div className="results-header">
            <p className="results-count">
              Mostrando <span>{filtered.length}</span> especialistas
            </p>
            <div className="results-line"></div>
          </div>

          <div className="investigator-grid">
            {filtered.length > 0 ? (
              filtered.map((inv) => (
                <InvestigatorCard key={inv.id} investigator={inv} />
              ))
            ) : (
              <div className="no-results">
                <p>No se encontraron investigadores con esos criterios.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setLetter("All");
                  }}
                  className="reset-btn"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Investigadores;
