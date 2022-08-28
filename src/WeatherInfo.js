
import React from "react";
import WindyIcon from "./WindyIcon";
import HumidityIcon from "./HumidityIcon";

export default function WeatherInfo(props) {
return (
	<div className="row">
		<div className="col-6">
			<div className="card card_info mb-4">
				<div className="card__body">
					<HumidityIcon size={24} />
					<span className="col">
						<span className="card__value">
							{props.data.humidity}%
						</span>
						<span>precipitation</span>
					</span>
				</div>
			</div>
		</div>
		<div className="col-6">
			<div className="card card_info mb-4">
				<div className="card__body">
					<WindyIcon size={24} />
					<span className="col">
						<span className="card__value">
							{Math.round(props.data.wind)}km/h
						</span>
						<span>wind</span>
					</span>
				</div>
			</div>
		</div>
	</div>
);
}