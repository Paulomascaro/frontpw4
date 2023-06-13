
import './App.css';
import NavBar from "./componentes/NavBar";
import {Outlet} from "react-router";

function App() {
  return (
      <>
        <NavBar />
        <Outlet />
      </>
  );
}

export default App;
