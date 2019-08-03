import React from 'react';
import { NavLink } from 'react-router-dom';

const SubHeader = () => (
    <div className="sub__header--wrap">
        <div className="sub__header">
            <NavLink to="/" className="sub__header--item" activeClassName="sub__is-active" exact>LATEST</NavLink>
            <NavLink to="/crypto" className="sub__header--item" activeClassName="sub__is-active" exact>CRYPTO</NavLink>
            <NavLink to="/life" className="sub__header--item" activeClassName="sub__is-active" exact>LIFE</NavLink>
            <NavLink to="/sports" className="sub__header--item" activeClassName="sub__is-active" exact>SPORTS</NavLink>
            <NavLink to="/tech" className="sub__header--item" activeClassName="sub__is-active" exact>TECH</NavLink>
        </div>
    </div>
);

export default SubHeader;
