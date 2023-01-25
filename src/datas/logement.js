function Logement ()
{
    const Donnees = JSON.parse("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json");
    console.log(Donnees);
    fetch(Donnees)
    .then
    (
        Logements => 
        {
            for(let L = 0; L < Donnees.length; L++)
            {
                let LogementID = Donnees[L].id;
                console.log(LogementID);
            }
        }
    )
    console.log(Donnees);
}

export default Logement;