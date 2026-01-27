import { Outlet } from "react-router";
import Navbar from "./components/Nabvar.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
