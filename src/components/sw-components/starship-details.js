
import ItemDetails from '../item-details'
import Record from '../record'
import withDataDetails from '../hoc-helper/with-data-details'
import withSwapiService from '../hoc-helper/with-swapi-service'

const starshipDetailsField = [
    {
        label: "Model",
        field: "model"
    },
    {
        label: "Length",
        field: "length"
    }
]

const mapMathodstoStarshipProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageURL: swapiService.getStarshipImage,
    }
}

const StarshipDetails = withSwapiService(mapMathodstoStarshipProps)(
                            withDataDetails(ItemDetails, starshipDetailsField, Record))

export default StarshipDetails