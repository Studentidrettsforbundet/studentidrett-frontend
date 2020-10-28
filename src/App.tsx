import React from 'react';
import { Link } from 'react-router-dom';
import './styles/global.css';
import './assets/ko355.woff';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="App">
            <h1>Kundestyrt</h1>
            <div className="col">
                <button type="button" className="btn btn-primary">
                    <Link to="/Regions" style={{ color: 'black' }}>
                        Browse student sport
                    </Link>
                </button>
                <button type="button" className="btn btn-primary">
                    <Link to="/questionnaire" style={{ color: 'black' }}>
                        Questionnaire
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default App;
