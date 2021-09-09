import React, { useState } from 'react';
import ProductDetailsView from './view';

const ProductDetailsController = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	return <ProductDetailsView {...{ activeSlide, setActiveSlide }} />;
};

export default ProductDetailsController;
