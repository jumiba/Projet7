/*Importation de la fonction link de react*/
import { Link } from "react-router-dom";

/*Fonction LinkHome*/
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