import React from "react";
import classes from './MoreInfo.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

const MoreInfo = props => {
    const details = props.userDetails;
    return(
        <div className={classes.MoreInfo}>
            <div>
                <FontAwesomeIcon className={classes.CloseBtn} onClick={props.closeMoreInfo} icon={icon.faTimesCircle}/>
            </div>
            <div className={classes.userInfo}>
                <div>
                    <h1 className={classes.Name}>{details['name']}</h1>
                </div>
                <ul>
                    <li><FontAwesomeIcon className={classes.icon} icon={icon.faFlag}/>{details['country']}</li>
                    <li><FontAwesomeIcon className={classes.icon} icon={icon.faEnvelope}/>{details['email']}</li>
                    <li><FontAwesomeIcon className={classes.icon} icon={icon.faCity}/>{details['city']}</li>
                    <li><FontAwesomeIcon className={classes.icon} icon={icon.faCode}/>{details['postCode']}</li>
                    <li><FontAwesomeIcon className={classes.icon} icon={icon.faCalendarAlt}/>{details['age']}</li>
                    <li><FontAwesomeIcon className={classes.icon} icon={icon.faMobile}/>{details['phone']}</li>
                    <li><FontAwesomeIcon className={classes.icon} icon={icon.faMars}/>{details['gender']}</li>
                    <li><FontAwesomeIcon className={classes.icon} icon={icon.faPhoneAlt}/>{details['cell']}</li>
                </ul>
            </div>
        </div>
    )
}

export default MoreInfo;
