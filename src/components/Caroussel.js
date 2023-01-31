import json from "../datas/logements.json";
import Card from "./card.js"

export function Logements()
{
    return (
        <div>
            <h1>Titre</h1>
            {json.map((json, index) => (
                <Card
                    key={`${json.id}-${index}`}
                    label={json.description}
                    picture={json.cover}
                    title={json.title}
                />
            ))}
        </div>
    )
}