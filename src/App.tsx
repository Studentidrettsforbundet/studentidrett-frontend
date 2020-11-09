import React, { useEffect } from 'react';
import './styles/global.css';
import './styles/fetchError.css';
import './assets/ko355.woff';
import './styles/spinner.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';
import Routes from './routes';
import Header from './components/Header/header';
import { Provider } from 'react-redux';
import { BrowserRouter, useLocation } from 'react-router-dom';
import store from './store/store';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop />
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
