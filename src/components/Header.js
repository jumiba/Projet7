/*Importation des lettres*/
import imgA from "../assets/Vector-A.png";
import imgH from "../assets/Vector-Home.png";
import imgK from "../assets/Vector-K.png";
import imgS from "../assets/Vector-S.png";

/*Importation des fonctions link et component de react et react router*/
import { Link } from "react-router-dom";
import {Component} from 'react';

/*Class Header pour faire le changement d'etat de navigation en fontion de l'adresse*/
export class Header extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={classname: null}
    }

    render()
    {
        return<div className="Header">
             <div className="Header-1">
                <img src={imgK} alt="K" className="Header-1-K"/>
                <img src={imgH} alt="H" className="Header-1-L"/>
                <img src={imgS} alt="S" className="Header-1-L"/>
                <img src={imgA} alt="A" className="Header-1-L"/>
            </div>
            <nav className="Header-2">
                <Link to="/" className={this.props.class1}>Accueil</Link>
                <Link to="/a-propos" className={this.props.class2}>A Propos</Link>
            </nav>
        </div> 
    }
}