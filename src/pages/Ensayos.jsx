import { useState } from "react";
import Highlight from "../components/Highlight";
import Card from "../components/Card";
import ParticiparModal from "../components/ParticiparModal";

const Ensayos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState(null); // "medico" | "paciente"

  const handleOpen = (role) => {
    setType(role);
    setOpenModal(true);
  };

  return (
    <>
      <main className="bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          {/* Title */}
          <h2 className="text-4xl text-gray-700">Ensayos clínicos</h2>

          {/* Highlights */}
        </div>

        {/* Cards */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-2">
          {/* Médico */}
          <Card
            badge="Área para médicos"
            title="Soy médico"
            subtitle="¿Cómo participar de los ensayos?"
            text="Para formar parte de nuestro equipo o para integrar nuestra red de derivadores de ensayos clínicos podés contactarte con nosotros en el siguiente enlace."
            bg="bg-gray-700"
            txColor="text-white"
            onClick={() => handleOpen("medico")}
          />

          {/* Paciente */}
          <Card
            badge="Área para pacientes"
            title="Soy paciente"
            subtitle="¿Cómo participar de los ensayos?"
            text="Consultá aquí toda la información sobre tratamientos nuevos y superadores, y accedé así a los tratamientos del futuro.
            
            
            "
            bg="bg-white"
            txColor="text-gray-700"
            onClick={() => handleOpen("paciente")}
          />
        </div>
      </main>

      {/* Modal */}
      <ParticiparModal
        open={openModal}
        type={type}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default Ensayos;
