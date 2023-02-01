import PropTypes from 'prop-types'

function Card({ id, title, cover}) 
{
    return (
        <div className="Home-card">
            <span className="idH">{id}</span>
            <span className="titleH">{title}</span>
            <img src={cover} alt="cover" className="CoverH"/>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card