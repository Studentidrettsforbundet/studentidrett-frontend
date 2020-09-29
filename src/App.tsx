import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <Link to='/Regions'>Regions</Link>
        </div>
    );
}
export default App;
