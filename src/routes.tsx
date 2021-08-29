import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ListaPresentes from './pages/ListaPresentes';
import NossaHistoria from './pages/NossaHistoria';
import Presenca from './pages/Presenca';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/presenca" exact component={Presenca}/>
            <Route path="/lista-presentes" exact component={ListaPresentes}/>
            <Route path="/nossa-historia" exact component={NossaHistoria}/>
            
        </BrowserRouter>
    )
}

export default Routes;