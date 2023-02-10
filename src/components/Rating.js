/*Importation des informations des logements et de useparams pour récupérer l'id*/
import json from "../datas/logements.json";
import { useParams } from "react-router-dom";

/*Fonction Rating pour l'affichage des étoiles*/
export function Rating ()
{
	const {id} = useParams();
    const Liste = json.find((C) => C.id === id);
    const EtoileVide = <img src="" className="E-Vide"/>;
    const EtoilePleine = <img src="" className="E-Pleine"/>;
    return<div className="Loge-Rating">
        {Liste.rating === 1 ? <img src=""/> : null }
        {Liste.rating === 2 ? <img src=""/> : null }
        {Liste.rating === 3 ? <img src=""/> : null }
        {Liste.rating === 4 ? <img src=""/> : null }
        {Liste.rating === 5 ? <img src=""/> : null }
    </div>
}