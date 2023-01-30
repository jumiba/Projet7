import { Link } from "react-router-dom"

export function Header()
{
    return<div>
        <h1 className="title-1">Kasa</h1>
        <a className="btn-1" href="*">Accueil</a>
        <a className="btn-1" href="*">A Propos</a>
    </div> 
}

export function Lien()
{
    return(
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">A Propos</Link>
        </nav>
    )
}