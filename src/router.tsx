import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Context from "./Pages/Context";
import Redux from "./Pages/Redux";
import Zustand from "./Pages/Zustand";

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
