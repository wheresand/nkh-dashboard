import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from '../../img/logonkh.png';


const Navbermenu = () => {


    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    }; 

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu){
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub_menus"];
    if(isMenuSubMenu){
        boxClassSubMenu.push('sub__menus__Active');
    }else{
        boxClassSubMenu.push('');
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
                            {/*Responsive  Menu Button */}

                            {isResponsiveclose === true ? <>
                            <span className="menuber__button" style={{ display:'none' }} 
                            onClick={toggleClass} > <FiXCircle /> </span> </> : <>
                             <span className="menuber__button" style={{ display:'none' }} 
                            onClick={toggleClass} > <FiAlignRight /> </span> 
                            
                            
                            </>}

                            <ul className={boxClass.join('')}>
                                <li className="menu-item">
                                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}>Home</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink  activeClassName='is-active' onClick={toggleClass} to={`/About`}>About</NavLink>
                                </li>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
                                    <Link to="#" >Dropdown link<FiChevronDown /></Link>
                                    <ul className={boxClassSubMenu.join('')} >
                                        <li>
                                            <NavLink onClick={toggleClass} activeClassName='is-active' to={`Dropdown1`}>Dropdown1</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={toggleClass} activeClassName='is-active' to={`/Dropdown2`}>Dropdown2</NavLink>
                                        </li>
                                        
                                    </ul>
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