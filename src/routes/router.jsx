import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./home/Home"
import Wands from "./wands/Wands"
import Characters from "./characters/Characters"

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