/*Importation des fonctionnalités de react*/
import React, { useState } from 'react';
import { useParams } from "react-router-dom";

/*Importation des informations des logements*/
import json from "../datas/logements.json";

/*Importation des chevrons*/
import imgCD from "../assets/chevron-droit.png";
import imgCG from "../assets/chevron-gauche.png";

/*Fonction Carrousel pour l'enchainement des images d'un logement*/
export function Carrousel()
{
	const [Loge, setLoge] = useState(0);
	const {id} = useParams();
	const Liste = json.find((C) => C.id === id);

	return<div>
		<img src={Liste.pictures[Loge]} alt="Background-Loge" className="Loge-B"/>
		<div className="Carrousel">
			<div className="Chevr">
				<img src={imgCD} className="Chevr-D" alt="Chevr-D"/>
				<button className="Chevr-BD" onClick={() => Loge===(Liste.pictures.length-1) ? setLoge(Loge - Liste.pictures.length+1) : setLoge(Loge + 1) }>
				S
				</button>
			</div>
			<div className="Chevr">
				<img src={imgCG} alt="Chevr-G" className="Chevr-G"/>
				<button className="Chevr-BG" onClick={() => Loge===0 ? setLoge(Loge + (Liste.pictures.length-1)) : setLoge(Loge - 1)}>
				P
				</button>
			</div>
		</div>
	</div>
}

