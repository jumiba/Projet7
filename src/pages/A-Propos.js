import React, {Component} from 'react';
import {TextBox} from '../components/Text-box.js';

export class APropos extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            title:undefined,
            message:undefined
        }
    }

    render()
    {
        return <div>
            <div>
        <TextBox 
        title="Fiabilité" 
        message="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        </div>
        <br/>
        <div Text-box="Text-box">
        Respect
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </div>
        <div Text-box="Text-box">
        Service
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </div>
        <div Text-box="Text-box">
        Sécurité
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </div>
    </div>
    }
}