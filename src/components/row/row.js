import React from 'react'
import PropTypes from 'prop-types'

import './row.css'

const Row = ({ left, right }) => {
    return (
        <div className="row mx-0">
            <div className="col-6 pl-0 ">
                {left}
            </div>
            <div className="col-6 pr-0 ">
                {right}
            </div>
        </div>
    )
}

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}
export default Row