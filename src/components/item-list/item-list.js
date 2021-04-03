import React from 'react'
import PropTypes from 'prop-types'

import './item-list.css'


const ItemList = (props) => {

    const { onItemSelected, data, children: renderLabel } = props

    const itemsList = data.map((item) => {
        const { id } = item
        const label = renderLabel(item)
        return (
            <li className="list-group-item item-list"
                key={id}
                onClick={() => { onItemSelected(id) }}>
                <span>
                    {label}
                </span>
            </li >
        )
    })

    return (
        <div>
            <ul className="list-group">
                {itemsList}
            </ul>
        </div >
    )
}

ItemList.defaultProps = {
    onItemSelected: () => { },

}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default ItemList