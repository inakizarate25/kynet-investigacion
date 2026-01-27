import ProgramaCard from "../components/ProgramaCard.jsx";
import { programas } from "../data/programas.js";

const Programas = () => {
  return (
    <section className="bg-muted px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-dark">
            Programas de investigación
          </h1>

          <div className="mt-3 h-1 w-24 rounded-full bg-[#e2ec55]" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programas.map((programa) => (
            <ProgramaCard
              key={programa.id}
              title={programa.title}
              description={programa.description}
              slug={programa.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programas;
