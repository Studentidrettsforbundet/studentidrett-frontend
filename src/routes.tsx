import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import RegionPage from './pages/regionPage';
import CityPage from './pages/cityPage';
import SportPage from './pages/sportPage';
import ClubPage from './pages/clubPage';
import GroupPage from './pages/groupPage';
import QuestionnairePage from './pages/questionnairePage';
import ResultPage from './pages/resultPage';
import store from './store/store';
import LandingPage from './pages/landingPage';

const Routes = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/questionnaire" component={QuestionnairePage} />
                <Route exact path="/questionnaire/result" component={ResultPage} />
                <Route exact path="/Regions" component={RegionPage} />
                <Route exact path="/:City" component={CityPage} />
                <Route exact path="/:City/:Club" component={ClubPage} />
                <Route exact path="/:City/Sport/:Sport" component={SportPage} />
                <Route exact path="/:City/:Club/:Group" component={GroupPage} />
            </Switch>
        </Router>
    </Provider>
);

export default Routes;
