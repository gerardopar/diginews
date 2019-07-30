import React from 'react';
import { NavLink } from 'react-router-dom';

//header component
const Header = (props) => {
    return (
        <div className="header">
            <h1 className="header__title">digi news <span className="header__title--span">&copy;</span></h1>

            <ul className="header__nav">
                <NavLink to="/" className="header__item" activeClassName="is-active" exact={true}>LATEST</NavLink>
                <NavLink to="/crypto" className="header__item" activeClassName="is-active" exact={true}>CRYPTO</NavLink>
                <NavLink to="/life" className="header__item" activeClassName="is-active" exact={true}>LIFE</NavLink>
                <NavLink to="/sports" className="header__item" activeClassName="is-active" exact={true}>SPORTS</NavLink>
                <NavLink to="/tech" className="header__item" activeClassName="is-active" exact={true}>TECH</NavLink>
            </ul>

        </div>
        
    );
};

export default Header;

