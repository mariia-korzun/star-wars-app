import React, { Component } from 'react'

import {
    PersonDetails,
    PersonList
} from '../sw-components'


import Row from '../row'
import ErrorBoundry from '../error-boundry'


import { withRouter } from 'react-router-dom'


const PeoplePage = ({ match, history }) => {

    const { id } = match.params

    const itemList = (
        <PersonList
            onItemSelected={(itemId) => {
                history.push(`${itemId}`)
            }}>
        </PersonList>
    )


    const itemDetails = (
        <PersonDetails
            itemId={id} >
        </PersonDetails>
    )

    return (
        <section className="app__section container px-0">
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundry>
        </section>
    )


}

export default withRouter(PeoplePage)