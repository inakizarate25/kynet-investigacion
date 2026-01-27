import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Investigadores from "./pages/Investigadores";
import Programas from "./pages/Programas";
import Preguntas from "./pages/Preguntas";
import Participacion from "./pages/Participacion";
import Contacto from "./pages/Contacto";
import ProgramaDetalle from "./pages/ProgramaDetalle";
import Ensayos from "./pages/Ensayos";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/investigadores" element={<Investigadores />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/participacion" element={<Participacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/programas/:slug" element={<ProgramaDetalle />} />
          <Route path="/quiero-participar" element={<Ensayos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
