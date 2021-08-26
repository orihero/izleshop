import * as React from "react";
import Svg, { Path } from "react-native-svg";

export interface IconProps {
	width?: number;
	height?: number;
	color?: string;
	active?: boolean;
}

export function ProfileIcon({
	color = "black",
	width = 24,
	height = 24,
	active,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height, width };
	if (active) {
		return (
			<Svg viewBox="-42 0 512 512.002" {...iconProps}>
				<Path d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zm0 0M426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 01-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 000 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0" />
			</Svg>
		);
	}

	return (
		<Svg {...iconProps} viewBox="0 0 512 512">
			<Path d="M210.352 246.633c33.882 0 63.218-12.153 87.195-36.13 23.969-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.13 87.195 23.98 23.969 53.316 36.125 87.19 36.125zM144.379 57.34c18.394-18.395 39.973-27.336 65.973-27.336 25.996 0 47.578 8.941 65.976 27.336 18.395 18.398 27.34 39.98 27.34 65.972 0 26-8.945 47.579-27.34 65.977-18.398 18.399-39.98 27.34-65.976 27.34-25.993 0-47.57-8.945-65.973-27.34-18.399-18.394-27.344-39.976-27.344-65.976 0-25.993 8.945-47.575 27.344-65.973zm0 0M426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.312-10.34-7.808-20.55-13.375-30.336-5.77-10.156-12.55-19-20.16-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 01-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.043 5.34-10.968 0-22.086-1.797-33.043-5.34-11.21-3.622-20.3-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.754-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.609 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.063 11.476-3.457 22.363-4.149 32.363C.343 403.492 0 413.668 0 423.949c0 26.727 8.496 48.363 25.25 64.32C41.797 504.017 63.688 512 90.316 512h246.532c26.62 0 48.511-7.984 65.062-23.73 16.758-15.946 25.254-37.59 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm-44.906 72.828c-10.934 10.406-25.45 15.465-44.38 15.465H90.317c-18.933 0-33.449-5.059-44.379-15.46-10.722-10.208-15.933-24.141-15.933-42.587 0-9.594.316-19.066.95-28.16.616-8.922 1.878-18.723 3.75-29.137 1.847-10.285 4.198-19.937 6.995-28.675 2.684-8.38 6.344-16.676 10.883-24.668 4.332-7.618 9.316-14.153 14.816-19.418 5.145-4.926 11.63-8.957 19.27-11.98 7.066-2.798 15.008-4.329 23.629-4.56 1.05.56 2.922 1.626 5.953 3.602 6.168 4.02 13.277 8.606 21.137 13.625 8.86 5.649 20.273 10.75 33.91 15.152 13.941 4.508 28.16 6.797 42.273 6.797 14.114 0 28.336-2.289 42.27-6.793 13.648-4.41 25.058-9.507 33.93-15.164 8.043-5.14 14.953-9.593 21.12-13.617 3.032-1.973 4.903-3.043 5.954-3.601 8.625.23 16.566 1.761 23.636 4.558 7.637 3.024 14.122 7.059 19.266 11.98 5.5 5.262 10.484 11.798 14.816 19.423 4.543 7.988 8.208 16.289 10.887 24.66 2.801 8.75 5.156 18.398 7 28.675 1.867 10.434 3.133 20.239 3.75 29.145v.008c.637 9.058.957 18.527.961 28.148-.004 18.45-5.215 32.38-15.937 42.582zm0 0" />
		</Svg>
	);
}
export function HeartIcon({
	color = "black",
	width = 24,
	height = 24,
	active,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height, width };
	if (active) {
		return (
			<Svg viewBox="0 -28 512.00002 512" {...iconProps}>
				<Path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 00256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0" />
			</Svg>
		);
	}

	return (
		<Svg viewBox="0 0 512 512" {...iconProps}>
			<Path d="M474.644 74.27C449.391 45.616 414.358 29.836 376 29.836c-53.948 0-88.103 32.22-107.255 59.25-4.969 7.014-9.196 14.047-12.745 20.665-3.549-6.618-7.775-13.651-12.745-20.665-19.152-27.03-53.307-59.25-107.255-59.25-38.358 0-73.391 15.781-98.645 44.435C13.267 101.605 0 138.213 0 177.351c0 42.603 16.633 82.228 52.345 124.7 31.917 37.96 77.834 77.088 131.005 122.397 19.813 16.884 40.302 34.344 62.115 53.429l.655.574c2.828 2.476 6.354 3.713 9.88 3.713s7.052-1.238 9.88-3.713l.655-.574c21.813-19.085 42.302-36.544 62.118-53.431 53.168-45.306 99.085-84.434 131.002-122.395C495.367 259.578 512 219.954 512 177.351c0-39.138-13.267-75.746-37.356-103.081zM309.193 401.614c-17.08 14.554-34.658 29.533-53.193 45.646-18.534-16.111-36.113-31.091-53.196-45.648C98.745 312.939 30 254.358 30 177.351c0-31.83 10.605-61.394 29.862-83.245C79.34 72.007 106.379 59.836 136 59.836c41.129 0 67.716 25.338 82.776 46.594 13.509 19.064 20.558 38.282 22.962 45.659a15 15 0 0028.524 0c2.404-7.377 9.453-26.595 22.962-45.66 15.06-21.255 41.647-46.593 82.776-46.593 29.621 0 56.66 12.171 76.137 34.27C471.395 115.957 482 145.521 482 177.351c0 77.007-68.745 135.588-172.807 224.263z" />
		</Svg>
	);
}
export function CategoriesIcon({
	color = "black",
	width = 24,
	height = 24,
	active,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height, width };
	if (active) {
		return (
			<Svg viewBox="0 0 297.001 297.001" {...iconProps}>
				<Path d="M107.883 0h-85.27C10.144 0 .001 10.143.001 22.612v85.27c0 12.469 10.143 22.612 22.612 22.612h85.27c12.469 0 22.612-10.143 22.612-22.612v-85.27C130.493 10.143 120.352 0 107.883 0zM274.388 0h-85.27c-12.469 0-22.612 10.143-22.612 22.612v85.27c0 12.469 10.143 22.612 22.612 22.612h85.27c12.469 0 22.612-10.143 22.612-22.612v-85.27C297 10.143 286.857 0 274.388 0zM107.883 166.507h-85.27c-12.469 0-22.612 10.142-22.612 22.611v85.27C.001 286.857 10.144 297 22.613 297h85.27c12.469 0 22.612-10.143 22.612-22.612v-85.27c-.002-12.469-10.143-22.611-22.612-22.611zM274.388 166.507h-85.27c-12.469 0-22.612 10.143-22.612 22.612v85.27c0 12.469 10.143 22.612 22.612 22.612h85.27C286.857 297 297 286.857 297 274.388v-85.27c0-12.469-10.143-22.611-22.612-22.611z" />
			</Svg>
		);
	}
	return (
		<Svg viewBox="0 0 512 512" {...iconProps} strokeWidth={0.1}>
			<Path d="M452 276H336c-33.084 0-60 26.916-60 60v116c0 33.084 26.916 60 60 60h116c33.084 0 60-26.916 60-60V336c0-33.084-26.916-60-60-60zm20 176c0 11.028-8.972 20-20 20H336c-11.028 0-20-8.972-20-20V336c0-11.028 8.972-20 20-20h116c11.028 0 20 8.972 20 20zM176 276H60c-33.084 0-60 26.916-60 60v116c0 33.084 26.916 60 60 60h116c33.084 0 60-26.916 60-60V336c0-33.084-26.916-60-60-60zm20 176c0 11.028-8.972 20-20 20H60c-11.028 0-20-8.972-20-20V336c0-11.028 8.972-20 20-20h116c11.028 0 20 8.972 20 20zM176 0H60C26.916 0 0 26.916 0 60v116c0 33.084 26.916 60 60 60h116c33.084 0 60-26.916 60-60V60c0-33.084-26.916-60-60-60zm20 176c0 11.028-8.972 20-20 20H60c-11.028 0-20-8.972-20-20V60c0-11.028 8.972-20 20-20h116c11.028 0 20 8.972 20 20zM452 0H336c-33.084 0-60 26.916-60 60v116c0 33.084 26.916 60 60 60h116c33.084 0 60-26.916 60-60V60c0-33.084-26.916-60-60-60zm20 176c0 11.028-8.972 20-20 20H336c-11.028 0-20-8.972-20-20V60c0-11.028 8.972-20 20-20h116c11.028 0 20 8.972 20 20z" />
		</Svg>
	);
}
export function HomeIcon({
	color = "black",
	width = 24,
	height = 24,
	active,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height, width };
	if (active) {
		return (
			<Svg viewBox="0 0 512 512" {...iconProps}>
				<Path d="M256 152.96L79.894 288.469 79.894 470.018 221.401 470.018 221.401 336.973 296.576 336.973 296.576 470.018 432.107 470.018 432.107 288.469z" />
				<Path d="M439.482 183.132L439.482 90.307 365.316 90.307 365.316 126.077 256 41.982 0 238.919 35.339 284.855 256 115.062 476.662 284.856 512 238.92z" />
			</Svg>
		);
	}
	return (
		<Svg viewBox="0 0 463.937 463.937" {...iconProps}>
			<Path d="M460.414 216.518l-85.6-73.1c.1-.5.2-1 .3-1.6v-95.6c-.1-5.7-4.6-10.3-10.3-10.5h-47.8c-5.5 0-10 4.9-10 10.5v39.6l-68.5-58.4c-3.7-3.2-9.2-3.2-13 0l-221.9 189c-4.3 3.5-4.8 9.8-1.3 14.1s9.8 4.8 14.1 1.3l.2-.2 215.4-183.4 77.1 65.7 46.1 39.2 92.3 78.6c4.2 3.6 10.5 3.1 14.1-1.1 3.5-4.2 3-10.5-1.2-14.1zm-105.4-90l-28-23.6v-47.1h28v70.7z" />
			<Path d="M416.314 236.718l-28.1-24-149.7-127.9c-3.7-3.2-9.2-3.2-13 0l-149.7 127.9-28.1 24c-4.2 3.6-4.7 9.9-1.1 14.1 3.5 4.2 9.7 4.7 13.8 1.2l.1-.1 12.5-10.8v187.5c.1 5.6 4.7 10.2 10.3 10.3h297.3c5.6-.1 10.2-4.6 10.3-10.3v-187.5l12.5 10.8c1.8 1.5 4 2.4 6.4 2.4 2.9 0 5.7-1.3 7.6-3.5 3.7-4.3 3.1-10.6-1.1-14.1zm-144.3 182.1h-80v-108h80v108zm20 0v-117.7c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5 0-9.6 4.8-9.6 10.3v117.7h-79v-194.8l139-118.4 139 118.4v194.8h-79z" />
		</Svg>
	);
}
export function CartIcon({
	color = "black",
	width = 24,
	height = 24,
	active,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height, width };
	if (active) {
		return (
			<Svg viewBox="0 0 456.029 456.029" {...iconProps}>
				<Path d="M345.6 338.862c-29.184 0-53.248 23.552-53.248 53.248 0 29.184 23.552 53.248 53.248 53.248 29.184 0 53.248-23.552 53.248-53.248-.512-29.184-24.064-53.248-53.248-53.248zM439.296 84.91c-1.024 0-2.56-.512-4.096-.512H112.64l-5.12-34.304C104.448 27.566 84.992 10.67 61.952 10.67H20.48C9.216 10.67 0 19.886 0 31.15c0 11.264 9.216 20.48 20.48 20.48h41.472c2.56 0 4.608 2.048 5.12 4.608l31.744 216.064c4.096 27.136 27.648 47.616 55.296 47.616h212.992c26.624 0 49.664-18.944 55.296-45.056l33.28-166.4c2.048-10.752-5.12-21.504-16.384-23.552zM215.04 389.55c-1.024-28.16-24.576-50.688-52.736-50.688-29.696 1.536-52.224 26.112-51.2 55.296 1.024 28.16 24.064 50.688 52.224 50.688h1.024c29.184-1.536 52.224-26.112 50.688-55.296z" />
			</Svg>
		);
	}
	return (
		<Svg viewBox="0 0 511.997 511.997" {...iconProps}>
			<Path d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zM507.927 115.875a19.128 19.128 0 00-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 00-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0018.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 00-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zM173.646 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z" />
		</Svg>
	);
}
