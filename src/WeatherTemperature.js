import React from "react";

export default function WeatherTemperature(props) {
	return (
		<span className="card__degree">
			{Math.round(props.celsius)}
			<span className="units">
				<span>°C</span>
			</span>
		</span>
	)
}