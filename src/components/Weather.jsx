import { useState } from 'react'

const Weather = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')

  const getWeather = async () => {
    const API_KEY = '72172337bebaf120e6b05ac6a228d8de'
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&unit=metric`
    )
    const data = await response.json()
    setWeather(data)
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder='Choose your city'
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default Weather
