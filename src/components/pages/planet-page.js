import React, { Component } from 'react'

import {
    PlanetDetails,
    PlanetList
} from '../sw-components'


import Row from '../row'
import ErrorBoundry from '../error-boundry'



export default class PlanetPage extends Component {
    constructor() {
        super()

        this.state = {
            selectedPerson: 0
        }

        this.onPersonSelected = (id) => {
            this.setState({ selectedPerson: id })
        }
    }



    render() {

        const itemList = (
            <PlanetList
                onItemSelected={this.onPersonSelected}>
            </PlanetList>

        )

        const itemDetails = (
            <PlanetDetails
                itemId={this.state.selectedPerson} >
            </PlanetDetails>
        )



        return (
            <section className="app__section container px-0">
                <ErrorBoundry>
                    <Row left={itemList} right={itemDetails} />
                </ErrorBoundry>

            </section>
        )

    }
}