

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./Navbar.css";


/*    Create Navbar   */


const Navbar = () => 
{
      const [clicked, setClicked] = useState(false);

      /*    create menu list -  li tag   */
      const menuList = MenuList.map(({ url, title }, index) => {
        return (
                  <li key={index}>
                    <NavLink exact to={url} activeClassName="active">
                      {title}
                    </NavLink>
                  </li>
               );
      });

      const handleClick = () => {
        setClicked(!clicked);
      };

      return (
                <nav>

                    {/*  logo  */}
                    <div className="logo">
                      JAY<font>Dev</font>
                    </div>
     
                    {/*  icons (for responsive)  */}
                    <div className="menu-icon" onClick={handleClick}>
                      <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    {/*  menus  */}
                    <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
                </nav>
             );
};





export default Navbar;
