import { Link } from "react-router";
import logo from "../assets/logo-home.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3 items-center">
        {/* Brand */}
        <img
          src={logo}
          alt="Logo Kynet Investigación"
          className="w-32 h-auto"
        />

        {/* Navigation */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-[#e2ec55] transition"
                onClick={scrollToTop}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/programas"
                className="hover:text-[#e2ec55] transition"
                onClick={scrollToTop}
              >
                Ensayos clínicos
              </Link>
            </li>
            <li>
              <Link
                to="/investigadores"
                className="hover:text-[#e2ec55] transition"
                onClick={scrollToTop}
              >
                Investigadores
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="hover:text-[#e2ec55] transition"
                onClick={scrollToTop}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Av. Pueyrredon 2446</li>
            <li>📞 +54 9 11 4093 3209</li>
            <li>
              ✉️{" "}
              <a
                href="mailto:investigacionsc@kynet.com.ar"
                className="hover:text-[#e2ec55] transition"
              >
                investigacionsc@kynet.com.ar
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Kynet Investigación. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
