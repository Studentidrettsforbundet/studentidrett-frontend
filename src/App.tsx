import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import store from './store/store';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Hello</h1>
                <Link to="/Regions">Regions</Link>
            </div>
        </Provider>
    );
}

export default App;
