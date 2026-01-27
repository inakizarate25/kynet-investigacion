import { Outlet } from "react-router";
import Navbar from "./components/Nabvar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
