import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3 items-center">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            Kynet
            <span className="ml-2 text-[#e2ec55]">Investigación</span>
          </h3>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#e2ec55] transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/programas" className="hover:text-[#e2ec55] transition">
                Ensayos clínicos
              </Link>
            </li>
            <li>
              <Link
                to="/investigadores"
                className="hover:text-[#e2ec55] transition"
              >
                Investigadores
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-[#e2ec55] transition">
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
