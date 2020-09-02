import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';

const createRoutes = () => (
    <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </div>
    </Router>
);

export default createRoutes;
