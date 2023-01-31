import PropTypes from 'prop-types'

function Card({ label, title, picture }) 
{
    return (
        <div className="collapse">
            <span>{label}</span>
            <img src={picture} alt="imageu"/>
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}

export default Card