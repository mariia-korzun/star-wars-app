import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'



import './random-planet.css'


export default class RandomPlanet extends Component {

    static defaultProps = {
        intervalUpdate: 100000
    }

    // static propTypes = {
    //     intervalUpdate: (props, propName, componentName) => {
    //         const value = props[propName]
    //       return (typeof value === 'number' && !isNaN(value))? null: new Error('intervalUpdate not a number')
    //     }
    // }

    static propTypes = {
        intervalUpdate: PropTypes.number
    }

    constructor() {
        super()

        this.state = {
            planet: {},
            loading: true,
            error: false
        }

        this.swapiService = new SwapiService()

        this.onPlanetLoaded = (planet) => {
            this.setState({
                planet: planet,
                loading: false,
            })
        }

        this.onError = (error) => {
            this.setState({
                error: true,
                loading: false
            })
        }

        this.updatePlanet = () => {
            const id = Math.floor(Math.random() * 18) + 2
            this.swapiService
                .getPlanet(id)
                .then(this.onPlanetLoaded)
                .catch(this.onError)
        }

    }

    componentDidMount() {
        const { intervalUpdate } = this.props
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, intervalUpdate)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        const { planet, loading, error } = this.state

        return (
            < section className="random-planet d-flex" >
                {loading ? <Spinner /> : error ? <ErrorIndicator /> : <PlanetView planet={planet} />}
            </section >
        )
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population,
        rotationPeriod, diameter } = planet

    return (
        <React.Fragment>
            <div className="random-planet__img-container">
                <img className="random-planet__img"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Random Planet" />
            </div>
            <div className="random-planet__info-container">
                <h1>
                    {name}
                </h1>
                <ul className="random-planet-info-list list-group">
                    <li className="random-planet__list-item list-group-item">
                        <span>
                            Population:
                            </span>
                        <span>
                            {population}
                        </span>
                    </li>
                    <li className="random-planet__list-item list-group-item">
                        <span>
                            Rotation period:
                            </span>
                        <span>
                            {rotationPeriod}
                        </span>
                    </li>
                    <li className="random-planet__list-item list-group-item">
                        <span>
                            Diameter:
                            </span>
                        <span>
                            {diameter}
                        </span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}