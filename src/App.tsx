import React from 'react';
import './styles/global.css';
import './styles/fetchError.css';
import './assets/ko355.woff';
import './styles/spinner.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Routes from './routes';
import Header from './components/header';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';

const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <div className="page">
                        <Routes />
                    </div>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;
