import React, {useState} from "react";
import axios from "axios";

export default function Weather(props) {
    const apiKey = "455cf20328f600486402fed093d6b1c7";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const [temp, setTemp] = useState(null);

    function showWeatherData(response) {
        setTemp(response.data.main.temp)
    }
    axios
		.get(`${apiUrl}?q=${props.city}&appid=${apiKey}&units=metric`)
		.then(showWeatherData);
    
        
    return (
		<div className="container">
			<h2>
				Weather in {props.city} is {Math.round(temp)}
			</h2>
		</div>
	);
}

