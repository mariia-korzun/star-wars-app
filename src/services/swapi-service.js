
export default class SwapiService {
  constructor() {
    this._apiBase = 'https://swapi.dev/api'
    this._imageBase = 'https://starwars-visualguide.com/assets/img'

    this.getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`)
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
      }
      return await res.json()
    }

    this.getAllPeople = async () => {
      const res = await this.getResource(`/people/`)
      return res.results.map(this._transormPerson)
    }

    this.getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`)
      return this._transormPerson(person)
    }

    this.getAllPlanets = async () => {
      const res = await this.getResource(`/planets/`)
      return res.results.map(this._transormPlanet)
    }

    this.getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`)
      return this._transormPlanet(planet)
    }


    this.getAllStarships = async () => {
      const res = await this.getResource(`/starships/`)
      return res.results.map(this._transormStarship)
    }

    this.getStarship = async (id) => {
      const starship = await this.getResource(`/starships/${id}/`)
      return this._transormStarship(starship)
    }

    this._transormPlanet = (planet) => {
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }

    this._transormPerson = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      }
    }

    this._transormStarship = (starship) => {
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passenges: starship.passenges,
        cargoCapacity: starship.cargo_capacity
      }
    }

    this._extractId = (item) => {
      const idRegExp = /\/(\d*)\/$/
      return parseInt(item.url.match(idRegExp)[1])
    }

    this.getPersonImage = ({id}) => {
      return `${this._imageBase}/characters/${id}.jpg`
    }

    this.getStarshipImage = ({id}) => {
      return `${this._imageBase}/starships/${id}.jpg`
    }

    this.getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
    }

  }
}
