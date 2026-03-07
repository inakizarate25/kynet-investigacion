import { useParams } from "react-router";
import { programas } from "../data/programas.js";
import ProgramDoctorCard from "../components/ProgramDoctorCard.jsx";
import PageTransition from "../components/PageTransition.jsx";

const ProgramaDetalle = () => {
  const { slug } = useParams();
  const programa = programas.find((p) => p.slug === slug);

  if (!programa) {
    return (
      <div className="px-6 py-20 text-center">
        <p>Programa no encontrado</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <section className="bg-white px-6 py-30">
        <div className="mx-auto max-w-4xl">
          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold text-dark">
            {programa.title}
          </h1>

          <div className="mb-8 h-1 w-24 rounded-full bg-[#e2ec55]" />

          {/* Focus */}
          <h2 className="mb-4 text-xl font-semibold text-dark">
            Enfoque del Programa
          </h2>
          {/* Description */}
          <p className="mb-10 text-gray-700 leading-relaxed whitespace-pre-line text-xl">
            {programa.enfoque}
          </p>
          {/* Focus */}
          <h2 className="mb-4 text-xl font-semibold text-dark">
            Áreas Clave de Investigación
          </h2>
          <p className="mb-10 text-gray-700 leading-relaxed whitespace-pre-line text-xl">
            {programa.clave}
          </p>
          {/* Focus */}
          <h2 className="mb-4 text-xl font-semibold text-dark">Objetivo</h2>
          <p className="mb-10 text-gray-700 leading-relaxed whitespace-pre-line text-xl">
            {programa.objetivo}
          </p>

          {/* Program Doctors */}
          <h2 className="mt-12 mb-4 text-xl font-semibold text-dark">
            Program Leaders
          </h2>

          <div className="flex justify-start gap-6 flex-wrap">
            {programa.lideres.map((doctor) => (
              <ProgramDoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          {/* Program Doctors */}
          <h2 className="mt-12 mb-4 text-xl font-semibold text-dark">
            Program Members
          </h2>

          <div className="flex justify-start gap-6 flex-wrap">
            {programa.miembros.map((doctor) => (
              <ProgramDoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProgramaDetalle;
