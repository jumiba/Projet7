import { Link } from "react-router-dom"
/*import pngK from "../assets/Vector-K.png"
import pngH from "../assets/Vector-Home.png"
import pngA from "../assets/Vector-A.png"*/

export function Header()
{
    return<div>
        <div>
        <img src="C:\Users\zujos\Documents\Projet7\src\assets\logo-application.png"alt="logo-1" className="logo-1"></img>
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">A Propos</Link>
        </nav>
    </div> 
}
/*
export function Lien()
{
    return(

    )
}*/