import React, {useState, useEffect} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
	let [loaded, setLoaded] = useState(false)
	let [forecastData, setForecastData] = useState(null)

	useEffect(() => {
		setLoaded(false);
	}, [props.data.lat]);

	function handleResponse(response) {
		setForecastData(response.data.daily);
		setLoaded(true)
	}
	function loadData() {
		const apiKey = "a43564c91a6c605aeb564c9ed02e3858";
		const lat = props.data.lat;
		const lon = props.data.lon;
		const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}
	
	if (loaded) {
		return (
			<div className="section">
				<div className="row">
					{forecastData.map((dailyForecast, index) => {
						if (index < 5) {
							return (
								<div className="col" key={index}>
									<ForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null
						}
					})}
				</div>
			</div>
		);
	} else {
		loadData()
		return null
	}
   
}