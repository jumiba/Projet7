/*Importation des lettres*/
import imgAW from "../assets/Vector-A-W.png";
import imgHW from "../assets/Vector-Home-W.png";
import imgKW from "../assets/Vector-K-W.png";
import imgSW from "../assets/Vector-S-W.png";

/*Fonction Footer*/
export function Footer()
{
    return<div className="Footer">
        <div className="Footer-1">
            <img src={imgKW} alt="K" className="Footer-1-K"/>
            <img src={imgHW} alt="H" className="Footer-1-L"/>
            <img src={imgSW} alt="S" className="Footer-1-L"/>
            <img src={imgAW} alt="A" className="Footer-1-L"/>
        </div>
        <p className="Footer-p">© 2020 Kasa. All rights reserved</p>
    </div> 
}