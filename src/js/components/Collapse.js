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
        this.state = {checked:false}
        this.showText = this.showText.bind(this)
    }

    showText(e)
    {
    this.setState({checked : e.target.checked})
    }

    render()
    {
        return<div className="Textbox">
            <label htmlFor="title" className={this.props.Textboxtitle}>{this.props.title}</label>
            <label htmlFor="title" className={this.props.Textboxtitle1}>{this.props.title1}</label>
            <label htmlFor="title" className={this.props.Textboxtitle2}>{this.props.title2}</label>
            {
                this.state.checked
                ? 
                <div>
                    <img src={chevB} alt="K" className={this.props.Textboxchev}/>
                    <p className={this.props.Textboxtext}>{this.props.message}</p>
                </div>
                :
                <div>
                    <img src={chevH} alt="K" className={this.props.Textboxchev}/>
                </div>
            }
            <input type="checkbox" className={this.props.Checkbox} checked={this.state.checked} onChange={this.showText}/>
        </div>
    }
}