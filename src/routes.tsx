import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cerimonia from './pages/Cerimonia';
import HashTag from './pages/HashTag';
import Landing from './pages/Landing';
import ListaPresentes from './pages/ListaPresentes';
import NossaHistoria from './pages/NossaHistoria';
import Presenca from './pages/Presenca';
import Traje from './pages/Traje';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/presenca" exact component={Presenca}/>
            <Route path="/lista-presentes" exact component={ListaPresentes}/>
            <Route path="/nossa-historia" exact component={NossaHistoria}/>
            <Route path="/hashtag" exact component={HashTag}/>
            <Route path="/traje" exact component={Traje}/>
            <Route path="/cerimonia" exact component={Cerimonia}/>
            
        </BrowserRouter>
    )
}

export default Routes;