/*Importation des informations des logements et de useparams pour récupérer l'id*/
import json from "../utils/logements.json";
import { useParams } from "react-router-dom";

/*Importation des etoiles*/
import imgEP from "../assets/star.png";
import imgEV from "../assets/star-empty.png";

/*Fonction Rating pour l'affichage des étoiles*/
export function Rating ()
{
    /*Variables*/
	const {id} = useParams();
    const Liste = json.find((C) => C.id === id);
    const EtoileVide = <img alt="EtoileVide" src={imgEV} className="E-Vide"/>;
    const EtoilePleine = <img alt="EtoilePleine" src={imgEP} className="E-Pleine"/>;

    /*Variables de rang (rating) de 1 à 5*/
    const Etoile5 = Liste.rating === "5" ? <div className="etoiles">{EtoilePleine} {EtoilePleine} {EtoilePleine} {EtoilePleine} {EtoilePleine}</div>: null;
    const Etoile4 = Liste.rating === "4" ? <div className="etoiles">{EtoilePleine} {EtoilePleine} {EtoilePleine} {EtoilePleine} {EtoileVide}</div>: null ;
    const Etoile3 = Liste.rating === "3" ? <div className="etoiles">{EtoilePleine} {EtoilePleine} {EtoilePleine} {EtoileVide} {EtoileVide}</div>: null ;
    const Etoile2 = Liste.rating === "2" ? <div className="etoiles">{EtoilePleine} {EtoilePleine} {EtoileVide} {EtoileVide} {EtoileVide}</div>: null ;
    const Etoile1 = Liste.rating === "1" ? <div className="etoiles">{EtoilePleine} {EtoileVide} {EtoileVide} {EtoileVide} {EtoileVide}</div>: null ;

    /*intégration*/
    return<div className="Loge-Rating">
        {Etoile1}{Etoile2}{Etoile3}{Etoile4}{Etoile5}
    </div>
}