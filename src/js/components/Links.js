/*Importation de la fonction link de react*/
import {Link} from "react-router-dom";

/*Fonction LinkHeader*/
export function LinkHeader(props)
{
    return<nav className="Header-2">
        <Link to="/" className={props.class1}>Accueil</Link>
        <Link to="/a-propos" className={props.class2}>A Propos</Link>
    </nav>
}

/*Fonction LinkHome*/
export function LinkHome({logement}) 
{
    return (
        <Link to={"/logements/" + logement.id} className="Home-card">
                <img src={logement.cover} alt="cover" className="CoverH"/>
                <span className="titleH">{logement.title}</span>
        </Link>
    )
}

/*Fonction LinkError*/
export function LinkError()
{
    return<div className="Erreur-div">
        <Link to={"/"} className="Erreur-l">
            <p className="Erreur-a">Retourner sur la page d'accueil</p>
        </Link>
    </div>
}