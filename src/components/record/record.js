import React from 'react'

import './record.css'


const Record = ({ data, field, label }) => {
    return (
        <li className="record list-group-item">
            <span>
                {label}
            </span>
            <span className="record__item">
                {data[field]}
            </span>
        </li>
    )
}

export default Record

