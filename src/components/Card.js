import PropTypes from 'prop-types'

function Card({ id, title, cover, pictures, description, rating, location, equipments, tags}) 
{
    return (
        <div>
            <span className="id">{id}</span>
            <span className="title">{title}</span>
            <img src={cover} alt="cover" className="CoverH"/>
            <span className="pictures">{pictures}</span>
            <span className="description">{description}</span>
            <span className="rating">{rating}</span>
            <span className="location">{location}</span>
            <span className="equipments">{equipments}</span>
            <span className="tags">{tags}</span>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    pictures: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    location: PropTypes.string,
    equipments: PropTypes.string,
    tags: PropTypes.string,
}

export default Card