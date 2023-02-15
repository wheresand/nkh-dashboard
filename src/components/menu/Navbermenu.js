import React from "react";
import { NavLink,Link } from "react-router-dom";
import {FiAlignRight,FiXCicrcle,FiChevronDown} from "react-icons/fi";
import logo from '../../img/logonkh.png';

const Navbermenu = () =>{
    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">
                     
                     {/*Add Logonkh */}
                     <div className="header__middle__logo">
                        <NavLink exact activeClassName = 'is-active' to="">
                            <img src={logo} alt="logo" />
                        </NavLink>

                     </div>
                </div>

            </div>
        </header>
    );
}

export default Navbermenu