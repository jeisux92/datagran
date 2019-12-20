import React from "react"


const DropDown = (props) => {
    const options = props.data.length > 0 ? props.data.map(s => <option value={s} key={s}>{s}</option>) : <option>Seleccione el eje</option>;

    return (
        <select onChange={(e) => props.onChange(e.target.value)} value={props.value}>
            {options}
        </select>
    )
}


export default DropDown;