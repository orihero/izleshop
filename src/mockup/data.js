const img = require('mockup/images/galaxy_a72_purple.png');
const paymeLogo = require('mockup/images/payme.png');
const clickLogo = require('mockup/images/click.png');
const img1 = require('mockup/images/phone1.png');
const img2 = require('mockup/images/phone2.png');

export const item = {
	title: 'Смартфон Samaung Galaxy A72 6/128 GB Purple',
	rating: 4,
	oldPrice: '250 000',
	newPrice: '180 000',
	currency: 'сум',
	isFavorite: false,
	isInCart: false,
	images: [
		{
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkXxODV0_-JjveAFTVYP-v7Av0fhcmh8uXQ&usqp=CAU',
		},
		{
			url: 'https://www.warehousestationery.co.nz/on/demandware.static/-/Library-Sites-wsl-shared-library/default/dwcd375d89/Content/Category-Landing-Pages/technology/apple/fy21/s2455-iPhone-12mini-buy-now-988x494.jpg',
		},
		{
			url: 'https://creativepool.com/files/candidate/portfolio/full/930803.jpg',
		},
		{
			url: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1617801584557/apple-offers.jpg',
		},
		{
			url: 'https://ossaimaenterprise.com/wp-content/uploads/2020/10/headersml-desk-apple-watch-series-6-860x360-1.jpg',
		},
	],
	// images: [img, paymeLogo, img, clickLogo, img],
};

export const items = [
	{
		id: 1,
		title: 'Кроссовки Nike air Light 38, 39, 40, .....',
		rating: 4,
		oldPrice: '250 000',
		newPrice: '180 000',
		currency: 'сум',
		isFavorite: false,
		isInCart: false,
		img: img1,
	},
	{
		id: 2,
		title: 'Кроссовки Nike air Light 38, 39, 40, .....',
		rating: 4,
		oldPrice: '250 000',
		newPrice: '180 000',
		currency: 'сум',
		isFavorite: false,
		isInCart: false,
		img: img2,
	},
];
