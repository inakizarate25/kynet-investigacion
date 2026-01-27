import { useParams } from "react-router";
import { programas } from "./../data/programas";
import ProgramDoctorCard from "./../components/ProgramDoctorCard";

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
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-dark">{programa.title}</h1>

        <div className="mb-8 h-1 w-24 rounded-full bg-[#e2ec55]" />

        {/* Description */}
        <p className="mb-10 text-gray-700 leading-relaxed whitespace-pre-line">
          {programa.fullDescription}
        </p>

        {/* Focus */}
        <h2 className="mb-4 text-xl font-semibold text-dark">
          Áreas de enfoque
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {programa.focus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* Program Doctors */}
        <h2 className="mt-12 mb-4 text-xl font-semibold text-dark">
          Equipo médico
        </h2>

        <div className="flex justify-start gap-6 flex-wrap">
          {programa.doctors.map((doctor) => (
            <ProgramDoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramaDetalle;
