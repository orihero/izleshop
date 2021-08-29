import React, { useState } from 'react';
import { paddingVertical, windowWidth } from '../../../constants/sizes';
import HomeView from './view';

const HomeController = () => {
	//TODO styles and move hooks to controller
	let width = windowWidth - 2 * paddingVertical;
	const [activeSlide, setActiveSlide] = useState(0);
	return <HomeView {...{ width, setActiveSlide, activeSlide }} />;
};

export default HomeController;
