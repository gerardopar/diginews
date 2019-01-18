//importing react
import React, { Component } from 'react';
//importing react-router-dom
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
//import components here
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import BreakingNewsPage from '../components/BreakingNewsPage';
import CryptoNewsPage from '../components/CryptoNewsPage';
import LifeNewsPage from '../components/LifeNewsPage';
import SportsNewsPage from '../components/SportsNewsPage';
import TechNewsPage from '../components/TechNewsPage';

//AppRouter component
class AppRouter extends Component {
    constructor(props){
        super(props);

    }

    render(){

        let routes = (
            <Switch>
                <Route path="/" exact={true}
                    render={props => (
                        <BreakingNewsPage
                        {...props}
                        />
                )}/>
                <Route path="/crypto" exact={true}
                    render={props => (
                        <CryptoNewsPage
                        {...props}
                        />
                )}/>
                <Route path="/life" exact={true}
                    render={props => (
                        <LifeNewsPage
                        {...props}
                        />
                )}/>
                <Route path="/sports" exact={true}
                    render={props => (
                        <SportsNewsPage
                        {...props}
                        />
                )}/>
                <Route path="/tech" exact={true}
                    render={props => (
                        <TechNewsPage 
                        {...props}
                        />
                )}/>
                <Redirect to="/" />
            </Switch>
            
        );

        return (
            <BrowserRouter>
            <div>
                <Header/>
                <SubHeader/>
                {routes}
                <Footer />
            </div>
            </BrowserRouter>
        )
    }
};

//exporting compenent
export default AppRouter;

