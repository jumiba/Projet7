import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({logement}) 
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

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card