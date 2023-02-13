/*Importation des fonctionnalités de react*/
import { useParams } from "react-router-dom";

/*Importation des informations des logements*/
import json from "../datas/logements.json";

/*Fonction Tags*/
export function Tags()
{
	const {id} = useParams();
	const Liste = json.find((C) => C.id === id);
    const listtags = Liste.tags.map((tags) =>
    <div className="Tags-box" key={tags}>
        <div className="Tags-list">
            {tags}
        </div>
    </div>);

    return<div className="Tags">
        {listtags}
    </div>
}