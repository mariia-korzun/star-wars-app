
import ItemDetails from '../item-details'
import Record from '../record'
import withDataDetails from '../hoc-helper/with-data-details'
import withSwapiService from '../hoc-helper/with-swapi-service'

const personDetailsField = [
    {
        label: "Gender",
        field: "gender"
    },
    {
        label: "Eye Color",
        field: "eyeColor"
    }
]

const mapMathodstoPersonProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageURL: swapiService.getPersonImage,
    }
}

const PersonDetails = withSwapiService(mapMathodstoPersonProps)(
                             withDataDetails(ItemDetails, personDetailsField, Record))

export default PersonDetails
