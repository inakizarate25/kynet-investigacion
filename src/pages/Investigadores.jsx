import { useState } from "react";
import InvestigatorCard from "../components/InvestigatorCard.jsx";
import { investigators } from "../data/investigators.js";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Investigadores = () => {
  const [search, setSearch] = useState("");
  const [letter, setLetter] = useState("All");

  const filtered = investigators.filter((inv) => {
    const fullText = `
      ${inv.firstName}
      ${inv.lastName}
      ${inv.role}
      ${inv.specialty}
    `.toLowerCase();

    const matchesSearch = fullText.includes(search.toLowerCase());
    const matchesLetter = letter === "All" || inv.lastName.startsWith(letter);

    return matchesSearch && matchesLetter;
  });

  return (
    <>
      {/* Title */}
      <section className="relative h-[40vh] w-full bg-gray-800">
        <div className="absolute inset-0 bg-gray-900/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Investigadores</h1>
        </div>
      </section>
      <section className="py-14 px-6 bg-gray-50 flex min-h-screen w-full">
        <div className="mx-auto max-w-7xl">
          {/* Search */}
          <input
            type="text"
            placeholder="Buscar por nombre, apellido, rol o especialidad"
            className="mb-6 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Alphabet filter */}
          <div className="mb-8 flex flex-wrap gap-2 ">
            <button
              onClick={() => setLetter("All")}
              className={`px-3 py-1 text-sm rounded border transition cursor-pointer ${
                letter === "All"
                  ? "border-[#e2ec55] bg-[#e2ec55]/10 text-dark font-semibold"
                  : "border-gray-300 text-gray-600 hover:border-[#e2ec55]"
              }`}
            >
              All
            </button>

            {alphabet.map((l) => (
              <button
                key={l}
                onClick={() => setLetter(l)}
                className={`px-3 py-1 text-sm rounded border transition cursor-pointer ${
                  letter === l
                    ? "border-[#e2ec55] bg-[#e2ec55]/10 text-dark font-semibold"
                    : "border-gray-300 text-gray-600 hover:border-[#e2ec55]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Results */}
          <p className="mb-6 text-sm text-grayText">
            {filtered.length} resultados encontrados
          </p>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((inv) => (
              <InvestigatorCard key={inv.id} investigator={inv} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Investigadores;
