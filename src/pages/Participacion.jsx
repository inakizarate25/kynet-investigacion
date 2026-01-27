import { NavLink } from "react-router";
const Participacion = () => {
  return (
    <>
      {/* Title */}
      <section className="relative h-[40vh] w-full bg-gray-800">
        <div className="absolute inset-0 bg-gray-900/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-white">
            Participación en ensayos clínicos
          </h2>
        </div>
      </section>
      <main className="bg-white">
        {/* BLOQUE DESTACADO */}
        <section className="relative bg-gray-100 py-20 px-6">
          <div className="mx-auto max-w-6xl rounded-lg bg-white p-10 shadow-lg">
            <h2 className="mb-8 text-center text-4xl font-semibold text-gray-700">
              ¿Por qué participar de un ensayo clínico?
            </h2>

            <div className="grid gap-8 md:grid-cols-2 text-gray-600 leading-relaxed text-lg">
              <p>
                Participar en un ensayo clínico es un proceso que requiere
                máxima responsabilidad y cuidado. Cada estudio está diseñado
                bajo estrictos protocolos internacionales para garantizar la
                seguridad de los pacientes y la validez científica de los
                resultados.
                <br />
                <br />
                Antes de comenzar, se evalúan detalladamente todos los riesgos y
                beneficios potenciales, y se siguen lineamientos establecidos
                por autoridades regulatorias como ANMAT, FDA y EMA.
              </p>

              <p>
                La experiencia y el profesionalismo del equipo que realiza el
                estudio son factores determinantes. En nuestra institución
                contamos con médicos especializados y profesionales de la salud
                con amplia trayectoria en investigación clínica.
                <br />
                <br />
                Cada miembro del equipo está capacitado para velar por la
                seguridad, el bienestar y los derechos de cada paciente durante
                todas las etapas del ensayo.
              </p>
            </div>

            <div className="mt-10 text-center">
              <NavLink
                to="/quiero-participar"
                className="
                rounded-md
                bg-[#e2ec55]
                px-8
                py-3
                font-semibold
                text-gray-700
                transition
                hover:shadow-lg
                cursor-pointer
              "
              >
                Quiero Participar
              </NavLink>
            </div>
          </div>
        </section>

        {/* SECCIÓN INFORMATIVA */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl space-y-12 text-gray-700">
            {/* Item */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                ¿Sabes qué es un ensayo clínico?
              </h2>
              <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
              <p className="text-lg">
                Es el estudio controlado que realiza un grupo de médicos
                investigadores en personas voluntarias para comprobar la
                eficacia y seguridad de nuevos medicamentos, procedimientos,
                dispositivos o vacunas. Está supervisado y aprobado por las
                autoridades de salud.
              </p>
            </div>

            {/* Item */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                ¿Para qué se hace?
              </h2>
              <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
              <p className="text-lg">
                Para comprobar si un nuevo tratamiento es eficaz y seguro, y si
                aporta algún beneficio adicional a lo ya conocido.
              </p>
            </div>

            {/* Item */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                ¿Es seguro participar?
              </h2>
              <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
              <p className="text-lg">
                Sí. Nuestros estudios se encuentran en su mayoría entre las
                fases 2 y 4. Un Comité de Ética Independiente supervisa la
                seguridad de los pacientes y el cumplimiento de las Buenas
                Prácticas Clínicas, protegiendo los derechos de los
                participantes.
              </p>
            </div>

            {/* Item */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                ¿Qué significa ser participante en un ensayo clínico?
              </h2>
              <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
              <p className="text-lg">
                Significa participar de manera libre y voluntaria en un estudio
                de investigación. El paciente recibe toda la información del
                ensayo y decide libremente su participación, pudiendo retirarse
                en cualquier momento.
              </p>
            </div>

            {/* Item */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                Beneficios de participar
              </h2>
              <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
              <p className="text-lg">
                Contamos con más de 100 protocolos de investigación en fases
                avanzadas (3 y 4). Todos los estudios incluyen medicación de
                última generación y atención médica gratuita a través de un
                equipo multidisciplinario que cuida el bienestar del paciente.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Participacion;
