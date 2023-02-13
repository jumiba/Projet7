/*Importation des fonctions*/
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {TextBox} from '../components/Collapse.js';
import {Carrousel} from "../components/Carrousel.js";
import {Tags} from "../components/Tags.js";


/*Importation des informations des logements et de useparams pour récupérer l'id*/
import json from "../datas/logements.json";
import { useParams } from "react-router-dom";

/*Fonction fiche-logement pour l'affichage du logement demander en id*/
export function FicheLogement ()
{
    const {id} = useParams();
    const Liste = json.find((C) => C.id === id);
    const nom = Liste.host.name.split(' ');
    const listItems = Liste.equipments.map((item) => <li key={item}>{item}</li>);
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
                    <img src={Liste.host.picture} alt="Loge-host-2" className="Loge-host-2"/>
                </div>
            </div>
            <div className="Loge-box-2">
                <Tags/>
                <div className="Loge-stars">{/*Stars*/}</div>
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
