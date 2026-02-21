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
          <div className="mx-auto max-w-6xl rounded-lg bg-white p-10 shadow-lg flex flex-col items-center">
            <h2 className="mb-8 text-center text-4xl font-semibold text-gray-700">
              ¿Cuáles son las razones para participar en un estudio clínico?
            </h2>

            <div className="grid gap-8 md:grid-cols-1 text-center text-gray-600 text-lg w-[700px]">
              Entendemos que participar en un ensayo clínico es una decisión
              importante. Por eso, en nuestro centro, nos enfocamos en que cada
              paso sea seguro, transparente y profesional. Trabajamos bajo
              protocolos estrictos para cuidar tu salud y garantizar resultados
              científicos válidos. Contamos con un equipo de especialistas
              dedicados que te acompañará en todo momento, brindándote una
              atención personalizada basada en años de experiencia y un profundo
              respeto por tu seguridad y bienestar.
            </div>

            <div className="mt-10 text-center">
              <NavLink
                to="/quiero-participar"
                className="
                rounded-md
                bg-[#e2ec55]
                px-8
                py-3
                font-bold
                text-gray-700
                transition
                hover:shadow-lg
                cursor-pointer
                text-3xl
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
                Es una investigación médica realizada con personas que eligen
                participar voluntariamente. En estos estudios, un equipo de
                especialistas analiza nuevas opciones para la salud
                (medicamentos o procedimientos) para confirmar que funcionan
                correctamente y son seguros. Es un proceso controlado paso a
                paso y siempre aprobado por organismos oficiales
              </p>
            </div>

            {/* Item */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                ¿Para qué se hace?
              </h2>
              <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
              <p className="text-lg">
                Se realiza para confirmar que un nuevo tratamiento funciona
                correctamente y es seguro para las personas. El propósito
                principal es descubrir si esta nueva opción ofrece mejores
                resultados o mayores beneficios que los tratamientos que ya se
                utilizan actualmente.
              </p>
            </div>

            {/* Item */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                ¿Es seguro participar?
              </h2>
              <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
              <p className="text-lg">
                Tu seguridad es nuestra prioridad. Participarás en
                investigaciones que se encuentran en sus fases finales de
                desarrollo, donde se busca confirmar la eficacia del tratamiento
                antes de su salida al mercado. Este proceso está bajo
                supervisión constante de un Comité de Ética y expertos en salud
                que garantizan que el diseño del estudio sea ético, seguro y
                respete tu integridad en todo momento.
              </p>
            </div>

            {/* Item */}
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                Beneficios de participar
              </h2>
              <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
              <p className="text-lg">
                El principal beneficio es recibir una atención médica de alta
                calidad. Durante el estudio, nuestro equipo de profesionales
                monitorea tu salud de manera mucho más frecuente y detallada que
                en una consulta habitual. Además, tenés la oportunidad de
                mejorar tu condición de salud con terapias de última generación
                mientras contribuís al avance de la medicina
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Participacion;
