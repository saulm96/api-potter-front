import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home"
import Wands from "./Wands"
import Characters from "./Characters"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "wands",
        element: <Wands />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
    ],
  },
]);

export default router;