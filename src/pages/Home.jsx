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
import profile from "../assets/prof.svg";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="min-h-screen flex flex-col bg-gray-100 w-full">
        <div className="flex justify-center border-b-1 w-full py-10">
          <Card1
            titulo={"+ de 20 años de experiencia"}
            info={
              "Contamos con más de dos décadas de experiencia en la gestión de ensayos clínicos, brindando resultados confiables y de alta calidad."
            }
            color={"bg-gray-600"}
            textColor={"text-gray-200"}
          />
          <Card1
            titulo={"+ de 30 ensayos clinicos en curso"}
            info={
              "El reclutamiento de pacientes tiene una ventana de duracion. Postulate hoy para estar incluido apenas comience el proximo ensayo disponible"
            }
            color={"bg-[#e2ec55]"}
            textColor={"text-gray-800"}
          />
          <Card1
            titulo={"FDA, EMA & ANMAT"}
            info={
              "Estudios en etapas avanzadas, que ya superaron todas las pruebas de seguridad y ahora comparan la eficacia para igualar o superar el mejor tratamiento disponible"
            }
            color={"bg-white"}
            textColor={"text-gray-800"}
          />
        </div>
        <Carrousel />
        <section className="flex flex-col justify-center items-center px-6 py-10 mt-14">
          <h3 className="text-lg font-bold text-gray-600">
            INVESTIGACIÓN CLINICA
          </h3>
          <h4 className="text-3xl font-semibold w-[400px] text-center">
            ¿Qué hay que saber para ser parte de un estudio?
          </h4>
          <p className="bg-gray-900 h-1 w-[100px] mt-2"></p>
          <p className="text-center max-w-2xl mt-4 text-gray-700 w-[480px]">
            Cada ensayo implica una nueva medicacion que podria mejorar algun
            aspecto de la salud y la calidad de vida de las personas
          </p>
          <article className="flex justify-center gap-6 flex-wrap my-10 mt-20">
            <div className="w-[180px] h-[210px] bg-[#e2ec55] flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={user} alt="" className="h-14" />
              La participacion siempre es voluntaria
            </div>
            <div className="w-[180px] h-[210px] bg-white flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={smile} alt="" className="h-14" />
              La participacion es gratuita
            </div>
            <div className="w-[180px] h-[210px] bg-gray-600 text-gray-200 flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={prescription} alt="" className="h-14" />
              El participante recibe medicacion sin costo
            </div>
            <div className="w-[180px] h-[210px] bg-[#e2ec55] flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={heart} alt="" className="h-14" />
              El participante recibe atencion medica personalizada sin costo
            </div>
            <div className="w-[180px] h-[210px] bg-white flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={user1} alt="" className="h-14" />
              Los participantes se pueden retirar del estudio en cualquier
              momento
            </div>
            <div className="w-[180px] h-[210px] bg-gray-600 text-gray-200 flex flex-col justify-center items-center px-4 text-center shadow-lg">
              <img src={shild} alt="" className="h-14" />
              La seguridad del paciente es prioritaria
            </div>
          </article>
        </section>
        <section className="flex justify-around items-center bg-white px-10 py-14 mt-10 h-80">
          <div className="flex flex-col gap-4 w-1/2">
            <h4 className="text-4xl font-bold text-gray-700">
              Un ensayo para Mi
            </h4>
            <p className="text-gray-600 text-2xl">
              Conoce los estudios de investigacion que se estan realizando para
              desarrollar nuevos medicamentos para tu enfermedad.
            </p>
            <NavLink
              to={"/studies"}
              className={
                "text-gray-500 font-semibold border-2 border-gray-500 rounded-4xl  px-6 py-3 w-32 text-center hover:bg-gray-500 hover:text-white transition-all"
              }
            >
              VER MAS
            </NavLink>
          </div>
          <img src={profile} alt="" className="h-48" />
        </section>
      </section>
    </>
  );
};
export default Home;
