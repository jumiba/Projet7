import React, {Component} from 'react';

export class Header extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return<div>
            <h1>Kasa</h1>
            <h3>Accueil</h3>
            <h3>A Propos</h3>
        </div>
    }
}