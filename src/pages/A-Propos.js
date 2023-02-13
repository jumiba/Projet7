/*Importation des fonctions*/
import {TextBox} from '../components/Collapse.js';
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";

/*Importation des images*/
import B2 from "../assets/background-Apropos.jpg";

/*Fonction Apropos*/
export function APropos()
{
    return <div>
        <Header class1="Header-2-1" class2="Header-2-2-A"/>
        <div className="Apropos">
            <div className="banniere-AP">
                <img src={B2} alt="Background-Apropos" className="Apropos-B"/>
            </div>
            <div className="Body-AP">
                <TextBox 
                Texttitle="Textbox-title"
                Textchev="chev"
                Texttext="Textbox-text"
                title="Fiabilité" 
                message="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <br/>
                <TextBox 
                Texttitle="Textbox-title"
                Textchev="chev"
                Texttext="Textbox-text"
                title="Respect" 
                message="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <br/>
                <TextBox
                Texttitle="Textbox-title"
                Textchev="chev"
                Texttext="Textbox-text"
                title="Service" 
                message="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <br/>
                <TextBox
                Texttitle="Textbox-title"
                Textchev="chev"
                Texttext="Textbox-text"
                title="Sécurité"
                message="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    <Footer/>
    </div>
}