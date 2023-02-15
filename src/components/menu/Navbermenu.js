import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCicrcle, FiChevronDown } from "react-icons/fi";
import logo from '../../img/logonkh.png';
import { ToggleButton } from "react-bootstrap";

const Navbermenu = () => {

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu){

    }else{

    }

    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">

                    {/*Add Logonkh */}
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="">
                            <img src={logo} alt="logo" />
                        </NavLink>
                        
                    </div>
                    <div className="header__middle_menus">
                        <nav className="main-nav">
                            <ul className={boxClass.join('')}>
                                <li className="menu-item">
                                    <NavLink exact activeClassName='is-active' onClick={ToggleClass} to={`/`}>Home</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink  activeClassName='is-active' onClick={ToggleClass} to={`/About`}>About</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink  activeClassName='is-active' onClick={ToggleClass} to={`/Contact`}>Contact</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink  activeClassName='is-active' onClick={ToggleClass} to={`/Content`}>Content</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Navbermenu