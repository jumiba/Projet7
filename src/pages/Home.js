/*Importation des informations des logements*/
import json from "../datas/logements.json";

/*Importation des fonctions*/
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {LinkHome} from "../components/LinkHome.js"

/*Importation des images*/
import B1 from "../assets/background-Home.jpg";

/*Importation du styles sass*/
import '../sass/main.scss'

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