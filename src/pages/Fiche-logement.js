/*Importation des fonctions*/
import {TextBox} from '../components/Collapse.js';
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";

/*Importation des informations des logements*/
import json from "../datas/logements.json";

import { useParams } from "react-router-dom";

export function FicheLogement ()
{
    const {id} = useParams();
    const Liste = json.find((C) => C.id === id);
    console.log(Liste);
    return<div>
        <Header />
        <img src={Liste.pictures[0]} alt="Background-Loge" className="Loge-B"/>
        <div className="Loge-box-1">
            <h1 className="Loge-title">{Liste.title}</h1>
            <p className="Loge-host-1">{Liste.host.name}</p>
            <img src={Liste.host.picture} alt="Loge-host-2" className="Loge-host-2"/>
        </div>
        <p className="Loge-location">{Liste.location}</p>
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
        <Footer />
    </div>
}