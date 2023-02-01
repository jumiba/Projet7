/*Importation des informations des logements*/

import json from "../datas/logements.json";
import Card from "../components/Card-Home.js"

/*Importation des fonctions*/
import {Header} from "../components/Header.js";

/*Importation des images*/
import B1 from "../assets/background-Home.jpg";

/*Importation du styles sass*/
import '../sass/main.scss'

/*Fonction Home*/
export function Home ()
{
    return<div>
        <Header />
        <div className="Home-1">
            <img src={B1} alt="Background-Home" className="Home-B"/>
            <h1 className="Home-H">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="Home-2">
            {json.map((json, index) => (<Card key={`${json.id}-${index}`} title={json.title} cover={json.cover}/>))}
        </div>
    </div> 
}

/*You can provide a way better UX than this when your app throws errors by providing your own errorElement props on <Route>*/