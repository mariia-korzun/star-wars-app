import React, { Component } from 'react'

import './item-details.css'


export default class ItemDetails extends Component {

    render() {

        const { data, image } = this.props
        const { name } = data


        return (
            <section className="item-details d-flex container">
                <div className="row mx-0">
                    <div className="item-details__img-container col-4 pl-0">
                        <img className="item-details__img" src={image} alt="Item"/>
                    </div>
                    <div className="item-details__info-container col-8 pr-0">
                        <h1>
                            {name}
                        </h1>
                        <ul className="item-details__info-list list-group">

                            {React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { data })
                            })
                            }

                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}