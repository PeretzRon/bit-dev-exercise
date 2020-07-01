import React from "react";
import '../../App.css';
import classes from './ButtonsControl.module.css'

const ButtonsControl = props => {
    return (
        <div className={classes.ButtonsControl}>
            <button onClick={props.addNewUser} className='btn btn-ghost'>Add</button>
            <button onClick={props.deleteAll} className='btn btn-full'>Delete All</button>
        </div>
    )
};

export default ButtonsControl;
