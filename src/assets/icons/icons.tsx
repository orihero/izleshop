import * as React from 'react';
import {
	Animated,
	GestureResponderEvent,
	TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'constants/colors';

let AnimatedPath = Animated.createAnimatedComponent(Path);

export interface IconProps {
	color?: string;
	active?: boolean;
	size?: number;
	style?: any;
	onPress?: () => void;
}

export function ProfileIcon({ color = 'black', active, size }: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
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

export interface PressableIconProps extends React.ComponentProps<any> {
	onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableIcon = ({ onPress, children }: PressableIconProps) => {
	return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export function HeartIcon({
	color = 'white',
	active,
	size,
	onPress,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
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
export function CategoriesIcon({ color = 'black', active, size }: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
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
export function HomeIcon({ color = 'white', active, size }: IconProps) {
	let iconProps = { fill: 'none', stroke: color, height: 40, width: 40 };
	// if (active) {
	// 	return (
	// 		<Svg viewBox="0 0 512 512" {...iconProps}>
	// 			<Path d="M256 152.96L79.894 288.469 79.894 470.018 221.401 470.018 221.401 336.973 296.576 336.973 296.576 470.018 432.107 470.018 432.107 288.469z" />
	// 			<Path d="M439.482 183.132L439.482 90.307 365.316 90.307 365.316 126.077 256 41.982 0 238.919 35.339 284.855 256 115.062 476.662 284.856 512 238.92z" />
	// 		</Svg>
	// 	);
	// }
	return (
		<Svg width={30} height={30} stroke={color} strokeWidth={2}>
			<Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
			<Path d="M9 22V12h6v10" />
		</Svg>
	);
}
export function CartIcon({ color = 'black', active, size }: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
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

export function SearchIcon({ color = 'black', size = 24 }: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 512 512" {...iconProps}>
			<Path d="M508.875 493.792L353.089 338.005c32.358-35.927 52.245-83.296 52.245-135.339C405.333 90.917 314.417 0 202.667 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c52.043 0 99.411-19.887 135.339-52.245l155.786 155.786a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.166-4.167 4.166-10.917-.001-15.083zM202.667 384c-99.979 0-181.333-81.344-181.333-181.333S102.688 21.333 202.667 21.333 384 102.677 384 202.667 302.646 384 202.667 384z" />
		</Svg>
	);
}

export function StarIcon({ color, active, size, style }: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	if (active) {
		return (
			<Svg style={style} viewBox="0 0 512.002 512.002" {...iconProps}>
				<Path d="M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z" />
			</Svg>
		);
	}
	return (
		<Svg style={style} viewBox="0 0 512.001 512.001" {...iconProps}>
			<Path d="M511.266 197.256a14.998 14.998 0 00-12.108-10.209l-158.722-23.065-70.984-143.827a15 15 0 00-26.902 0l-70.988 143.828-158.719 23.064a15 15 0 00-8.313 25.585l114.848 111.955L92.27 482.67a15 15 0 0021.765 15.812L256 423.846l141.961 74.637a14.982 14.982 0 006.979 1.723 15 15 0 0014.786-17.536L392.61 324.587l114.86-111.954a15 15 0 003.796-15.377zM366.023 308.608a14.996 14.996 0 00-4.314 13.278l23.311 135.898-122.038-64.162a15.004 15.004 0 00-13.961 0l-122.045 64.163 23.304-135.9a15.003 15.003 0 00-4.313-13.276l-98.731-96.244 136.445-19.829a15 15 0 0011.294-8.205L256 60.685l61.023 123.645a15.002 15.002 0 0011.294 8.206l136.447 19.828-98.741 96.244z" />
		</Svg>
	);
}

export function BackIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg {...iconProps} fill={'none'}>
			<Path
				d="M9 16.5L1 9l8-7.5"
				stroke="#000"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export function TrashIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg x="0px" y="0px" viewBox="0 0 512 512" {...iconProps}>
			<Path d="M408.299 98.512l-32.643 371.975H136.344L103.708 98.512l-41.354 3.625 33.232 378.721C97.335 498.314 112.481 512 130.076 512h251.849c17.588 0 32.74-13.679 34.518-31.391l33.211-378.472-41.355-3.625z" />
			<Path d="M332.108 0H179.892c-19.076 0-34.595 15.519-34.595 34.595v65.73h41.513V41.513h138.378v58.811h41.513v-65.73C366.703 15.519 351.184 0 332.108 0z" />
			<Path d="M477.405 79.568H34.595c-11.465 0-20.757 9.292-20.757 20.757s9.292 20.757 20.757 20.757h442.811c11.465 0 20.757-9.292 20.757-20.757s-9.293-20.757-20.758-20.757z" />
		</Svg>
	);
}

export function CloseIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 512.001 512.001" {...iconProps}>
			<Path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" />
		</Svg>
	);
}
export function ChevronIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 512 512" {...iconProps}>
			<Path d="M367.954 213.588L160.67 5.872c-7.804-7.819-20.467-7.831-28.284-.029-7.819 7.802-7.832 20.465-.03 28.284l207.299 207.731c7.798 7.798 7.798 20.486-.015 28.299L132.356 477.873c-7.802 7.819-7.789 20.482.03 28.284A19.935 19.935 0 00146.513 512c5.125 0 10.25-1.958 14.157-5.873l207.269-207.701c23.394-23.394 23.394-61.459.015-84.838z" />
		</Svg>
	);
}
export function WalletIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 507.246 507.246" {...iconProps}>
			<Path d="M331.898 289.906c0 22.786 18.537 41.323 41.322 41.323h134.025v-82.646H373.221c-22.785.001-41.323 18.538-41.323 41.323zm63.92 1.214c0 9.2-7.458 16.658-16.658 16.658s-16.658-7.458-16.658-16.658 7.458-16.658 16.658-16.658c9.2.001 16.658 7.459 16.658 16.658z" />
			<Path d="M373.221 363.229c-40.43 0-73.322-32.893-73.322-73.323s32.893-73.323 73.322-73.323h134.025v-55.838c0-37.771-30.729-68.5-68.5-68.5H68.5c-37.771 0-68.5 30.729-68.5 68.5v256.333c0 37.771 30.729 68.5 68.5 68.5h370.247c37.771 0 68.5-30.729 68.5-68.5v-53.849zM68.5 60.246c402.455 0 373.612-.332 382.448.742-10.978-23.216-34.618-39.32-61.956-39.32H68.5c-36.779 0-66.868 29.139-68.424 65.541C18.03 70.491 42.089 60.246 68.5 60.246z" />
		</Svg>
	);
}

