import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import RegionPage from './pages/regionPage';
import CityPage from './pages/cityPage';
import SportPage from './pages/sportPage';
import ClubPage from './pages/clubPage';
import GroupPage from './pages/groupPage';
import QuestionnairePage from './pages/QuestionnairePage';
import ResultPage from './pages/ResultPage';
import TeamPage from './pages/teamPage';
import store from './store/store';

const createRoutes = () => (
    <Provider store={store}>
        <Router>
            <div className="page">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/questionnaire" component={QuestionnairePage} />
                    <Route exact path="/questionnaire/result" component={ResultPage} />
                    <Route exact path="/Regions" component={RegionPage} />
                    <Route exact path="/:City" component={CityPage} />
                    <Route exact path="/:City/:Club" component={ClubPage} />
                    <Route exact path="/:City/Sport/:Sport" component={SportPage} />
                    <Route exact path="/:City/:Club/:Group" component={GroupPage} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default createRoutes;
