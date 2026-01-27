import { Link } from "react-router";
import Highlight from "./../components/Highlight";
import Card from "./../components/Card";
const Ensayos = () => {
  return (
    <main className="bg-gray-100 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        {/* Title */}
        <h2 className="text-4xl text-gray-700">Ensayos clínicos</h2>

        <p className="mx-auto mt-4 max-w-3xl text-gray-500">
          Nos especializamos en ensayos de fase 3, lo que significa que{" "}
          <strong>
            ya superaron todas las pruebas de seguridad internacionales
          </strong>
          . En esta etapa se mide la eficacia del nuevo producto en comparación
          al tratamiento más usado en el momento.
        </p>

        {/* Highlights */}
        <div className="mt-10 flex max-w-md flex-col gap-4 md:mx-auto md:max-w-6xl md:flex-row md:justify-around">
          <Highlight
            title="Seguridad"
            text="Trabajamos con las autoridades regulatorias más importantes del mundo: ANMAT, FDA y EMA."
          />
          <Highlight
            title="Oportunidad"
            text="El reclutamiento de pacientes tiene una ventana de duración limitada."
          />
          <Highlight
            title="Fase 3"
            text="Etapa donde se compara la eficacia del nuevo tratamiento con el estándar actual."
          />
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-2">
        {/* Médico */}
        <Card
          badge="Área para médicos derivadores"
          title="Soy médico"
          subtitle="¿Cómo participar de los ensayos?"
          text="Para formar parte de nuestro programa de ensayos clínicos como derivador, podés contactarte con nosotros en el siguiente enlace."
          bg="bg-gray-700"
          buttonText="Participar"
          txColor="text-white"
        />

        {/* Paciente */}
        <Card
          badge="Área para pacientes"
          title="Soy paciente"
          subtitle="¿Cómo participar de los ensayos?"
          text="Encontrá aquí toda la información sobre tratamientos nuevos y superadores, y accedé así a los tratamientos del futuro."
          bg="bg-white"
          buttonText="Participar"
          txColor="text-gray-700"
        />
      </div>
    </main>
  );
};

export default Ensayos;
