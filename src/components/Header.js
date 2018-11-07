import React from 'react';
import HeaderNav from './HeaderNav';
//header component
const Header = () => {
    return (
        <div className="Header">
            <div className="header__title--wrap">
                <h1 className="header__title">DIGI NEWS</h1>
            </div>
            <HeaderNav />
        </div>
    );
};

export default Header;