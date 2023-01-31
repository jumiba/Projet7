import PropTypes from 'prop-types'

function Card({ id, title, cover, pictures, description, rating, location, equipments, tags}) 
{
    return (
        <div className="collapse">
            <span>{id}</span>
            <span>{title}</span>
            <span>{pictures}</span>
            <span>{description}</span>
            <span>{rating}</span>
            <span>{location}</span>
            <span>{equipments}</span>
            <span>{tags}</span>
            <img src={cover} alt="cover" height={100} width={100}/>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    pictures: PropTypes.array,
    description: PropTypes.string,
    rating: PropTypes.number,
    location: PropTypes.string,
    equipments: PropTypes.array,
    tags: PropTypes.array,
}

export default Card

/*
"id"
"title"
"cover"
"pictures"
"description"
"host": {
    "name"
    "picture"
}
"rating"
"location"
"equipments"
"tags"
*/