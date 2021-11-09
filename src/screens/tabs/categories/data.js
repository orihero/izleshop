const img1 = require('mockup/images/samsung.png');
const img2 = require('mockup/images/lg.png');
const img3 = require('mockup/images/artel.png');
const img4 = require('mockup/images/shivaki.png');

export let brands = [
	{
		subCategories: [
			{
				label: 'Samsung',
				img: img1,
			},
			{
				label: 'LG',
				img: img2,
			},
			{
				label: 'Artel',
				img: img3,
			},
			{
				label: 'Shivaki',
				img: img4,
			},
		],
	},
	{
		subCategories: [
			{
				label: 'Artel',
				img: img3,
			},
			{
				label: 'Shivaki',
				img: img4,
			},
			{
				label: 'Samsung',
				img: img1,
			},
			{
				label: 'LG',
				img: img2,
			},
		],
	},
	{
		subCategories: [
			{
				label: 'LG',
				img: img2,
			},
			{
				label: 'Artel',
				img: img3,
			},
			{
				label: 'Shivaki',
				img: img4,
			},
			{
				label: 'Samsung',
				img: img1,
			},
		],
	},
	{
		childs: [
			{
				label: 'LG',
				img: img2,
			},
			{
				label: 'Artel',
				img: img3,
			},
			{
				label: 'Shivaki',
				img: img4,
			},
			{
				label: 'Samsung',
				img: img1,
			},
			{
				label: 'LG',
				img: img2,
			},
		],
	},
];

export let categories = [
	{
		id: 29,
        title: "Телефоны и гаджеты",
        image: "http://izleshop.uz/public/uploads/1635873580.png",
        svg: "<svg width=\"14\" height=\"22\" viewBox=\"0 0 14 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M11 0H3C1.34 0 0 1.34 0 3V19C0 20.66 1.34 22 3 22H11C12.66 22 14 20.66 14 19V3C14 1.34 12.66 0 11 0ZM9 20H5V19H9V20ZM12.25 17H1.75V3H12.25V17Z\" fill=\"#616161\"/> </svg>",
		childs: [
			{
                "id": 30,
                "name": "Телефоны",
                "parent_id": 29,
                "image": null,
                "svg": null
            },
			{
				name: 'Пылесос',
				image: {
					image: 'https://m.media-amazon.com/images/I/61tH1osluML._SL1200_.jpg',
				},
			},
			{
				name: 'Стиральная машина',
				image: {
					uri: 'https://img.global.news.samsung.com/global/wp-content/uploads/2018/01/QuickDrive_WW6850N_washer_main_1.jpg',
				},
			},
		],
	},
	{
		title: 'Телефоны и гаджеты',
		childs: [
			{
				name: 'Телефоны и гаджеты',
				img: {
					uri: 'https://maplestore.in/wp-content/uploads/2020/10/iPhone-12-Pro.jpg',
				},
			},
			{
				label: 'Планшеты',
				img: {
					uri: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/152208-tablets-news-152208-ipads-expected-in-late-2020---maybe-an-ipad-air-upgrade-image1-1xdl9of6ks.jpg',
				},
			},
			{
				label: 'Наушники',
				img: {
					uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
				},
			},
		],
	},
	{
		label: 'Бытовая техника',
		childs: [
			{
				label: 'Телевизор',
				img: {
					uri: 'https://www.lg.com/uk/images/tvs/MD05942377/gallery/medium01.jpg',
				},
			},
			{
				label: 'Пылесос',
				img: {
					uri: 'https://m.media-amazon.com/images/I/61tH1osluML._SL1200_.jpg',
				},
			},
			{
				label: 'Стиральная машина',
				img: {
					uri: 'https://img.global.news.samsung.com/global/wp-content/uploads/2018/01/QuickDrive_WW6850N_washer_main_1.jpg',
				},
			},
		],
	},
	{
		label: 'Бытовая техника',
		childs: [
			{
				label: 'Телевизор',
				img: {
					uri: 'https://www.lg.com/uk/images/tvs/MD05942377/gallery/medium01.jpg',
				},
			},
			{
				label: 'Пылесос',
				img: {
					uri: 'https://m.media-amazon.com/images/I/61tH1osluML._SL1200_.jpg',
				},
			},
			{
				label: 'Стиральная машина',
				img: {
					uri: 'https://img.global.news.samsung.com/global/wp-content/uploads/2018/01/QuickDrive_WW6850N_washer_main_1.jpg',
				},
			},
		],
	},
];
