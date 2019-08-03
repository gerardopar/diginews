// importing modules
import React from 'react';
import {
 BrowserRouter, Route, Switch, Redirect 
} from 'react-router-dom';
// import components here
import Header from '../components/UI/Header/Header';
import SubHeader from '../components/UI/Header/SubHeader';
import Footer from '../components/UI/Footer/Footer';
import BreakingNewsPage from '../components/pages/BreakingNewsPage/BreakingNewsPage';
import CryptoNewsPage from '../components/pages/CryptoNewsPage/CryptoNewsPage';
import LifeNewsPage from '../components/pages/LifeNewsPage/LifeNewsPage';
import SportsNewsPage from '../components/pages/SportsNewsPage/SportsNewsPage';
import TechNewsPage from '../components/pages/TechNewsPage/TechNewsPage';

// AppRouter component
const AppRouter = () => {
        const routes = (
            <Switch>
                <Route
                  path="/"
                  exact
                  render={props => (
                        <BreakingNewsPage
                          {...props}
                        />
                )} 
                />
                <Route
                  path="/crypto"
                  exact
                  render={props => (
                        <CryptoNewsPage
                          {...props}
                        />
                )} 
                />
                <Route
                  path="/life"
                  exact
                  render={props => (
                        <LifeNewsPage
                          {...props}
                        />
                )} 
                />
                <Route
                  path="/sports"
                  exact
                  render={props => (
                        <SportsNewsPage
                          {...props}
                        />
                )} 
                />
                <Route
                  path="/tech"
                  exact
                  render={props => (
                        <TechNewsPage 
                          {...props}
                        />
                )} 
                />
                <Redirect to="/" />
            </Switch>
        );

        return (
            <BrowserRouter>
            <div>
                <Header />
                <SubHeader />
                {routes}
                <Footer />
            </div>
            </BrowserRouter>
        );
};

// exporting compenent
export default AppRouter;
