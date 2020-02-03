import React from "react";
import classes from "./navMenu.module.css";
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.items}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.items}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.items}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.items}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.items}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
        </nav>
    );
};

export default NavMenu;
