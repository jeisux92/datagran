import React from "react"


const dropDown = (props) => {
    const options = props.data.length > 0 ? props.data.map(s => <option value={s} key={s}>{s}</option>) : <option>Seleccione el eje</option>;

    return (
        <select>
            {options}
        </select>
    )
}


export default dropDown;