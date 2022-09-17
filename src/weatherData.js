import {stateCode} from "./geoCodes";

const coordinates = async function () {
    const city = 'columbus'
    const state = stateCode.Ohio
    const country = '840'
    const data = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=${process.env.secret}`,
        {mode: 'cors'})
    const resp = await data.json()
    const location = resp[0]

    return {lat: location.lat, lon: location.lon}
}

const weatherData = async function () {
    const cityCoordinates = await coordinates()
    const lat = cityCoordinates.lat
    const lon = cityCoordinates.lon

    const data = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.secret}`)
    const resp = await data.json()

    console.log(resp)
}

export { weatherData }