import phone from "../assets/phone.svg";
import email from "../assets/envelope.svg";
import location from "../assets/map-marker.svg";
import PageHero from "../components/PageHero.jsx";
import PageTransition from "../components/PageTransition";
import ContactForm from "../components/ContactForm.jsx";
const Contacto = () => {
  return (
    <PageTransition>
      {/* HERO */}
      {/* <section className="relative h-[40vh] w-full bg-gray-800">
        <div className="absolute inset-0 bg-gray-900/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contacto</h1>
        </div>
      </section> */}
      <PageHero
        title="Ponte en"
        highlight="Contacto"
        subtitle="Estamos aquí para resolver tus dudas y avanzar juntos."
        image="/assets/bg-contacto.jpg"
      />
      {/* CONTENT */}
      <section className="bg-muted px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Info box */}
            <div className="mb-8 rounded-xl bg-gray-700 p-6 text-gray-200 shadow-lg">
              <p className="leading-relaxed">
                Estamos para ayudarte. En{" "}
                <span className="font-semibold text-[#e2ec55]">KYNET</span>{" "}
                priorizamos el vínculo con nuestra comunidad a través de una
                atención rápida, transparente y personalizada. Estamos a tu
                disposición para despejar dudas, brindarte asistencia o contarte
                cómo trabajamos. Nos distingue una atención personalizada y
                humana, asegurando que cada una de tus consultas reciba una
                respuesta ágil y profesional. Queremos estar cerca tuyo.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* RIGHT */}
          <div className="h-150 w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="Mapa kynet recoleta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7239060272786!2d-58.39706502330154!3d-34.58585195655657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9f55f4c767%3A0x71a4e3566083928a!2sKynet%20Recoleta!5e0!3m2!1ses!2sar!4v1769300921205!5m2!1ses!2sar"
              className="h-full w-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <div className=" flex items-center justify-center mb-16 gap-8 flex-wrap">
        <div className="flex items-center justify-center gap-4 bg-[#e2ec55] p-4 mb-4 w-full lg:w-[390px] mx-3 h-20 rounded-2xl shadow-xl ">
          <img src={phone} alt="phone" className="h-8" />
          <p className="text-xl">+54 9 11 4093 3209</p>
        </div>
        <div className="flex items-center justify-center gap-4 bg-gray-700 p-4 mb-4 w-full lg:w-[390px] mx-3 h-20 rounded-2xl shadow-2xl">
          <img src={location} alt="location" className="h-8" />
          <div>
            <p className="text-white lg:text-2xl text-xl">
              Av. Pueyrredon 2446
            </p>
            <p className="text-white">Buenos Aires, Argentina</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 mb-4 w-full lg:w-[390px] mx-3 h-20 rounded-2xl shadow-xl">
          <img src={email} alt="email" className="h-8" />
          <a
            className="text-gray-900 lg:text-2xl text-lg"
            href="mailto:investigacionsc@kynet.com.ar"
          >
            investigacionsc@kynet.com.ar
          </a>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contacto;
