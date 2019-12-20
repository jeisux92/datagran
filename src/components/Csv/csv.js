import React from "react";
import classes from "./Csv.module.scss";
const Csv = (props) => {
    return (
        <textarea rows="20" cols="50"  className={classes.Csv} onChange={(e)=>props.onChange(e.target.value)}></textarea>
    )
}


export default Csv;