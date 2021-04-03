import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import {
    PeoplePage,
    PlanetPage,
    StarshipPage,
    LoginPage,
    SecretPage
} from '../pages'

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components'

import ErrorIndicator from '../error-indicator'

import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context'


import './app.css'


import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            hasError: false,
            isLoggedIn: false
        }

        this.onLogin = () => {
            this.setState({
                isLoggedIn: true
            })
        }

        this.swapiService = new SwapiService()


    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        const { isLoggedIn } = this.state

        if (this.state.hasError) {
            return (<ErrorIndicator />)
        }

        return (
            <SwapiServiceProvider value={this.swapiService}>
                <Router>
                    <div className="app">
                        <Header />
                        <RandomPlanet />
                        {/*  with  Switch will pick up first matched path, without - all matched, as filter */}
                        <Switch>
                            <Route path="/" render={() => <h2>Welcome</h2>} exact></Route>

                            <Route path="/people/:id?" component={PeoplePage} />

                            <Route path="/planets" component={PlanetPage} />

                            <Route path="/starships" component={StarshipPage} exact />

                            <Route path="/starships/:id" render={({ match }) => {
                                const { id } = match.params
                                return (<div className="container app__section">
                                    < StarshipDetails itemId={id} />
                                </div>
                                ) }} />

                            <Route
                                path="/login"
                                render={() => {
                                    return <LoginPage
                                        isLoggedIn={isLoggedIn} onLogin={this.onLogin}
                                    />
                                }} />
                            <Route
                                path="/secret"
                                render={() => {
                                    return <SecretPage isLoggedIn={isLoggedIn} />
                                }} />

                            {/* <Redirect to="/" /> */}

                            {/* route without path will always execute*/}
                            <Route render={() => {
                                return <h3>Not Found!</h3>
                            }} />
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        )
    }

}

