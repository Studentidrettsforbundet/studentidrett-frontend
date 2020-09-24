import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import ClubOverview from './components/ClubOverview/ClubOverview';

const createRoutes = () => (
    <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/clubs/:clubSlug" component={ClubOverview} />
            </Switch>
        </div>
    </Router>
);

export default createRoutes;
