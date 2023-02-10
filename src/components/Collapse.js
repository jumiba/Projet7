/*Importation des fonctionnalités de react*/
import React, {Component} from 'react';

/*Importation des chevrons*/
import chevB from "../assets/chevron-bas.png";
import chevH from "../assets/chevron-haut.png";

/*Class Textbox pour faire le collapse*/
export class TextBox extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            checked:false
        }
        this.showText = this.showText.bind(this)
    }

    showText(e)
    {
    this.setState({checked : e.target.checked})
    }

    render()
    {
        return<div className="Textbox">
            <label htmlFor="title" className="Textbox-box"><p className="Textbox-title">{this.props.title}</p></label>
            {this.state.checked ? 
            <div className="B"> <img src={chevB} alt="K" className="chev"/> <p className="Textbox-text">{this.props.message}</p></div>
            : <div className="B"><img src={chevH} alt="K" className="chev"/></div>}
            <input type="checkbox" className="Checkbox" checked={this.state.checked} onChange={this.showText}/>
        </div>
    }
}