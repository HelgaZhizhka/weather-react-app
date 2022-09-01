import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    function roundTemperature(temp) {
        let temperature = Math.round(temp);
        return `${temperature}°`;
    }
    function formatDay(date) {
        let day = new Date(date * 1000).getDay();
        let days = [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		];
        return days[day];
    }
    return (
		<div className="card card_day">
			<span className="card__title">{formatDay(props.data.dt)}</span>
			<WeatherIcon
				className="card__icon"
				code={props.data.weather[0].icon}
				color={"#183052"}
				size={36}
			/>
			<span className="card__value">
				<span className="is-max">
					{roundTemperature(props.data.temp.max)}
				</span>
				<span className="is-min">
					{roundTemperature(props.data.temp.min)}
				</span>
			</span>
		</div>
	);
}
