import React from "react";
import classes from './Header.module.css';

const Header = () =>{
    return(
        <header className={classes.header}>
            <img src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png" alt=""/>
        </header>
    );
};

export default Header;
