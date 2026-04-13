import Hero from "../components/Hero.jsx";
import Card1 from "../components/Card1.jsx";
import Carrousel from "../components/Carrousel.jsx";
import { NavLink } from "react-router";
import user from "../assets/user-plus.svg";
import smile from "../assets/smile.svg";
import shild from "../assets/shield-check.svg";
import prescription from "../assets/prescription-bottle.svg";
import user1 from "../assets/user-minus.svg";
import heart from "../assets/heart-medical.svg";
import profile from "../assets/profile.jpg";
import PageTransition from "../components/PageTransition.jsx";

// Importa aquí tu logo de Kynet (ej: kynet-logo.png) y una imagen de fondo (ej: kynet-bg.jpg)
// Para este ejemplo, usaré marcadores de posición visuales.
// En tu proyecto real, asegúrate de tener estas imágenes en tu carpeta de assets.
import kynetLogo from "../assets/logo-home.svg";
import kynetBg from "../assets/banner-home.jpg";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <section className="min-h-screen flex flex-col bg-gray-100 w-full">
        <div className="flex justify-center items-center  py-10 flex-wrap gap-10 w-full">
          <Card1
            titulo={"Excelencia científica"}
            info={
              "Profesionales de referencia liderando cada etapa de nuestros protocolos. Investigación clínica dirigida por líderes de opinión reconocidos en la comunidad científica latinoamericana e internacional."
            }
            color={"bg-gray-600"}
            textColor={"text-gray-200"}
          />
          <Card1
            titulo={"Enrolamiento efectivo"}
            info={
              "Asumimos un compromiso total con las metas de reclutamiento, buscando alcanzar las metas de enrolamiento pactadas por nuestros Investigadores Principales, asegurando una ejecución eficiente y el cumplimiento de los tiempos establecidos en el cronograma global del estudio"
            }
            color={"bg-[#e2ec55]"}
            textColor={"text-gray-800"}
          />
          <Card1
            titulo={"ANMAT & FDA"}
            info={
              "Estudios en etapas avanzadas, que ya superaron todas las pruebas de seguridad y ahora comparan la eficacia para igualar o superar el mejor tratamiento posible para los pacientes"
            }
            color={"bg-white"}
            textColor={"text-gray-800"}
          />
        </div>
        <Carrousel />
        <section className="flex flex-col justify-center items-center px-10 py-10 mt-14 w-full">
          <h3 className="text-lg font-bold text-gray-600">
            INVESTIGACIÓN CLÍNICA
          </h3>
          <h4 className="text-3xl font-semibold max-w-100 text-center">
            Lo que necesitas saber antes de participar en un estudio
          </h4>
          <p className="bg-gray-900 h-1 w-25 mt-2"></p>
          <p className="text-center max-w-2xl w-[90vw] mt-4 text-gray-700 w-120">
            Los ensayos clínicos exploran nuevas opciones terapéuticas con el
            objetivo de mejorar la salud y el día a día de las personas.
          </p>
          <article className="flex justify-center gap-6 flex-wrap my-10 mt-20 w-screen lg:w-full">
            <div className="lg:w-50 lg:h-60 w-40 h-50 bg-gray-600 text-gray-200 flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={shild} alt="" className="h-14" />
              Tu seguridad es nuestra prioridad
            </div>
            <div className="lg:w-50 lg:h-60 w-40 h-50 bg-white flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={smile} alt="" className="h-14" />
              La participación es gratuita
            </div>
            <div className="lg:w-50 lg:h-60 w-40 h-50 bg-[#e2ec55] flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={user} alt="" className="h-14" />
              La participación siempre es voluntaria
            </div>
            <div className="lg:w-50 lg:h-60 w-40 h-50 bg-gray-600 text-gray-200 flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={prescription} alt="" className="h-14" />
              El participante recibe medicación sin costo
            </div>
            <div className="lg:w-50 lg:h-60 w-40 h-50 bg-white flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={user1} alt="" className="h-14" />
              Los participantes se pueden retirar del estudio en cualquier
              momento
            </div>
            <div className="lg:w-50 lg:h-60 w-40 h-50 bg-[#e2ec55] flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={heart} alt="" className="h-14" />
              Atención médica personalizada sin costo
            </div>
          </article>
        </section>

        {/* Sección Enlace Institucional Visual y Vistosa */}

        <section className="flex justify-around items-center flex-col xl:flex-row bg-white px-10 py-14 mt-10 h-auto gap-10">
          <div className="flex flex-col gap-4 w-full xl:w-1/2">
            <h4 className="text-4xl font-bold text-gray-700">
              Un ensayo para Mi
            </h4>
            <p className="text-gray-600 text-2xl">
              Conocé los estudios de investigación que se están realizando para
              desarrollar nuevos medicamentos para tu enfermedad.
            </p>
            <a
              className={
                "text-gray-500 font-semibold border-2 border-gray-500 rounded-4xl  px-6 py-3 w-32 text-center hover:bg-gray-500 hover:text-white transition-all"
              }
              href="https://www.unensayoparami.org/es/referentes/sitios/kynet-investigacion-clinica?pi="
            >
              VER MÁS
            </a>
          </div>

          <img src={profile} alt="" className="h-48" />
        </section>
        <section
          className="relative flex flex-col items-center justify-center bg-gray-900 text-white py-24 px-10 text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${kynetBg})` }}
        >
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Contenido */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo de Kynet */}
            <img
              src={kynetLogo}
              alt="Logo Kynet Centro Médico"
              className="h-20 mb-8"
            />

            <h4 className="text-4xl font-extrabold mb-5 tracking-tight">
              Centro Médico Kynet
            </h4>
            <p className="text-xl max-w-2xl mb-12 text-gray-200">
              Conocé más sobre nuestra institución, especialidades y staff
              médico visitando nuestro sitio oficial.
            </p>
            <a
              href="https://kynet.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e2ec55] text-gray-900 font-bold rounded-4xl px-10 py-4 text-lg hover:bg-white transition-all shadow-xl scale-100 hover:scale-105"
            >
              IR AL SITIO OFICIAL
            </a>
          </div>
        </section>
      </section>
    </PageTransition>
  );
};
export default Home;
