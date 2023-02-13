/*Importation des fonctions*/
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";

/*Importation de la fonction link de react*/
import { Link } from "react-router-dom";

/*Fonction De la page d'erreur*/
export function PageError()
{
    return<div>
        <Header class1="Header-2-1" class2="Header-2-2"/>
        <div className="Erreur">
            <h1 className="Erreur-1">404</h1>
            <p className="Erreur-p">Oups! La page que vous demander n'existe pas.</p>
        </div>
            <Link to={"/"} className="Erreur-l">
                <p className="Erreur-a">Retourner sur la page d'accueil</p>
            </Link>
        <Footer />
    </div> 
}