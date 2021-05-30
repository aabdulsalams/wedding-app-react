import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Live from './pages/Live';

function routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contact' exact component={Contact}/>
                <Route path='/live' exact component={Live}/>
            </Switch>
        </Router>
    );
}

export default routes;