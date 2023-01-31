import { Link } from "react-router-dom"
import imgA from "../assets/Vector-A.png";

export function Header()
{
    return<div>
        <div>
        <img src={imgA} alt="A"/>
        image
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">A Propos</Link>
        </nav>
    </div> 
}