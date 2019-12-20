import React, { useState, useRef } from "react";
import classes from "./LineGraphs.module.scss";
// components
import Csv from '../components/Csv/Csv';
import Button from "../components/Button/Button";
import DropDown from "../components/DrowpDown/DropDown";
import Highcharts, { destroyObjectProperties } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const LineGraphs = () => {

    const [headers, setHeaders] = useState([]);
    const [json, setJson] = useState([]);
    const [xAxis, setXAxis] = useState("");
    const [yAxis, setYAxis] = useState("");
    const [csv, setCsv] = useState();



    const onProcessHandler = () => {
        setJson(csvJSON(csv));
    }

    const onXAxisChange = value => setXAxis(value);

    const onYAxisChange = value => setYAxis(value);


    const csvJSON = csv => {

        let lines = csv.replace('"', "").split("\n");

        let result = [];
        let headersCsv = [];
        for (const headerItem of lines[0].split(",")) {
            headersCsv.push(headerItem.trim().replace(/['"]+/g, ''));
        }


        let ignoredColumns = [];
        for (let i = 1; i < lines.length; i++) {

            let currentline = lines[i].split(",");
            if (i == 1) {

                headersCsv = headersCsv.filter((h, index) => {
                    if (!isNaN(currentline[index])) {
                        return true;
                    }
                    else {
                        ignoredColumns.push(index);
                        return false;
                    }
                });


                setHeaders(headersCsv);
                setXAxis(headersCsv[0]);
                setYAxis(headersCsv[0]);
            }
            let obj = {};

            currentline = currentline.filter((cL, index) => {
                return ignoredColumns.findIndex(x => x == index) == -1;
            });

            for (let j = 0; j < headersCsv.length; j++) {
                const current = currentline[j].trim().replace(/['"]+/g, '');
                obj[headersCsv[j]] = +current;
            }

            result.push(obj);

        }
        return result;
    }

    const onCsvChangeHandler = (value) => {
        setCsv(value);
    }


    const options = {
        title: {
            text: 'Highchart'
        },
        xAxis: [{
            title: {
                text: xAxis
            },
            //categories: json.map(j => j[xAxis])
        }],
        yAxis: [{
            title: {
                text: yAxis
            }
        }],
        series: [{
            data: json.map(j => ({ x: j[xAxis], y: j[yAxis] })),
        }]
    };

    let highcharts = null;
    if (json.length) {
        highcharts = <>
            <div className={classes.AxisOptions}>
                <div>
                    <label>X Axis  </label>
                    <DropDown data={headers} onChange={onXAxisChange} value={xAxis} />
                </div>
                <div>
                    <label>Y Axis  </label>
                    <DropDown data={headers} onChange={onYAxisChange} value={yAxis} />
                </div>
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
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
                {highcharts}
            </div>
        </div >
    );
}

export default LineGraphs;