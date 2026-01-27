import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../assets/logo_kynet.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const base = "px-4 py-2 text-lg font-medium transition duration-300";

  const linkClass = ({ isActive }) =>
    isActive
      ? `${base} text-gray-700 font-semibold border-b-4 border-[#e2ec55]`
      : `${base} text-gray-700 hover:text-[#e2ec55]`;

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Kynet Logo" className="h-12 md:h-14" />
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-2">
          <NavLink to="/" className={linkClass}>
            INICIO
          </NavLink>
          <NavLink to="/investigadores" className={linkClass}>
            INVESTIGADORES
          </NavLink>
          <NavLink to="/programas" className={linkClass}>
            PROGRAMAS
          </NavLink>
          <NavLink to="/preguntas" className={linkClass}>
            Q&A
          </NavLink>
          <NavLink to="/contacto" className={linkClass}>
            CONTACTO
          </NavLink>
          <NavLink to="/participacion" className={linkClass}>
            QUIERO PARTICIPAR
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all duration-300
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col border-t bg-white py-4">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            INICIO
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/investigadores"
            className={linkClass}
          >
            INVESTIGADORES
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/programas"
            className={linkClass}
          >
            PROGRAMAS
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/preguntas"
            className={linkClass}
          >
            Q&A
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contacto"
            className={linkClass}
          >
            CONTACTO
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/participacion"
            className="mx-4 mt-3 rounded bg-[#e2ec55] px-4 py-3 text-center font-semibold text-gray-800"
          >
            QUIERO PARTICIPAR
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
