import {Header} from "../components/Header.js";
import {Logements} from "../components/Logements.js";
import '../sass/main.scss'

export function Home ()
{
    return<div>
        <Header />
        <div id="banner">
            <h2 className="test">chez vous, partout et ailleurs</h2>
        </div>
        <div id="List">
            <div className="list-1" title="title" image="cover"></div>
        </div>
        <Logements />
    </div> 
}

/*You can provide a way better UX than this when your app throws errors by providing your own errorElement props on <Route>*/