/*Importation des fonctionnalités de react et des données*/
import { useParams } from "react-router-dom";
import json from "../utils/logements.json";

/*Fonction Tags*/
export function Tags()
{
    /*Variables*/
	const {id} = useParams();
	const Liste = json.find((C) => C.id === id);
    const listtags = Liste.tags.map((tags) =>
    <div className="Tags-box" key={tags}>
        <div className="Tags-list">
            {tags}
        </div>
    </div>);

    /*intégration*/
    return<div className="Tags">
        {listtags}
    </div>
}