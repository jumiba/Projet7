export class FicheLogement extends Component
{
    constructor (props)
    {
        super(props)
        this.logement = this.logement.bind(this)
    }


    logement()
    {
    console.log("logement")
    }

    render()
    {
        return<div>
            <div className="img-2" Array="pictures"></div>
            <h4 className="title-3" Title="title"></h4>
            <p className="text-1" location="location"></p>
            <div Tag-name="Tag-name"></div>
            <div Text-box="Text-box"></div>
        </div> 
    }
}