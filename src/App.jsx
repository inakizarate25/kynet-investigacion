import { Outlet } from "react-router";
import Navbar from "./components/Nabvar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
