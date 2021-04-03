
import ItemDetails from '../item-details'
import Record from '../record'
import withDataDetails from '../hoc-helper/with-data-details'
import withSwapiService from '../hoc-helper/with-swapi-service'

const planetDetailsField = [
    {
        label: "Population",
        field: "population"
    },
    {
        label: "Rotation Period",
        field: "rotationPeriod"
    }
]

const mapMathodstoPlanetProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageURL: swapiService.getPlanetImage,
    }
}

const PlanetDetails = withSwapiService(mapMathodstoPlanetProps)(
                             withDataDetails(ItemDetails, planetDetailsField, Record))

export default PlanetDetails