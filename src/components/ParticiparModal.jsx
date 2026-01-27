import FormPaciente from "../components/FormPaciente";
import FormMedico from "../components/FormMedico";
const ParticiparModal = ({ open, onClose, type }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition duration-300 ">
      <div className="max-w-[400px] w-full rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="rounded-t-xl bg-gray-700 px-6 py-4 text-white">
          <h2 className="text-lg font-semibold">
            Participar como {type === "medico" ? "médico" : "paciente"}
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {type === "paciente" ? <FormPaciente /> : <FormMedico />}
        </div>

        {/* Footer */}
        <div className="flex justify-end px-6 pb-6">
          <button
            onClick={onClose}
            className="rounded bg-gray-700 px-6 py-2 cursor-pointer text-sm font-semibold text-white"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticiparModal;
