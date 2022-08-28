import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit() {
        setUnit("fahrenheit");
    }
    function showCelsius() {
        setUnit("celsius");
    }
    function convertToFahrenheit() {
        return Math.round((props.celsius * 9) / 5 + 32);
    }
   

    if (unit==="celsius") {
       return (
			<span className="card__degree">
				{Math.round(props.celsius)}
                <span className="units">
                    <span>°C</span>
				    <span className="divider">|</span>
				    <span className="link" onClick={showFahrenheit}>
					°F
				    </span>
                </span>
				
			</span>
		);
    } else {
        return (
			<span className="card__degree">
				{convertToFahrenheit()}
				<span className="units">
					<span className="link" onClick={showCelsius}>
						°C
					</span>
					<span className="divider">|</span>
					<span>°F</span>
				</span>
			</span>
		);
    }
}