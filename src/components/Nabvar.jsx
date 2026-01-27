import { NavLink } from "react-router";
import logo from "../assets/logo_kynet.svg";

const Navbar = () => {
  const base = "px-4 py-1 text-lg font-medium transition duration-300";

  return (
    <nav className=" bg-white shadow-md">
      <div className="flex items-center justify-center px-6 py-4 gap-12">
        <NavLink to="/">
          <img src={logo} alt="Kynet Logo" className="h-14" />
        </NavLink>
        <div className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${base} text-gray-700 font-semibold hover:text-[#e2ec55] border-b-4 border-[#e2ec55]`
                : `${base} text-gray-700 hover:text-[#e2ec55]`
            }
          >
            INICIO
          </NavLink>

          <NavLink
            to="/investigadores"
            className={({ isActive }) =>
              isActive
                ? `${base} text-gray-700 font-semibold hover:text-[#e2ec55] border-b-4 border-[#e2ec55]`
                : `${base} text-gray-700 hover:text-[#e2ec55]`
            }
          >
            INVESTIGADORES
          </NavLink>

          <NavLink
            to="/programas"
            className={({ isActive }) =>
              isActive
                ? `${base} text-gray-700 font-semibold hover:text-[#e2ec55] border-b-4 border-[#e2ec55]`
                : `${base} text-gray-700 hover:text-[#e2ec55]`
            }
          >
            PROGRAMAS DE INVESTIGACION
          </NavLink>

          <NavLink
            to="/preguntas"
            className={({ isActive }) =>
              isActive
                ? `${base} text-gray-700 font-semibold hover:text-[#e2ec55] border-b-4 border-[#e2ec55]`
                : `${base} text-gray-700 hover:text-[#e2ec55]`
            }
          >
            Q&A
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? `${base} text-gray-700 font-semibold hover:text-[#e2ec55] border-b-4 border-[#e2ec55]`
                : `${base} text-gray-700 hover:text-[#e2ec55]`
            }
          >
            CONTACTO
          </NavLink>
          <NavLink
            to="/participacion"
            className={({ isActive }) =>
              isActive
                ? `${base} text-gray-700 font-semibold hover:text-[#e2ec55] border-b-4 border-[#e2ec55]`
                : `${base} text-gray-700 hover:text-[#e2ec55]`
            }
          >
            QUIERO PARTICIPAR
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