export function LogoutIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let props = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg
			viewBox="0 0 23 22"
			{...props}
		>
			<Path
				d="M20.448 22H9.354a2.455 2.455 0 01-2.466-2.444v-4.89H9V20h12V2H9v5.333H6.888V2.444A2.455 2.455 0 019.354 0h11.094a2.455 2.455 0 012.466 2.444v17.112A2.455 2.455 0 0120.448 22zm-8.629-6.111v-3.667H.725V9.778h11.094V6.11L17.983 11l-6.164 4.889z"
				fill="#000"
			/>
		</Svg>
	);
}

export function CreditCardIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 512 512" {...iconProps}>
			<Path d="M512 163v-27c0-30.928-25.072-56-56-56H56c-30.928 0-56 25.072-56 56v27a5 5 0 005 5h502a5 5 0 005-5zM0 205v171c0 30.928 25.072 56 56 56h400c30.928 0 56-25.072 56-56V205a5 5 0 00-5-5H5a5 5 0 00-5 5zm128 131c0 8.836-7.164 16-16 16H96c-8.836 0-16-7.164-16-16v-16c0-8.836 7.164-16 16-16h16c8.836 0 16 7.164 16 16z" />
		</Svg>
	);
}

export function CreditCardsPaymentIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 611.996 611.996" {...iconProps}>
			<Path d="M588.63 113.193L213.812 33.871c-15.858-3.355-31.576 6.876-34.931 22.734l-7.121 45.762 432.477 91.519 7.121-45.762c3.355-15.852-6.87-31.575-22.728-34.931zM431.009 203.591c-4.378-15.766-20.854-25.085-36.615-20.714L323.24 202.63l-167.742-35.5-18.448 87.165-115.264 31.992c-15.76 4.372-25.079 20.848-20.708 36.609l64.958 234.078c4.378 15.76 20.855 25.085 36.615 20.708l372.608-103.403c15.76-4.378 25.079-20.848 20.708-36.615l-11.15-40.184 41.789 8.835c15.858 3.361 31.576-6.87 34.931-22.728l26.439-124.937-150.526-31.853-6.441-23.206zm43.031 118.968l9.215-43.552c1.384-6.521 7.85-10.727 14.37-9.35l43.552 9.221c6.527 1.384 10.733 7.843 9.356 14.37l-9.215 43.552c-1.384 6.521-7.849 10.733-14.37 9.35l-43.552-9.215c-6.533-1.389-10.74-7.855-9.356-14.376zM28.27 309.646l103.115-28.606 243.299-67.517 26.181-7.274c.478-.129.955-.19 1.421-.19 2.1 0 4.611 1.378 5.345 4.017l3.074 11.07 9.631 34.704L37.148 362.186l-12.705-45.768c-.796-2.872.956-5.976 3.827-6.772zm444.331 134.495c.49 1.776-.024 3.245-.545 4.164-.514.918-1.506 2.119-3.282 2.608L96.173 554.316a5.42 5.42 0 01-1.421.196c-2.1 0-4.611-1.384-5.345-4.023L51.519 413.955l383.188-106.342 23.371 84.208 14.523 52.32z" />
			<Path d="M156.379 453.484c-1.788-6.429-8.499-10.225-14.928-8.443l-43.515 12.08c-6.423 1.782-10.225 8.499-8.437 14.928l12.074 43.509c1.788 6.429 8.499 10.225 14.928 8.437l43.515-12.074c6.429-1.782 10.225-8.499 8.443-14.928l-12.08-43.509z" />
		</Svg>
	);
}

