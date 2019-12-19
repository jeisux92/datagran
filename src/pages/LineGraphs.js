import React from "react";
import classes from "./LineGraphs.module.scss";
import Csv from '../components/Csv/csv';
import Button from "../components/Button/Button";

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
        </div>
    );
}

export default lineGraphs;