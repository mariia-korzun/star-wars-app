import React, { Component } from 'react'

import './item-details.css'


export default class ItemDetails extends Component {

    render() {

        const { data, image } = this.props
        const { name } = data


        return (
            <section className="planet-details d-flex container">
                <div className="row mx-0">
                    <div className="planet-details__img-container col-4 pl-0">
                        <img className="planet-details__img" src={image} alt="Item"/>
                    </div>
                    <div className="planet-details__info-container col-8 pr-0">
                        <h1>
                            {name}
                        </h1>
                        <ul className="planet-details__info-list list-group">

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