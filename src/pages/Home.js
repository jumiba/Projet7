import React, {Component} from 'react';

import logements from "../datas/logements.json"

export class Home extends Component
{
    constructor (props)
    {
        super(props)
        console.log(logements)
        this.title = this.title.bind(this)
        this.image = this.image.bind(this)
    }


    title()
    {
        this.setState("title")
    }

    image()
    {
        this.setState("cover")
    }


    render()
    {
        return<div>
            <div id="banner">
                <h2 className="title-2">chez vous, partout et ailleurs</h2>
                <img className="img-1" alt="title"></img>
            </div>
            <div id="List">
                <div className="list-1" title="title" image="cover"></div>
            </div>
        </div> 
    }
}
/*l'image devra etre charger en background sur le style*/