
/*Importation des fonctions*/
import {Header} from "../components/Header.js";

export function PageError()
{
    return<div>
        <Header />
        <h1 className="title-4">404</h1>
        <p className="text-2">Oups! La page que vous demander n'existe pas</p>
        <a className="btn-2" href="*">Retourner sur la page d'accueil</a>
    </div> 
}