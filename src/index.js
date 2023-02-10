/*Importation des fonctionnalités de react et react router*/
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Link } from "react-router-dom";

/*Importation des pages du sites*/
import {Home} from "./pages/Home.js";
import { APropos } from "./pages/A-Propos.js";
import {PageError} from "./pages/404.js";
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

/*Fonctions Link pour la navigation entre les pages*/

export function LinkNav()
{
    return<div>
        <nav className="Header-2">
            <Link to="/" className="Header-2-1">Accueil</Link>
            <Link to="/a-propos" className="Header-2-2">A Propos</Link>
        </nav>
    </div> 
}

export function LinkErr()
{
    return<div>
            <Link to={"/"} className="Erreur-l">
                <p className="Erreur-a">Retourner sur la page d'accueil</p>
            </Link>
    </div> 
}

export function LinkHome({logement}) 
{
    return (
        <Link to={"/logements/" + logement.id}>
        <div className="Home-card">
            <img src={logement.cover} alt="cover" className="CoverH"/>
            <span className="titleH">{logement.title}</span>
        </div>
    </Link>
    )
}