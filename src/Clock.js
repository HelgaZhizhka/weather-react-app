import React, { useState, useEffect } from "react";

export default function Clock() {
	let time = new Date().toLocaleTimeString();
	const [clockState, setClockState] = useState(time);
	useEffect(() => {
		setInterval(() => {
			let time = new Date().toLocaleTimeString();
			setClockState(time);
		}, 1000);
	}, []);

	return <span className="clock">{clockState}</span>;
}
