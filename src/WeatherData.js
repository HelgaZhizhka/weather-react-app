
import React from "react";
import FormateDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
return (
	<div className="card__body">
		<FormateDate date={props.data.date} />
		<div className="card__col align-items-center">
			<span className="card__promo">
				<WeatherTemperature celsius={props.data.temp} />
				<h1 className="card__title">{props.data.city}</h1>
				<span className="card__description">
					{props.data.description}
				</span>
			</span>
			<WeatherIcon
				className="card__icon"
				code={props.data.icon}
				color={"#fff"}
				size={68}
			/>
		</div>
	</div>
);
}