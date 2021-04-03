
import ItemList from '../item-list'
import withChildFunction from '../hoc-helper/with-child-function'
import withDataList from '../hoc-helper/with-data-list'
import withSwapiService from '../hoc-helper/with-swapi-service'
import compose from '../hoc-helper/compose-functions'


const renderName = (i) => i.name
const renderNameAndModel = (i) => `${i.name} ${i.model}`



const mapMathodstoPersonProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const PersonList = compose(
    withSwapiService(mapMathodstoPersonProps),
    withDataList,
    withChildFunction(renderName)
                         )(ItemList)


const mapMathodstoPlanetProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}


const PlanetList = compose(
    withSwapiService(mapMathodstoPlanetProps),
    withDataList,
    withChildFunction(renderName)
                          )(ItemList)



const mapMathodstoStarshipProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const StarshipList = compose(
    withSwapiService(mapMathodstoStarshipProps),
    withDataList,
    withChildFunction(renderNameAndModel)
                          )(ItemList)



export {
    PersonList,
    PlanetList,
    StarshipList
}
