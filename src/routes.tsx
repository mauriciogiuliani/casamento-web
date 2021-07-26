import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Presence from './pages/Presence';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/presenca" exact component={Presence}/>
            
        </BrowserRouter>
    )
}

export default Routes;