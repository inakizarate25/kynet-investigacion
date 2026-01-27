const FormPaciente = () => {
  return (
    <form className="space-y-4">
      <Input label="Nombre" />
      <Input label="Apellido" />
      <Input label="Email" type="email" />
      <Textarea label="Mensaje" />

      <button
        type="submit"
        className="
          w-full
          rounded-md
          bg-[#e2ec55]
          py-3
          font-semibold
          text-gray-900
          hover:opacity-90
        "
      >
        Enviar
      </button>
    </form>
  );
};

export default FormPaciente;

/* --- helpers --- */
const Input = ({ label, type = "text" }) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type={type}
      className="
        w-full
        rounded-md
        border
        border-gray-300
        px-3
        py-2
        focus:border-[#e2ec55]
        focus:outline-none
      "
    />
  </div>
);

const Textarea = ({ label }) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-gray-600">
      {label}
    </label>
    <textarea
      rows={4}
      className="
        w-full
        rounded-md
        border
        border-gray-300
        px-3
        py-2
        focus:border-[#e2ec55]
        focus:outline-none
      "
    />
  </div>
);
