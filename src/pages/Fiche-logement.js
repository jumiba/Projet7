import { useParams } from "react-router-dom"

/*const idid = if(!id )*/
export function FicheLogement ()
{
    const {id} = useParams();
    alert(id);
    return<div>
        <div className="img-2" Array="pictures"></div>
        <h4 className="title-3" Title="title">titre4</h4>
        <p className="text-1" location="location"></p>
        <div Tag-name="Tag-name"></div>
        <div Text-box="Text-box"></div>
    </div> 
}