import json from "../datas/logements.json";
import Card from "./Card.js"

export function Logements()
{
    return (
        <div>
            <h1>Tout les logements</h1>
            {json.map((json, index) => (
                <Card
                    key={`${json.id}-${index}`}
                    id={json.id}
                    title={json.title}
                    cover={json.cover}
                    pictures={json.pictures}
                    description={json.description}
                    rating={json.rating}
                    location={json.location}
                    equipments={json.equipments}
                    tags={json.tags}
                />
            ))}
        </div>
    )
}