import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpqjkzyj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("¡Gracias! Tu mensaje ha sido enviado.");
        form.reset();
      } else {
        setStatus("Ocurrió un error. Intenta nuevamente.");
      }
    } catch (error) {
      setStatus("Error de conexión.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-6  rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Dejanos un mensaje
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input type="hidden" name="Subject" value="Nueva solicitud: Contacto" />
        {/* Nombre */}
        <div className="flex flex-col">
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre"
            required
            className="p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#e2ec55] transition-colors"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#e2ec55] transition-colors"
          />
        </div>

        {/* Teléfono */}
        <div className="md:col-span-2 flex flex-col">
          <input
            type="tel"
            name="Telefono"
            placeholder="Teléfono"
            className="p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#e2ec55] transition-colors"
          />
        </div>

        {/* Mensaje */}
        <div className="md:col-span-2 flex flex-col">
          <textarea
            name="Mensaje"
            placeholder="Mensaje"
            rows="5"
            required
            className="p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#e2ec55] transition-colors resize-none"
          ></textarea>
        </div>

        {/* Botón Enviar */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-[#e2ec55] hover:bg-[#d4de46] text-gray-800 font-bold py-3 px-8 rounded-lg transition-all active:scale-95 shadow-md"
          >
            Enviar
          </button>
        </div>

        {/* Mensaje de estado */}
        {status && (
          <p className="md:col-span-2 mt-4 text-sm font-medium text-gray-600 animate-pulse">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
