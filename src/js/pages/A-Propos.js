/*Importation des fonctions*/
import {TextBox} from "../components/Collapse.js";
import {Header} from "../layout/Header.js";
import {Footer} from "../layout/Footer.js";

/*Importation des images*/
import B2 from "../assets/background-kalen-emsley.jpg";

/*Fonction Apropos*/
export function APropos()
{
    return<div>
        <Header class1="Header-2-1" class2="Header-2-2-A"/>
        <div className="Apropos">
            <div className="banniere-AP">
                <img src={B2} alt="Background-Apropos" className="Apropos-B"/>
            </div>
            <div className="Body-AP">
                <TextBox 
                Textboxtitle="AP-Textbox-title"
                Textboxchev="AP-Textbox-chev"
                Textboxtext="AP-Textbox-text"
                Checkbox="AP-Checkbox"
                title="Fiabilité" 
                message="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <TextBox 
                Textboxtitle="AP-Textbox-title"
                Textboxchev="AP-Textbox-chev"
                Textboxtext="AP-Textbox-text"
                Checkbox="AP-Checkbox"
                title="Respect" 
                message="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <TextBox
                Textboxtitle="AP-Textbox-title"
                Textboxchev="AP-Textbox-chev"
                Textboxtext="AP-Textbox-text"
                Checkbox="AP-Checkbox"
                title="Service" 
                message="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <TextBox
                Textboxtitle1="AP-Textbox-title1"
                Textboxtitle2="AP-Textbox-title2"
                Textboxchev="AP-Textbox-chev"
                Textboxtext="AP-Textbox-text"
                Checkbox="AP-Checkbox"
                title1="Responsabilité"
                title2="Sécurité"
                message="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
        <Footer/>
    </div>
}