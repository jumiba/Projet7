/*L'index est le routeur du site*/

/*Importation des fonctionnalités de react et react router*/
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

/*Importation des pages du sites*/
import {Home} from "./pages/Home.js";
import { APropos } from "./pages/A-Propos.js";
import {PageError} from "./pages/Error.js";
import {FicheLogement} from "./pages/Fiche-logement.js";

/*Routers du site*/
const router = createBrowserRouter
([
    {
        path: "/",
        element: <Home />,
        errorElement: <PageError />,
        children: [],
    },
    {
        path: "/a-propos",
        element: <APropos />,
        errorElement: <PageError />,
        children: []
    },
    {
        path: "/logements/:id" ,
        element: <FicheLogement />,
        errorElement: <PageError />,
        children:[]
    },
    {
        path: "/Error",
        element: <PageError />,
        children: [],
    },
]);

/*Appel des routers du sites avec reactDOM, liaison avec le HTML*/
ReactDOM.createRoot(document.getElementById("root")).render
(
    <RouterProvider
    router={router}/>
);