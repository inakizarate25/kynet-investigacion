import ProgramaCard from "../components/ProgramaCard.jsx";
import { programas } from "../data/programas.js";

const Programas = () => {
  return (
    <>
      {/* Title */}
      <section className="relative h-[40vh] w-full bg-gray-800">
        <div className="absolute inset-0 bg-gray-900/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h2 className="text-4xl font-bold text-white">
            Programas de investigación
          </h2>
        </div>
      </section>
      <section className="bg-muted px-6 py-16">
        <div className="mx-auto max-w-7xl">
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
    </>
  );
};

export default Programas;
