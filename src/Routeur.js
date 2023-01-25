import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Home} from './pages/Home.js';
import {APropos} from './pages/A-Propos.js';

export default function Routeur ()
{
    return(
        <Router>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/APropos">
                <APropos />
            </Route>
        </Router>
    )
}

/*
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageError from './pages/404.js';
import {APropos} from './pages/A-Propos.js';
import FicheLogement from './pages/Fiche-logement.js';
import Home from './pages/Home.js';
*/