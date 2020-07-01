import React from "react";
import classes from './Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import * as icons from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.MyInfo}>
                <a href='https://ron-peretz.web.app/' rel="noopener noreferrer" target='_blank' ><FontAwesomeIcon className={classes.Icon} icon={icon.faUser}/>My Personal Site</a>
                <a href='https://github.com/PeretzRon/bit-dev-exercise' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon className={classes.Icon}   icon={icons.faGithub}My Personal Site/>GitHub</a>
            </div>
            <h1 className={classes.Title}>Random Users</h1>
            <img className={classes.Logo} src={require('../../resources/bit.png')} alt='logo'/>
        </header>
    )
}

export default Header;
