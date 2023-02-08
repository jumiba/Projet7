import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import json from "../datas/logements.json";

export function Carrousel()
{
  const [Loge, setLoge] = useState(0);

  const {id} = useParams();
  const Liste = json.find((C) => C.id === id);

  return<div>
      <button onClick={() => Loge===(Liste.pictures.length-1) ? setLoge(Loge - Liste.pictures.length+1) : setLoge(Loge + 1) }>
      Suivant
      </button>
      <button onClick={() => Loge===0 ? setLoge(Loge + (Liste.pictures.length-1)) : setLoge(Loge - 1)}>
      Precedent
      </button>
      <img src={Liste.pictures[Loge]} alt="Background-Loge" className="Loge-B"/>
      <div>{console.log(Loge)}</div>
    </div>
}

