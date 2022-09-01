import React, {useState} from "react"
import axios from "axios"
import { Watch } from "react-loader-spinner";
import "./Weather.css";
import WeatherData from "./WeatherData";
import WeatherInfo from "./WeatherInfo";
import SearchIcon from "./SearchIcon";
import LocationIcon from "./LocationIcon";
import Forecast from "./Forecast";


export default function Weather(props) {
	const [city, setCity] = useState(props.city);
	const [weather, setWeather] = useState({ loaded: false });
	function showWeatherData(response) {
		// console.log(response);
		setWeather({
			loaded: true,
			date: new Date(response.data.dt * 1000),
			coord: response.data.coord,
			temp: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: response.data.weather[0].icon,
			description: response.data.weather[0].description,
			city: response.data.name
		});
	}
	function searchData() {
		const apiKey = "2fe6ec39cead4bf5f5de2e9b905799fc";
		const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
		axios
			.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
			.then(showWeatherData);
	}
	function handleSubmit(event) {
		event.preventDefault();
		searchData(); 
	}
	function searchCity(event) {
		setCity(event.target.value);
	}

	if (weather.loaded) {
		return (
			<div className="card card_weather">
				<form onSubmit={handleSubmit}>
					<div className="search">
						<LocationIcon size={24} color={"#2E3A59"} />
						<input
							className="search__input"
							type="search"
							placeholder={city}
							autoFocus="on"
							onChange={searchCity}
						/>
						<SearchIcon
							className="ml-auto"
							size={24}
							color={"#2E3A59"}
						/>
					</div>
				</form>
				<WeatherData data={weather} />
				<WeatherInfo data={weather} />
				<Forecast data={weather.coord} />

				<div className="card__footer">
					<small>
						<a
							href="https://github.com/HelgaZhizhka/weather-react-app"
							target="_blank"
							rel="noreferrer"
						>
							open source code
						</a>{" "}
						by Olga Zhyzhka and hosted on{" "}
						<a
							href="https://weather-app-helga.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							Netlify
						</a>
					</small>
				</div>
			</div>
		);
	} else {
		searchData(); 
		return (
			<Watch
				height="80"
				width="80"
				radius="48"
				color="#335fd1"
				ariaLabel="watch-loading"
				wrapperStyle={{}}
				wrapperClassName="loader"
				visible={true}
			/>
		);
	}
}

