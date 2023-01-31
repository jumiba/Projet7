import {Header} from "../components/Header.js";
import {Logements} from "../components/Caroussel.js";
import imgA from "../assets/Vector-A.png";

export function Home ()
{
        return<div>
            <Header />
            <img src={imgA} alt="A"/>
            <div id="banner">
                <h2 className="test">chez vous, partout et ailleurs</h2>
                <img className="img-1" alt="title"></img>
            </div>
            <div id="List">
                <div className="list-1" title="title" image="cover"></div>
            </div>
            <Logements />
        </div> 
    }
/*l'image devra etre charger en background sur le style*/
/*import React, {Component} from 'react';*/