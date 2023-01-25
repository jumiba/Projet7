import React, {Component} from 'react';

export class TextBox extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            checked:true
        }
        this.showText = this.showText.bind(this)
    }

    showText(e)
    {
    this.setState({checked : e.target.checked})
    }

    render()
    {
        return<div>
            <label htmlFor="title">{this.props.title}</label>
            <input type="checkbox" checked={this.state.checked} onChange={this.showText}/>
            {this.state.checked ? <div>{this.props.message}</div> : null}
        </div>
    }
}