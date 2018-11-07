//importing react
import React from 'react';
//importing react-router-dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import components here
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreakingNewsPage from '../components/BreakingNewsPage';
import CryptoNewsPage from '../components/CryptoNewsPage';
import LifeNewsPage from '../components/LifeNewsPage';
import SportsNewsPage from '../components/SportsNewsPage';
import TechNewsPage from '../components/TechNewsPage';

// import PageNotFound from '../components/PageNotFound';

//AppRouter component
const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route path="/" component={BreakingNewsPage} exact={true}/>
            <Route path="/crypto" component={CryptoNewsPage} exact={true}/>
            <Route path="/life" component={LifeNewsPage} exact={true}/>
            <Route path="/sports" component={SportsNewsPage} exact={true}/>
            <Route path="/tech" component={TechNewsPage} exact={true}/>
        </Switch>
        <Footer />
        </div>
    </BrowserRouter>
);

//exporting compenent
export default AppRouter;