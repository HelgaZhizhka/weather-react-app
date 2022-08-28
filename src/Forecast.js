import React from "react";

export default function Forecast(props) {
    return (
		<div className="section">
			<h2 className="section__title">Forecast</h2>
			<div className="row">
				<div className="col-3">
					<div className="card card_day">
						<img
							src="http://openweathermap.org/img/wn/01d@2x.png"
							alt=""
							className="icon"
						/>
						<span className="card__value">
							<span className="is-max">25°</span>
							<span className="is-min">13°</span>
						</span>
					</div>
				</div>
				<div className="col-3">
					<div className="card card_day">
						<img
							src="http://openweathermap.org/img/wn/01d@2x.png"
							alt=""
							className="icon"
						/>
						<span className="card__value">
							<span className="is-max">25°</span>
							<span className="is-min">13°</span>
						</span>
					</div>
				</div>
				<div className="col-3">
					<div className="card card_day">
						<img
							src="http://openweathermap.org/img/wn/01d@2x.png"
							alt=""
							className="icon"
						/>
						<span className="card__value">
							<span className="is-max">25°</span>
							<span className="is-min">13°</span>
						</span>
					</div>
				</div>
				<div className="col-3">
					<div className="card card_day">
						<img
							src="http://openweathermap.org/img/wn/01d@2x.png"
							alt=""
							className="icon"
						/>
						<span className="card__value">
							<span className="is-max">25°</span>
							<span className="is-min">13°</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}