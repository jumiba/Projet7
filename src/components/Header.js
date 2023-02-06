/*Importation du routeur*/
import { Link } from "react-router-dom";

/*Importation des lettres*/
import imgA from "../assets/Vector-A.png";
import imgH from "../assets/Vector-Home.png";
import imgK from "../assets/Vector-K.png";
import imgS from "../assets/Vector-S.png";

/*Fonction Header*/
export function Header()
{
    return<div className="Header">
        <div className="Header-1">
        <img src={imgK} alt="K" className="Header-1-K"/>
        <img src={imgH} alt="H" className="Header-1-L"/>
        <img src={imgS} alt="S" className="Header-1-L"/>
        <img src={imgA} alt="A" className="Header-1-L"/>
        </div>
        <nav className="Header-2">
            <Link to="/" className="Header-2-1">Accueil</Link>
            <Link to="/a-propos" className="Header-2-2">A Propos</Link>
        </nav>
    </div> 
}