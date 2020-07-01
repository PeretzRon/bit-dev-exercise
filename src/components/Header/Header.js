import React from "react";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.Header}>
            <a href='https://ron-peretz.web.app/' rel="noopener noreferrer" target='_blank' className={classes.MyInfo}>My Personal Site</a>
            <h1 className={classes.Title}>Random Users</h1>
            <img className={classes.Logo} src={require('../../resources/bit.png')} alt='logo'/>
        </header>
    )
}

export default Header;
