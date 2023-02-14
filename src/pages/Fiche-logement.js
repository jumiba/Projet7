/*Importation des informations des logements et de useparams pour récupérer l'id*/
import json from "../utils/logements.json";
import { useParams } from "react-router-dom";

/*Importation des fonctions*/
import {Header} from "../layout/Header.js";
import {Footer} from "../layout/Footer.js";
import {TextBox} from '../components/Collapse.js';
import {Carrousel} from "../components/Carrousel.js";
import {Tags} from "../components/Tags.js";
import {Rating} from "../components/Rating.js";

/*Importation de l'image de profil par défaut*/
import pp from "../assets/profile.png";

/*Fonction fiche-logement lier à l'id demander*/
export function FicheLogement ()
{
    /*Variables*/
    const {id} = useParams();
    const Liste = json.find((C) => C.id === id);
    const nom = Liste.host.name.split(' ');
    const listItems = Liste.equipments.map((item) => <li key={item}>{item}</li>);

    /*intégration*/
    return<div>
        <Header class1="Header-2-1" class2="Header-2-2"/>
        <div className="FicheLogement">
            <Carrousel />
            <div className="Loge-box-1">
                <div className="Loge-title">
                    <p className="Loge-title-1">{Liste.title}</p>
                    <p className="Loge-location">{Liste.location}</p>
                </div>
                <div className="Loge-per">
                    <div className="Loge-name">
                        <p className="Loge-host-1-1">{nom[0]}</p>
                        <p className="Loge-host-1-2">{nom[1]}</p>
                    </div>
                    <img src={Liste.host.picture ? Liste.host.picture : {pp}} alt="Loge-host-2" className="Loge-host-2"/>
                </div>
            </div>
            <div className="Loge-box-2">
                <Tags/>
                <Rating/>
            </div>
            <div className="Loge-AP">
                <div className="AP1">
                    <TextBox
                    Texttitle="Textbox-title-fl"
                    Textchev="chev"
                    Texttext="Textbox-text-fld"
                    title="Description" 
                    message={Liste.description}
                    />
                </div>
                <div className="AP2">
                    <TextBox
                    Texttitle="Textbox-title-fl"
                    Textchev="chev"
                    Texttext="Textbox-text-fld"
                    title="Équipements" 
                    message={listItems}
                    />    
                </div>
            </div>
        </div>
        <Footer />
    </div>
}
