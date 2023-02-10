/*Importation des fonctions*/
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";

/*Importation de Lien*/
import {LinkErr} from "../index.js";

/*Fonction De la page d'erreur*/
export function PageError()
{
    return<div>
        <Header />
        <div className="Erreur">
            <h1 className="Erreur-1">404</h1>
            <p className="Erreur-p">Oups! La page que vous demander n'existe pas.</p>
            <LinkErr />
        </div>
        <Footer />
    </div> 
}