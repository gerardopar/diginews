import React from 'react';
import { NavLink } from 'react-router-dom';
import button from '../assets/img/menu.svg';

class HeaderNav extends React.Component {
    constructor(props){
        super(props);

        this.showMenu = this.showMenu.bind(this);

        this.state = {
            hidden : false
        }

    }

    showMenu(){

        this.setState( () => ({
            hidden: !this.state.hidden
        }));
    }   

    render(){

    return (
        <div className="header__nav--wrap">

            {/*mobile navigation*/}

            {this.state.hidden ? 
            <HeaderNavMobile showMenu={this.showMenu}/> : 
                    <button className="header__btn" onClick={this.showMenu}>
                        <img className="header__btn--icon" src={button} alt="button"/>
                    </button>
            
            }
            
            {/*navigation*/}
            <div className="header__nav">
                <NavLink to="/" className="header__item" activeClassName="is-active" exact={true}>BREAKING NEWS</NavLink>
                <NavLink to="/crypto" className="header__item" activeClassName="is-active">CRYPTOCURRENCY</NavLink>
                <NavLink to="/life" className="header__item" activeClassName="is-active">LIFE</NavLink>
                <NavLink to="/sports" className="header__item" activeClassName="is-active">SPORTS</NavLink>
                <NavLink to="/tech" className="header__item" activeClassName="is-active">TECH</NavLink>
            </div>

        </div>
    );
    }
};

const HeaderNavMobile = (props) => {
    return (
    <div className="header__nav--mobile--wrap">
        <button className="header__btn--close" onClick={props.showMenu}><img className="header__btn--icon" src={button} alt="button"/></button>
            <div className="header__nav--mobile">
                <NavLink to="/" className="header__item--mobile" activeClassName="is-active" exact={true}>BREAKING NEWS</NavLink>
                <NavLink to="/crypto" className="header__item--mobile" activeClassName="is-active">CRYPTOCURRENCY</NavLink>
                <NavLink to="/life" className="header__item--mobile" activeClassName="is-active">LIFE</NavLink>
                <NavLink to="/sports" className="header__item--mobile" activeClassName="is-active">SPORTS</NavLink>
                <NavLink to="/tech" className="header__item--mobile" activeClassName="is-active">TECH</NavLink>
            </div>
        </div> 
    );
};

export default HeaderNav;