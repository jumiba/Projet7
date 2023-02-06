import {TextBox} from '../components/Text-box.js';

/*Importation des fonctions*/
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";

export function APropos()
{
    return <div>
        <Header />
        <div className="Apropos">
            <TextBox 
            title="Fiabilité" 
            message="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />
            <br/>
            <TextBox 
            title="Respect" 
            message="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <br/>
            <TextBox 
            title="Service" 
            message="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <br/>
            <TextBox 
            title="Sécurité"
            message="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
        </div>
    <Footer/>
    </div>
}