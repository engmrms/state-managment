import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Context from "./Components/Context";
import Redux from "./Components/Redux";
import Zustand from "./Components/Zustand";

const router: RouteObject[] = [
  {
    path: "/",
    element: <Context />,
  },
  {
    path: "/redux",
    element: <Redux />,
  },
  {
    path: "/zustand",
    element: <Zustand />,
  },
];

export default createBrowserRouter(router);
