import { Link } from 'react-router-dom';

function Logement({logement}) 
{
    return (
        <Link to={"/logements/" + logement.id}>
            <div className="Home-card">
                <span className="titleH">{logement.title}</span>
                <img src={logement.cover} alt="cover" className="CoverH"/>
            </div>
        </Link>
    )
}

export default Logement