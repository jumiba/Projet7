
import { Link } from 'react-router-dom'

/*Importation des fonctions*/
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";

export function PageError()
{
    return<div>
        <Header />
        <div className="Erreur">
            <h1 className="Erreur-1">404</h1>
            <p className="Erreur-p">Oups! La page que vous demander n'existe pas.</p>
            <Link to={"/"} className="Erreur-l">
                <p className="Erreur-a">Retourner sur la page d'accueil</p>
            </Link>
        </div>
        <Footer />
    </div> 
}