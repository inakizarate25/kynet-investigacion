import { useState } from "react";
import InvestigatorCard from "./../components/InvestigatorCard";
import { investigators } from "./../data/investigators";
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
    <section className="bg-muted py-14 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h1 className="mb-6 text-3xl font-bold text-dark">Investigadores</h1>

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
  );
};

export default Investigadores;