export function ButtonIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 426.667 426.667" {...iconProps}>
			<Path d="M213.333 106.667c-58.88 0-106.667 47.787-106.667 106.667S154.453 320 213.333 320 320 272.213 320 213.333s-47.787-106.666-106.667-106.666z" />
			<Path d="M213.333 0C95.467 0 0 95.467 0 213.333s95.467 213.333 213.333 213.333S426.667 331.2 426.667 213.333 331.2 0 213.333 0zm0 384c-94.293 0-170.667-76.373-170.667-170.667S119.04 42.667 213.333 42.667 384 119.04 384 213.333 307.627 384 213.333 384z" />
		</Svg>
	);
}

export function CircleIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 31.424 31.425" {...iconProps}>
			<Path d="M15.712 3.132c6.937 0 12.581 5.644 12.581 12.58 0 6.938-5.645 12.581-12.581 12.581-6.937 0-12.58-5.645-12.58-12.581 0-6.937 5.643-12.58 12.58-12.58m0-3.132C7.035 0 0 7.034 0 15.712c0 8.679 7.035 15.713 15.712 15.713s15.712-7.034 15.712-15.713C31.425 7.034 24.389 0 15.712 0z" />
		</Svg>
	);
}

export function SettingIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let props = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg
			viewBox="0 0 19 19"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.289 6.996c-1.262 0-2.285.972-2.285 2.17 0 1.2 1.023 2.172 2.285 2.172 1.262 0 2.285-.972 2.285-2.171 0-1.2-1.023-2.171-2.285-2.171zM5.48 9.166c0-1.998 1.705-3.618 3.809-3.618 2.103 0 3.808 1.62 3.808 3.619 0 1.998-1.705 3.618-3.808 3.618-2.104 0-3.809-1.62-3.809-3.618z"
				fill="#0E1732"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.088 9.167l.219.12c1.205.665 1.622 2.128.933 3.28l-1.397 2.335c-.698 1.166-2.261 1.568-3.482.895l-.188-.104v.228c0 1.332-1.136 2.412-2.538 2.412H7.863c-1.402 0-2.539-1.08-2.539-2.412v-.197l-.09.051c-1.222.69-2.802.292-3.504-.882L.332 12.557c-.683-1.142-.279-2.594.91-3.265l.222-.125-.222-.125C.053 8.37-.35 6.918.332 5.776L1.73 3.44c.702-1.174 2.282-1.572 3.504-.882l.09.051v-.197C5.324 1.08 6.461 0 7.863 0h2.772c1.402 0 2.539 1.08 2.539 2.412v.228l.188-.104c1.22-.672 2.783-.27 3.48.895l1.398 2.336c.689 1.151.272 2.615-.933 3.279l-.22.12zM15.566 10a.941.941 0 010-1.669l.977-.538c.482-.266.648-.851.373-1.312l-1.398-2.336c-.279-.466-.904-.627-1.392-.358l-.95.524c-.678.373-1.526-.09-1.526-.834V2.412c0-.533-.455-.965-1.015-.965H7.863c-.56 0-1.016.432-1.016.965v1.045c0 .748-.857 1.212-1.534.83l-.857-.485c-.49-.275-1.121-.116-1.402.353L1.656 6.491c-.273.457-.111 1.038.365 1.307l.956.54a.94.94 0 010 1.658l-.956.54c-.476.268-.638.85-.365 1.306l1.398 2.336c.28.47.913.629 1.402.353l.857-.484c.677-.382 1.534.081 1.534.83v1.044c0 .533.455.965 1.016.965h2.772c.56 0 1.015-.432 1.015-.965v-1.065c0-.744.848-1.208 1.525-.835l.95.524c.489.269 1.114.108 1.393-.358l1.398-2.336c.275-.46.109-1.046-.373-1.312l-.977-.538z"
				fill="#0E1732"
			/>
		</Svg>
	);
}

