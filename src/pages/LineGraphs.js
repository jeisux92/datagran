import React, { useState } from "react";
import classes from "./LineGraphs.module.scss";
// components
import Csv from '../components/Csv/Csv';
import Button from "../components/Button/Button";
import DropDown from "../components/DrowpDown/DropDown";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const LineGraphs = () => {

    const [headers, setHeaders] = useState([]);
    const [options, setOptions] = useState({
        title: {
            text: 'My chart'
        },
        yAxis: [{ //--- Primary yAxis
            title: {
                text: 'Temperature'
            }
        }],
        series: [{
            data: [[5, 2], [6, 3], [8, 2]]
        }]
    });

    const onProcessHandler = () => {

    }
    const csvJSON = (csv) => {

        var lines = csv.replace('"', "").split("\n");

        var result = [];
        var headers = [];
        for (const headerItem of lines[0].split(",")) {
            headers.push(headerItem.trim().replace(/['"]+/g, ''));
        }

        debugger
        setHeaders(headers);
        for (var i = 1; i < lines.length; i++) {

            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                const current = currentline[j].trim().replace(/['"]+/g, '');
                obj[headers[j]] = isNaN(current) ? current : +current;
            }

            result.push(obj);

        }
        return result;
    }
    const onCsvChangeHandler = (value) => {
        console.log(csvJSON(value));
    }


    return (
        <div className={classes.LineGraphs}>
            <div className={classes.Middle}>
                <div>
                    <Csv onChange={onCsvChangeHandler} />
                </div>
                <div>
                    <Button onClick={onProcessHandler}>Process</Button>
                </div>
            </div>
            <div className={classes.Middle}>
                <div className={classes.AxisOptions}>
                    <DropDown data={headers}></DropDown>
                    <DropDown data={headers}></DropDown>
                </div>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </div>
    );
}

export default LineGraphs;