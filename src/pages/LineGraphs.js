import React from "react";
import classes from "./LineGraphs.module.scss";
// components
import Csv from '../components/Csv/Csv';
import Button from "../components/Button/Button";
import DropDown from "../components/DrowpDown/DropDown";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const lineGraphs = () => {
    const onProcessHandler = () => {

    }

    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            data: [1, 2, 3]
        }]
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
                <div className={classes.AxisOptions}>
                    <DropDown></DropDown>
                    <DropDown></DropDown>
                </div>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </div>
    );
}

export default lineGraphs;