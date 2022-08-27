import React, {useState} from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import { Watch } from "react-loader-spinner";
import "./Weather.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import ReactAnimatedWeather from "react-animated-weather"


export default function Weather(props) {
	const apiKey = "ede91dffad4c82a2b9559937327bdca6";
	const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
	const [city, setCity] = useState(props.city);
	const [weather, setWeather] = useState({ loaded: false });
	function showWeatherData(response) {
		console.log(response);
		setWeather({
			loaded: true,
			date: "Saturday, 20 june, 2022, 11:40",
			temp: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description
		});
	}
	function handleSubmit(event) {
		event.preventDefault();
		// axios
		// 	.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
		// 	.then(showWeatherData);
	}
	function searchCity(event) {
		setCity(event.target.value);
	}

	if (weather.loaded && weather.temp) {
		return (
			<div className="container-fluid">
				<div className="card card-main">
					<div className="card-header">
						<span className="card-title">
							<i className="icon fa-solid fa-location-dot"></i>
							<span className="title city">{city}</span>
						</span>
						<form onSubmit={handleSubmit} className="search">
							<input
								type="text"
								placeholder="Type city"
								autoComplete="off"
								onChange={searchCity}
							/>
							<i className="icon fa-solid fa-magnifying-glass"></i>
						</form>
					</div>
					<div className="card-body">
						<span className="time is-block">{weather.date}</span>
						<span className="degree is-block">
							<span className="value">
								{Math.round(weather.temp)}
							</span>
							<span className="unit">°C</span>
						</span>
						<span className="status is-block">
							<span className="value">
								<img
									className="icon"
									src={weather.icon}
									alt="Cloudy"
								/>
								<span id="description">
									{weather.description}
								</span>
							</span>
						</span>
						<h1 className="city">{city}</h1>
					</div>
					<div className="section section_forecast" id="forecast">
						<div className="row">
							<div className="col-3">
								<div className="card card-day mb-4">
									<span className="day is-block"></span>
									<span className="degree is-block">
										<span className="max">25°</span>
										<span className="min">13°</span>
									</span>
									<img
										src="http://openweathermap.org/img/wn/01d@2x.png"
										alt=""
										className="icon"
									/>
								</div>
							</div>
							<div className="col-3">
								<div className="card card-day mb-4">
									<span className="day is-block"></span>
									<span className="degree is-block">
										<span className="max">25°</span>
										<span className="min">13°</span>
									</span>
									<img
										src="http://openweathermap.org/img/wn/01d@2x.png"
										alt=""
										className="icon"
									/>
								</div>
							</div>
							<div className="col-3">
								<div className="card card-day mb-4">
									<span className="day is-block"></span>
									<span className="degree is-block">
										<span className="max">25°</span>
										<span className="min">13°</span>
									</span>
									<img
										src="http://openweathermap.org/img/wn/01d@2x.png"
										alt=""
										className="icon"
									/>
								</div>
							</div>
							<div className="col-3">
								<div className="card card-day mb-4">
									<span className="day is-block"></span>
									<span className="degree is-block">
										<span className="max">25°</span>
										<span className="min">13°</span>
									</span>
									<img
										src="http://openweathermap.org/img/wn/01d@2x.png"
										alt=""
										className="icon"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<div className="card card-info mb-4">
								<div className="card-body">
									<i className="icon fa-solid fa-water"></i>
									<span className="value">
										<span id="humidity">
											{weather.humidity}
										</span>
										%
									</span>
									<span>precipitation</span>
								</div>
							</div>
						</div>
						<div className="col-6">
							<div className="card card-info mb-4">
								<div className="card-body">
									<i className="icon fa-solid fa-wind"></i>
									<span className="value">
										<span id="wind">
											{Math.round(weather.wind)}
										</span>
										km/h
									</span>
									<span>wind</span>
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer">
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
			</div>
		);
	} else {
		axios
			.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
			.then(showWeatherData);
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

