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
                <p className="Loge-title">{Liste.title}</p>
                <div className="Loge-per1">
                    <div className="Loge-name">
                        <p className="Loge-host-1-1">{nom[0]}</p>
                        <p className="Loge-host-1-2">{nom[1]}</p>
                    </div> 
                    <img src={Liste.host.picture ? Liste.host.picture : {pp}} alt="Loge-host-2" className="Loge-host-2"/>
                </div>
            </div>
            <p className="Loge-location">{Liste.location}</p>
            <div className="Loge-box-2">
                <Tags/>
                <Rating Rating="Rating1"/>
            </div>
            <div className="Loge-per2">
                <Rating Rating="Rating2"/>
                <div className="Loge-per2-2">
                    <div className="Loge-name">
                        <p className="Loge-host-1-1">{nom[0]}</p>
                        <p className="Loge-host-1-2">{nom[1]}</p>
                    </div> 
                    <img src={Liste.host.picture ? Liste.host.picture : {pp}} alt="Loge-host-2" className="Loge-host-2"/>
                </div>
            </div>
            <div className="Loge-FL">
                <div className="FL1">
                    <TextBox
                    Textboxtitle="FL-Textbox-title"
                    Textboxchev="FL-Textbox-chev"
                    Textboxtext="FL-Textbox-text"
                    Checkbox="FL-Checkbox"
                    title="Description" 
                    message={Liste.description}
                    />
                </div>
                <div className="FL2">
                    <TextBox
                    Textboxtitle="FL-Textbox-title"
                    Textboxchev="FL-Textbox-chev"
                    Textboxtext="FL-Textbox-text"
                    Checkbox="FL-Checkbox"
                    title="Équipements" 
                    message={listItems}
                    />    
                </div>
            </div>
        </div>
        <Footer />
    </div>
}
