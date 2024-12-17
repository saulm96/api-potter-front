import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>©️Copyright </p>
      </footer>
    </>
  );
};

export default Root;
