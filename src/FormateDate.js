import React from "react";
import Clock from "./Clock";

export default function FormateDate(props) {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	let number = props.date.getDate();
	let day = days[props.date.getDay()];
	let month = months[props.date.getMonth()];
	let year = props.date.getFullYear();


	return (
		<div className="card__col mb-4">
			<span>
				{day}, {number} {month}, {year}
			</span>
			<Clock />
		</div>
	);
}
