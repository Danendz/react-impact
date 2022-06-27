import React from "react";
import cl from "./Navigation.module.css";
import logo from '../../images/logo-white.png'
import { NavLink } from "react-router-dom";

function Navigation({ pages }) {
  return (
    <div className={cl.nav}>
      <div className={cl.wrapper}>
        <NavLink className={[cl.link, cl.logoLink].join(" ")} to="/">
          <img
            className={cl.nav_logo}
            src={logo}
            alt="Logo"
          />
        </NavLink>
        <ul className={cl.nav_menu}>
          {pages.map(({path, icon}) => (
            <NavLink
            key={path}
              className={(navdata) =>
                navdata.isActive
                  ? [cl.active, cl.link].join(" ")
                  : [cl.link].join(" ")
              }
              to={path}
            >
              <li>
                <i className={icon}></i>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
