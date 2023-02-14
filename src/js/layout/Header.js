/*Importation de la fonction LinkHeader*/
import {LinkHeader} from "../components/Links.js";

/*Importation des lettres*/
import imgA from "../assets/Vector-A.png";
import imgH from "../assets/Vector-Home.png";
import imgK from "../assets/Vector-K.png";
import imgS from "../assets/Vector-S.png";

/*function Header*/
export function Header(props)
{
    return<div className="Header">
        <div className="Header-1">
            <img src={imgK} alt="K" className="Header-1-K"/>
            <img src={imgH} alt="H" className="Header-1-L"/>
            <img src={imgS} alt="S" className="Header-1-L"/>
            <img src={imgA} alt="A" className="Header-1-L"/>
        </div>
        <LinkHeader class1={props.class1} class2={props.class2}/>
    </div> 
}