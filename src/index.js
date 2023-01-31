import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Home} from "./pages/Home.js";
import { APropos } from "./pages/A-Propos.js";
import {PageError} from "./pages/404.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/a-propos",
    element: <APropos />,
    children: []
  },
  {
    path: "/Error",
    element: <PageError />,
    children: []
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);