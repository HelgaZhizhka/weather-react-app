import React from "react";

export default function HumidityIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size}
			height={props.size}
			fill="none"
		>
			<g clipPath="url(#a)">
				<path
					d="M15 19c-1.06.667-2.394 1-4 1-3 0-4-3.5-9-5 .575-.667 1.408-1 2.5-1 3.482 0 5.29 5 10.5 5Zm4-4.5a8.31 8.31 0 0 1-4 1c-5 0-6-6-13-4C3.16 9.833 4.827 9 7 9c3.325 0 6 5.5 12 5.5Zm4-4.5c-1.333.667-2.833 1-4.5 1-6 0-7.5-9-16.5-3 .5-2.5 3-4.5 6-4.5 6.5 0 7.5 6.5 15 6.5Z"
					fill="#3C6EEF"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path
						fill="#fff"
						transform="rotate(90 12 12)"
						d="M0 0h24v24H0z"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}
