/*L'index est le routeur du site*/

/*Importation des fonctionnalités de react, react router et de sass*/
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./sass/main.scss";

/*Importation des pages du sites*/
import {Home} from "./js/pages/Home.js";
import { APropos } from "./js/pages/A-Propos.js";
import {PageError} from "./js/pages/Error.js";
import {FicheLogement} from "./js/pages/Fiche-logement.js";

/*Importation des informations des logements*/
import json from "./js/utils/logements.json";

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
        path: "/logements/:id",
        element: <FicheLogement />,
        errorElement: <PageError />,
        loader: ({ params }) =>
        {
            const JsonId = json.find((C) => C.id === params.id);
            if(params.id !== JsonId.id)
            {
                throw new Response("Not Found", { status: 404 });  
            }
            return params
        },
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