export function FilterIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 15 16" {...iconProps}>
			<Path d="M7.95 7.526V.434A.432.432 0 007.516 0a.432.432 0 00-.434.434v7.092a2.207 2.207 0 00-1.768 2.16c0 1.067.762 1.957 1.768 2.16v3.157c0 .24.193.434.434.434a.432.432 0 00.434-.434v-3.157a2.207 2.207 0 001.768-2.16 2.206 2.206 0 00-1.768-2.16zm-.434 3.494a1.335 1.335 0 11.002-2.67 1.335 1.335 0 01-.002 2.67zM2.636 3.887V.434A.432.432 0 002.202 0a.432.432 0 00-.434.434v3.453A2.207 2.207 0 000 6.047c0 1.067.762 1.958 1.768 2.16v6.796c0 .24.193.434.434.434a.432.432 0 00.434-.434v-6.8a2.207 2.207 0 001.768-2.16 2.204 2.204 0 00-1.768-2.156zM2.202 7.38a1.335 1.335 0 11.002-2.67 1.335 1.335 0 01-.002 2.67zM13.232 3.887V.434A.432.432 0 0012.798 0a.432.432 0 00-.434.434v3.453a2.207 2.207 0 00-1.768 2.16c0 1.067.762 1.958 1.768 2.16v6.799c0 .241.193.434.434.434a.432.432 0 00.434-.434V8.204a2.2 2.2 0 000-4.317zm-.434 3.494a1.335 1.335 0 11.002-2.67 1.335 1.335 0 01-.002 2.67z" />
		</Svg>
	);
}


