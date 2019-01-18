import React from 'react';
import { NavLink } from 'react-router-dom';

const SubHeader = (props) => (
    <div className="sub__header--wrap">
        <div className="sub__header">
            <NavLink to="/" className="sub__header--item" activeClassName="sub__is-active" exact={true}>LATEST</NavLink>
            <NavLink to="/crypto" className="sub__header--item" activeClassName="sub__is-active" exact={true}>CRYPTO</NavLink>
            <NavLink to="/life" className="sub__header--item" activeClassName="sub__is-active" exact={true}>LIFE</NavLink>
            <NavLink to="/sports" className="sub__header--item" activeClassName="sub__is-active" exact={true}>SPORTS</NavLink>
            <NavLink to="/tech" className="sub__header--item" activeClassName="sub__is-active" exact={true}>TECH</NavLink>
        </div>
    </div>
);

export default SubHeader;