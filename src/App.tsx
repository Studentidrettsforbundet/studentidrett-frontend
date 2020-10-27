import React from 'react';
import './styles/global.css';
import './assets/ko355.woff';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Routes from './routes';

const App = () => {
    return (
        <div className="App">
            <div className="page">
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default App;
