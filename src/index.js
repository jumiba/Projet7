import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Home} from "./pages/Home.js";
import { APropos } from "./pages/A-Propos.js";
import {PageError} from "./pages/404.js";
import {FicheLogement} from "./pages/Fiche-logement.js";

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
  {
    path: "/logements/:id" ,
    element: <FicheLogement />,
    children: []
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

/*useeffect , fonction de callback filter tout sauf ce qui est valide*/