export function BirthdayIcon({
	color = 'white',
	active,
	size = 20,
	style,
}: IconProps) {
	let props = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg
			viewBox="0 0 20 20"
			{...props}
		>
			<Path
				d="M1 8.875h18M14.5 5.5V1m-9 4.5V1M1 3.25h18V19H1V3.25z"
				stroke="#1779C8"
				strokeWidth={2}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}


export function PhoneIcon({
	color = 'white',
	active,
	size = 20,
	style,
}: IconProps) {
	let props = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg
		viewBox="0 0 14 20"
		{...props}
	  >
		<Path
		  d="M12.625 1H1.375v18h11.25V1zM6.994 15.625h.011"
		  stroke= {colors.blueLight}
		  strokeWidth={2}
		  strokeLinecap="round"
		  strokeLinejoin="round"
		/>
	  </Svg>
	);
}


export function LanguageIcon({
	color = '#1779C8',
	active,
	size = 20,
	style,
}: IconProps) {
	let props = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.999 12.027a12 12 0 10-6.106 10.426l.1.022.02-.095A11.97 11.97 0 0024 12.027zm-22.235 0c.003-.866.117-1.728.338-2.565H5.73L10 13.019l-1.634 2.178a1.718 1.718 0 00.16 2.235l1.79 1.791v2.912a10.271 10.271 0 01-8.552-10.108zm7.97 4.196l2.608-3.478L6.35 7.751h-3.64a10.23 10.23 0 0115.204-4.117l-.517 1.551h-4.87L9.926 7.788l8 7.109-1.411 6.345a10.18 10.18 0 01-4.488 1.047v-3.774l-2.292-2.292zm8.822 3.715l1.037-4.67a1.71 1.71 0 00-.533-1.648l-6.643-5.906.819-.818h4.16c.737 0 1.39-.471 1.623-1.17l.302-.907a10.243 10.243 0 01-.765 15.119z"
        fill="#1779C8"
      />
    </Svg>
	);
}

export function ArrowsIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 12 15" {...iconProps}>
			<Path d="M7.5 5.313v7.562l-1.327-1.517a.313.313 0 00-.235-.108h-.625a.312.312 0 00-.233.522l2.813 3.125a.313.313 0 00.464 0l2.813-3.125a.313.313 0 00-.232-.522h-.625a.312.312 0 00-.235.107L8.75 12.875V5.313A.312.312 0 008.438 5h-.625a.312.312 0 00-.313.313zM2.893.103L.08 3.228a.313.313 0 00.232.522h.625a.312.312 0 00.235-.107L2.5 2.125v7.562a.312.312 0 00.313.313h.625a.313.313 0 00.312-.313V2.125l1.328 1.517a.313.313 0 00.235.108h.625a.312.312 0 00.232-.522L3.358.103a.312.312 0 00-.464 0h-.001z" />
		</Svg>
	);
}

export function MenuLinkIcon({
	color = 'black',
	active,
	size = 20,
	style,
}: IconProps) {
	let iconProps = { fill: color, stroke: color, height: size, width: size };
	return (
		<Svg viewBox="0 0 20 14" {...iconProps}>
			<Path d="M1.739 0a1.74 1.74 0 100 3.479A1.74 1.74 0 001.74 0zM1.739 5.232a1.739 1.739 0 100 3.477 1.739 1.739 0 000-3.477zM1.739 10.463a1.74 1.74 0 100 3.479 1.74 1.74 0 000-3.479zM18.692.432H6.322a1.308 1.308 0 000 2.616h12.37a1.308 1.308 0 000-2.616zM18.692 5.663H6.322a1.308 1.308 0 000 2.616h12.37a1.308 1.308 0 000-2.616zM18.692 10.895H6.322a1.308 1.308 0 000 2.616h12.37a1.308 1.308 0 000-2.616z" />
		</Svg>
	);
}
