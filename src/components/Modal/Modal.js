import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.scss"



const Modal = (props) => {
    return (
        <>
            <Backdrop onClick={props.onClosed} ></Backdrop>
            <div className={classes.Modal} >
                {props.children}
            </div>
        </>
    )
}

export default Modal;
