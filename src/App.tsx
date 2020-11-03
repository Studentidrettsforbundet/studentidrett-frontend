import React from 'react';
import './styles/global.css';
import './styles/fetchError.css';
import './assets/ko355.woff';
import './styles/spinner.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Routes from './routes';
import Header from './components/header';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="page">
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default App;
