import { Outlet} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {

  return (
    <>
      <header>
      </header>
        <Outlet />
      <footer>
        <p>©️Copyright </p>
      </footer>
    </>
  );
};

export default Root;
