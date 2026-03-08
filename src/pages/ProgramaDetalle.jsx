import { useParams } from "react-router";
import { programas } from "../data/programas.js";
import ProgramDoctorCard from "../components/ProgramDoctorCard.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SidebarNav from "../components/SidebarNav.jsx";
import { Link } from "react-router";

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
      <section className="bg-white py-28 px-6 flex flex-col gap-2 justify-center items-center max-w-350 mx-auto">
        <Link
          to="/programas"
          className="text-gray-700 hover:text-gray-600 transition self-start mb-6 text-lg"
        >
          &larr; Volver a programas
        </Link>

        <div className="flex justify-start bg-gray-700 w-full max-w-350 items-start">
          <img
            src={programa.img2}
            alt={programa.title}
            className="w-full max-w-5xl h-auto"
          />
        </div>
        <div className="mx-auto max-w-7xl flex  gap-16 lg:rounded-tr-3xl relative -top-20 bg-white p-12">
          {/* CONTENT */}
          <div className="max-w-4xl">
            {/* TITLE */}
            <h1 className="text-4xl font-bold text-dark mb-4">
              {programa.title}
            </h1>

            <div className="h-1 w-24 bg-[#e2ec55] rounded-full mb-12" />

            {/* AIM */}
            <section className="mb-16" id="aim">
              <h2 className="text-2xl font-semibold mb-6">
                Enfoque del Programa
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                {programa.enfoque}
              </p>
            </section>

            {/* AREAS */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">
                Áreas Clave de Investigación
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                {programa.clave}
              </p>
            </section>

            {/* OBJETIVO */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Objetivo</h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                {programa.objetivo}
              </p>
            </section>

            {/* LEADERS */}
            <section id="leaders" className="mb-16">
              <h2 className="text-2xl font-semibold mb-8">Program Leaders</h2>

              <div className="flex flex-col gap-10">
                {programa.lideres.map((doctor) => (
                  <ProgramDoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </section>

            {/* MEMBERS */}
            <section id="members">
              <h2 className="text-2xl font-semibold mb-8">Program Members</h2>

              <div className="flex flex-col gap-10">
                {programa.miembros.map((doctor) => (
                  <ProgramDoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </section>
          </div>
          {/* SIDEBAR
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-2xl font-semibold text-gray-500 mb-6">
                En esta Sección
              </p>

              <nav className="flex flex-col gap-4 text-sm">
                <a
                  href="#aim"
                  className="hover:text-black transition text-xl font-light"
                >
                  Aim
                </a>

                <a
                  href="#leaders"
                  className="hover:text-black transition text-xl font-light"
                >
                  Program Leaders
                </a>

                <a
                  href="#members"
                  className="hover:text-black transition text-xl font-light"
                >
                  Program Members
                </a>
              </nav>
            </div>
          </aside> */}
          <SidebarNav />
        </div>
      </section>
    </PageTransition>
  );
};

export default ProgramaDetalle;
