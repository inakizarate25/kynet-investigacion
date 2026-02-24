import React, { useState } from "react";

const FormPaciente = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mvzbdodv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      setStatus("Mensaje enviado. Nos contactaremos pronto.");
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
      <input type="hidden" name="Subject" value="Nueva solicitud: Paciente" />

      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-gray-700">Nombre</label>
        <input
          type="text"
          name="nombre"
          required
          className="p-2 border rounded-md focus:ring-2 focus:ring-[#e2ec55] outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-gray-700">Apellido</label>
        <input
          type="text"
          name="apellido"
          required
          className="p-2 border rounded-md focus:ring-2 focus:ring-[#e2ec55] outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          required
          className="p-2 border rounded-md focus:ring-2 focus:ring-[#e2ec55] outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-gray-700">Mensaje</label>
        <textarea
          name="mensaje"
          rows="4"
          className="p-2 border rounded-md resize-none outline-none focus:ring-2 focus:ring-[#e2ec55]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#e2ec55] hover:bg-[#d4de46] font-bold rounded-lg transition-colors mt-2"
      >
        Enviar
      </button>

      {status && (
        <p className="text-center text-sm text-green-600 font-medium">
          {status}
        </p>
      )}
    </form>
  );
};

export default FormPaciente;
