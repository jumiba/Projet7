/*Importation des fonctions*/
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {TextBox} from '../components/Collapse.js';
import {Carrousel} from "../components/Carrousel.js";


/*Importation des informations des logements et de useparams pour récupérer l'id*/
import json from "../datas/logements.json";
import { useParams } from "react-router-dom";

/*Fonction fiche-logement pour l'affichage du logement demander en id*/
export function FicheLogement ()
{
    const {id} = useParams();
    const Liste = json.find((C) => C.id === id);
    return<div>
        <Header />
        <div className="FicheLogement">
            <Carrousel />
            <div className="Loge-box-1">
                <div className="Loge-title">
                    <p className="Loge-title-1">{Liste.title}</p>
                    <p className="Loge-location">{Liste.location}</p>
                </div>
                <div className="Loge-name">
                    <p className="Loge-host-1">{Liste.host.name}</p>
                    <img src={Liste.host.picture} alt="Loge-host-2" className="Loge-host-2"/>
                </div>
            </div>
            <div className="Loge-box-2">
                <div className="Loge-tags">{/*Tags*/}</div>
                <div className="Loge-host-1">{/*Stars*/}</div>
            </div>
            <div className="Loge-AP">
                <div className="AP1">
                    <TextBox 
                    title="Description" 
                    message={Liste.description}
                    />
                </div>
                <div className="AP2">
                    <TextBox 
                    title="Équipements" 
                    message={Liste.equipments}
                    />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}