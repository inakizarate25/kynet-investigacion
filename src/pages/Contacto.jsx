import phone from "../assets/phone.svg";
import email from "../assets/envelope.svg";
import location from "../assets/map-marker.svg";
const Contacto = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[40vh] w-full bg-gray-800">
        <div className="absolute inset-0 bg-gray-900/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contacto</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-muted px-6 py-16 bg-gray-100">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Info box */}
            <div className="mb-8 rounded-xl bg-gray-700 p-6 text-gray-200 shadow-lg">
              <p className="leading-relaxed">
                En <span className="font-semibold text-[#e2ec55]">KYNET</span>{" "}
                valoramos cada vínculo con nuestra comunidad. Ya sea que tengas
                preguntas, necesites asistencia o quieras conocer más sobre
                nuestros servicios, estamos para escucharte y ayudarte. Nuestro
                equipo dedicado se asegura de que tus consultas sean respondidas
                de forma rápida y profesional. La transparencia, la comunicación
                y la atención personalizada son los pilares de nuestro enfoque.
              </p>
            </div>

            {/* Form */}
            <h2 className="mb-4 text-xl font-semibold text-dark">
              Dejanos un mensaje
            </h2>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-lg border px-4 py-3 focus:border-[#e2ec55] focus:outline-none focus:ring-1 focus:ring-[#e2ec55]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border px-4 py-3 focus:border-[#e2ec55] focus:outline-none focus:ring-1 focus:ring-[#e2ec55]"
                />
              </div>

              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full rounded-lg border px-4 py-3 focus:border-[#e2ec55] focus:outline-none focus:ring-1 focus:ring-[#e2ec55]"
              />

              <textarea
                rows="4"
                placeholder="Mensaje"
                className="w-full rounded-lg border px-4 py-3 focus:border-[#e2ec55] focus:outline-none focus:ring-1 focus:ring-[#e2ec55]"
              ></textarea>

              <button
                type="submit"
                className="
                  mt-2
                  rounded-lg
                  bg-[#e2ec55]
                  px-8
                  py-3
                  font-semibold
                  text-gray-900
                  transition
                  hover:opacity-90
                  cursor-pointer
                "
              >
                Enviar
              </button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="h-[600px] w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="Mapa kynet recoleta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7239060272786!2d-58.39706502330154!3d-34.58585195655657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9f55f4c767%3A0x71a4e3566083928a!2sKynet%20Recoleta!5e0!3m2!1ses!2sar!4v1769300921205!5m2!1ses!2sar"
              className="h-full w-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 flex items-center justify-center mb-16 gap-8 flex-wrap">
        <div className="flex items-center gap-4 bg-[#e2ec55] p-4 mb-4 w-auto h-20 rounded-2xl shadow-xl">
          <img src={phone} alt="phone" className="h-8" />
          <p className="text-xl">+54 9 11 4093 3209</p>
        </div>
        <div className="flex items-center gap-4 bg-gray-700 p-4 mb-4 w-auto h-20 rounded-2xl shadow-2xl">
          <img src={location} alt="location" className="h-8" />
          <div>
            <p className="text-white text-2xl">Av. Pueyrredon 2446</p>
            <p className="text-white">Buenos Aires, Argentina</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 mb-4 w-auto h-20 rounded-2xl shadow-xl">
          <img src={email} alt="email" className="h-8" />
          <p className="text-gray-900 text-2xl">info@kynet.com.ar</p>
        </div>
      </div>
    </>
  );
};

export default Contacto;
