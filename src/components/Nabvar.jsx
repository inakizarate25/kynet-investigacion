import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import logo from "../assets/logo_kynet.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Datos de navegación para evitar repetición
  const navLinks = [
    { name: "INICIO", path: "/" },
    { name: "INVESTIGADORES", path: "/investigadores" },
    { name: "PROGRAMAS", path: "/programas" },
    { name: "Q&A", path: "/preguntas" },
    { name: "CONTACTO", path: "/contacto" },
  ];

  // Función para cerrar menú y subir al top con suavidad
  const handleNavClick = () => {
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Clases para los links de escritorio
  const getLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-bold transition-all duration-300 tracking-wide ${
      isActive
        ? "text-gray-900 border-b-2 border-[#e2ec55]"
        : "text-gray-500 hover:text-gray-900"
    }`;

  return (
    <nav className="lg:absolute fixed top-0 left-0 z-[100] w-full bg-white/95 backdrop-blur-md shadow-sm h-[70px] flex items-center">
      <div className="mx-auto max-w-7xl w-full flex items-center justify-between px-6">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={handleNavClick}
          className="transition-transform hover:scale-105"
        >
          <img src={logo} alt="Kynet Logo" className="h-10 md:h-12" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={getLinkClass}
              onClick={handleNavClick}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/participacion"
            onClick={handleNavClick}
            className="ml-4 rounded-full bg-[#e2ec55] px-6 py-2.5 text-sm font-bold text-gray-800 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            QUIERO PARTICIPAR
          </NavLink>
        </div>

        {/* Hamburger Button (Animado con CSS) */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transform transition duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transform transition duration-300 ${open ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[70px] left-0 w-full bg-white border-b shadow-xl transition-all duration-300 ease-in-out ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-6 gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className="text-lg font-bold text-gray-700 hover:text-[#b5c02a]"
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/participacion"
            onClick={handleNavClick}
            className="w-full rounded-xl bg-[#e2ec55] py-4 text-center font-bold text-gray-800"
          >
            QUIERO PARTICIPAR
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
