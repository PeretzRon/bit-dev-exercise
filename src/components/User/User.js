import React from "react";
import classes from './User.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as icon from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

const User = props => {

    return (
        <div className={classes.User}>
            <div>
                <div>
                    <h2>{props.user['name']}</h2>
                </div>
                <div>
                    <ul>
                        <li><FontAwesomeIcon
                            className={classes.icon}
                            icon={icon.faMars}/>{props.user['gender']}</li>
                        <li><FontAwesomeIcon className={classes.icon} icon={icon.faFlag}/>{props.user['country']}</li>
                    </ul>
                </div>
            </div>
            <div className={classes.BtnInfo}>
                <button onClick={props.moreInfo} className='btn btn-full'>More
                    Info</button>
            </div>
        </div>
    )
}

export default User;
