import React, { useState } from 'react';
import { paddingVertical, windowWidth } from 'constants/sizes';
import HomeView from './view';

const HomeController = () => {
	//TODO styles and move hooks to controller
	let itemWidth = windowWidth - 2 * paddingVertical;
	const [activeSlide, setActiveSlide] = useState(0);
	return <HomeView {...{ width: itemWidth, setActiveSlide, activeSlide }} />;
};

export default HomeController;
