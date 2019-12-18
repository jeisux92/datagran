import React from "react";
import classes from "./button.module.scss";
const button = (props) => (
    <button onClick={props.onClick} className={classes.Button}>
        {props.children}
    </button>
)

export default button;