import React from 'react'
import { SwapiServiceConsumer } from '../../swapi-service-context'

const withSwapiService = (mapMathodstoProps) => (View) => {
    return (props) => {
        return <SwapiServiceConsumer>
            {(swapiService) => {
                const swapiProps = mapMathodstoProps(swapiService)
                return < View {...swapiProps} {...props} />
            }}
        </SwapiServiceConsumer>
    }
}
export default withSwapiService