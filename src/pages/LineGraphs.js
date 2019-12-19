import React from "react";
import classes from "./LineGraphs.module.scss";
// components
import Csv from '../components/Csv/Csv';
import Button from "../components/Button/Button";
import DropDown from "../components/DrowpDown/DropDown";


const lineGraphs = () => {
    const onProcessHandler = () => {

    }

    return (
        <div className={classes.LineGraphs}>
            <div className={classes.Middle}>
                <div>
                    <Csv />
                </div>
                <div>
                    <Button onClick={onProcessHandler}>Process</Button>
                </div>
            </div>
            <div className={classes.Middle}>
                <div>
                    <DropDown></DropDown>
                </div>
                <div>
                    <DropDown></DropDown>
                </div>
            </div>
        </div>
    );
}

export default lineGraphs;