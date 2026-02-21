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

const Home = () => {
  return (
    <>
      <Hero />
      <section className="min-h-screen flex flex-col bg-gray-100 w-full">
        <div className="flex flex-col justify-center items-center border-b py-10 md:flex-row">
          <Card1
            titulo={"Exelencia cientifica"}
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
            INVESTIGACIÓN CLINICA
          </h3>
          <h4 className="text-3xl font-semibold max-w-100 text-center">
            Lo que necesitas saber antes de participar en un estudio
          </h4>
          <p className="bg-gray-900 h-1 w-25 mt-2"></p>
          <p className="text-center max-w-2xl w-[90vw] mt-4 text-gray-700 w-120">
            Los ensayos clínicos exploran nuevas opciones terapéuticas con el
            objetivo de mejorar la salud y el día a día de las personas.
          </p>
          <article className="flex justify-center gap-6 flex-wrap my-10 mt-20">
            <div className="w-50 h-60 bg-gray-600 text-gray-200 flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={shild} alt="" className="h-14" />
              Tu seguguridad es nuestra prioridad
            </div>
            <div className="w-50 h-60 bg-white flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={smile} alt="" className="h-14" />
              La participacion es gratuita
            </div>
            <div className="w-50 h-60 bg-[#e2ec55] flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={user} alt="" className="h-14" />
              La participacion siempre es voluntaria
            </div>
            <div className="w-50 h-60 bg-gray-600 text-gray-200 flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={prescription} alt="" className="h-14" />
              El participante recibe medicacion sin costo
            </div>
            <div className="w-50 h-60 bg-[#e2ec55] flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={heart} alt="" className="h-14" />
              Atencion medica personalizada sin costo
            </div>
            <div className="w-50 h-60 bg-white flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={user1} alt="" className="h-14" />
              Los participantes se pueden retirar del estudio en cualquier
              momento
            </div>
          </article>
        </section>
        <section className="flex justify-around items-center flex-col xl:flex-row bg-white px-10 py-14 mt-10 h-auto gap-10">
          <div className="flex flex-col gap-4 w-full xl:w-1/2">
            <h4 className="text-4xl font-bold text-gray-700">
              Un ensayo para Mi
            </h4>
            <p className="text-gray-600 text-2xl">
              Conoce los estudios de investigacion que se estan realizando para
              desarrollar nuevos medicamentos para tu enfermedad.
            </p>
            <a
              className={
                "text-gray-500 font-semibold border-2 border-gray-500 rounded-4xl  px-6 py-3 w-32 text-center hover:bg-gray-500 hover:text-white transition-all"
              }
              href="https://www.unensayoparami.org/es/referentes/sitios/kynet-investigacion-clinica?pi="
            >
              VER MAS
            </a>
          </div>
          <img src={profile} alt="" className="h-48" />
        </section>
      </section>
    </>
  );
};
export default Home;
