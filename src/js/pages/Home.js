/*Importation des informations des logements et du style*/
import json from "../utils/logements.json";

/*Importation des fonctions*/
import {Header} from "../layout/Header.js";
import {Footer} from "../layout/Footer.js";
import {LinkHome} from "../components/Links.js"

/*Importation des images*/
import B1 from "../assets/background-Home.jpg";

/*Fonction Home*/
export function Home ()
{
    return<div>
        <Header class1="Header-2-1-H" class2="Header-2-2"/>
        <div className="Home">
            <div className="Home-1">
                <img src={B1} alt="Background-Home" className="Home-B"/>
                <h1 className="Home-H">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="Home-2">
            {json.map((json) => (<LinkHome key={json.id} logement={json}/>))}
            </div>
        </div>
        <Footer />
    </div> 
}