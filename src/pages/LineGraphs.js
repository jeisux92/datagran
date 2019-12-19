import React, { useState } from "react";
import classes from "./LineGraphs.module.scss";
// components
import Csv from '../components/Csv/Csv';
import Button from "../components/Button/Button";
import DropDown from "../components/DrowpDown/DropDown";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Papa from "papaparse";
import CsvHero from "csv-hero";
const LineGraphs = () => {

    const [headers, setHeaders] = useState([]);
    const onProcessHandler = () => {

    }
    const csvJSON = (str, headerList, quotechar = '"', delimiter = ',') => {
        const cutlast = (_, i, a) => i < a.length - 1;
        // const regex = /(?:[\t ]?)+("+)?(.*?)\1(?:[\t ]?)+(?:,|$)/gm; // no variable chars
        const regex = new RegExp(`(?:[\\t ]?)+(${quotechar}+)?(.*?)\\1(?:[\\t ]?)+(?:${delimiter}|$)`, 'gm');
        const lines = str.split('\n');
        const headers = headerList || lines.splice(0, 1)[0].match(regex).filter(cutlast);
        setHeaders(headers);
        const list = [];

        for (const line of lines) {
            const val = {};
            for (const [i, m] of [...line.matchAll(regex)].filter(cutlast).entries()) {
                // Attempt to convert to Number if possible, also use null if blank
                val[headers[i]] = (m[2].length > 0) ? Number(m[2]) || m[2] : null;
            }
            list.push(val);
        }

        return list;
    }
    const onCsvChangeHandler = (value) => {
        CsvHero.parse(value).then(console.log);
        
    }

    const options = {
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