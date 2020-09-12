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
                <Route path="/" component={BreakingNewsPage} exact />
                <Route path="/crypto" component={CryptoNewsPage} exact />
                <Route path="/life" component={LifeNewsPage} exact />
                <Route path="/sports" component={SportsNewsPage} exact />
                <Route path="/tech" component={TechNewsPage} exact />
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
