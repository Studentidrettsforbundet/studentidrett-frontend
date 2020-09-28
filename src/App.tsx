import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Hello</h1>
                <Link to="/Locations">Locations</Link>
            </div>
        </Provider>
    );
}
export default App;
