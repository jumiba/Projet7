/*Importation des fonctions*/
import {Header} from "../layout/Header.js";
import {Footer} from "../layout/Footer.js";
import {LinkError} from "../components/Links.js";

/*Fonction De la page d'erreur*/
export function PageError()
{
    return<div>
        <Header class1="Header-2-1" class2="Header-2-2"/>
        <div className="Erreur">
            <h1 className="Erreur-1">404</h1>
            <p className="Erreur-p">Oups! La page que vous demander n'existe pas.</p>
        </div>
        <LinkError/>
        <Footer />
    </div> 
}