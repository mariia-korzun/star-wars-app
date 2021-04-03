import React, { Component } from 'react'
import {
    StarshipList
} from '../sw-components'

import ErrorBoundry from '../error-boundry'


const StarshipPage = ({ match, location, history }) => {

    return (
        <section className="app__section container px-0">
            <ErrorBoundry>
                <StarshipList
                    onItemSelected={(itemId) => { 
                        history.push(`${itemId}`)
                    }}>
                </StarshipList>
            </ErrorBoundry>

        </section>
    )
}

// export default withRouter(StarshipPage)
export default StarshipPage