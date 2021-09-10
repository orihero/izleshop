import { strings } from 'locales/locales';

const img = require('mockup/images/galaxy_a72_purple.png');
const paymeLogo = require('mockup/images/payme.png');
const clickLogo = require('mockup/images/click.png');
const img1 = require('mockup/images/phone1.png');
const img2 = require('mockup/images/phone2.png');

export const accordionItems = [
	{
		title: strings.byInstallments,
		content: {
			items: [
				{
					content: {
						items: [
							{
								title: {
									text: strings.monthlyPayment,
									style: 'fw400',
								},
								data: {
									text: '677 500 сум',
									style: 'fw700',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.termInMonths,
									style: 'fw400',
								},
								data: {
									text: '12 месяцев',
									style: 'fw700',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.total,
									style: 'fw400',
								},
								data: {
									text: '8 130 000 сум',
									style: 'fw700',
								},
								isRow: true,
							},
						],
					},
				},
			],
			finally: {
				text: strings.forQuestionsAboutReceivingGoodsByInstallmentsCall,
				style: 'fw600',
				position: 'tacenter',
			},
		},
	},
	{
		title: strings.information,
		content: {
			items: [
				{
					preTitle: null,
					content: {
						items: [
							{
								title: {
									text: strings.model,
									style: 'fw400',
								},
								data: {
									text: 'A725',
									style: 'fw700',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.manufacturer,
									style: 'fw400',
								},
								data: {
									text: 'Samsung',
									style: 'fw700',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.availability,
									style: 'fw400',
								},
								data: {
									text: strings.inStock,
									style: 'fw700',
								},
								isRow: true,
							},
						],
					},
				},
			],
		},
	},
	{
		title: strings.characteristic,
		content: {
			items: [
				{
					preTitle: {
						text: strings.theSmartphoneIsRegisteredInTheUzimeiSystem,
						style: 'fw700',
					},
				},
				{
					preTitle: {
						text: strings.detailedSpecifications,
						style: 'fw700',
					},
					content: {
						items: [
							{
								title: {
									text: strings.typeOf,
									style: 'fw700',
								},
								data: {
									text: 'Смартфон',
									style: 'fw400',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.degreeOfProtection,
									style: 'fw700',
								},
								data: {
									text: 'IP67',
									style: 'fw400',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.numberOfSimCards,
									style: 'fw700',
								},
								data: {
									text: 2,
									style: 'fw400',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.simCardType,
									style: 'fw700',
								},
								data: {
									text: 'NANO SIM',
									style: 'fw400',
								},
								isRow: true,
							},
						],
					},
				},
				{
					preTitle: {
						text: strings.screen,
						style: 'fw700',
					},
					content: {
						items: [
							{
								title: {
									text: strings.screenType,
									style: 'fw700',
								},
								data: {
									text: 'Цветной Super AMOLED, сенсорный',
									style: 'fw400',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.imageSize,
									style: 'fw700',
								},
								data: {
									text: '2400х1080',
									style: 'fw400',
								},
								isRow: true,
							},
							{
								title: {
									text: strings.aspectRatio,
									style: 'fw700',
								},
								data: {
									text: '20:9',
									style: 'fw400',
								},
								isRow: true,
							},
						],
					},
				},
				{
					preTitle: {
						text: strings.multimediaCapabilities,
						style: 'fw700',
					},
					content: {
						items: [
							{
								title: {
									text: strings.mainRearCameras,
									style: 'fw700',
								},
								data: {
									text: 'Широкоугольная 64 МП F/1.80, сверхширокоугольная 12 МП F/2.20, телефото 8 МП 3х F/2.40, макро 5 МП F/2.40',
									style: 'fw400',
								},
								isRow: false,
							},
							{
								title: {
									text: strings.mainRearCameraFunctions,
									style: 'fw700',
								},
								data: {
									text: 'Автофокус, оптическая стабилизация',
									style: 'fw400',
								},
								isRow: false,
							},
							{
								title: {
									text: strings.photoFlash,
									style: 'fw700',
								},
								data: {
									text: 'Тыльная',
									style: 'fw400',
								},
								isRow: true,
							},
						],
					},
				},
			],
			finally: {
				text: strings.beforeBuyingCheckWithTheSellerForSpecificationsAndConfiguration,
				style: 'fw700',
				position: 'taleft',
			},
		},
	},
];

export const item = {
	id: 1,
	title: 'Смартфон Samaung Galaxy A72 6/128 GB Purple',
	rating: 4,
	oldPrice: '250 000',
	newPrice: '180 000',
	currency: 'сум',
	isFavorite: false,
	isInCart: false,
	img: {
		uri: 'https://cdn.alzashop.com/Foto/f16/RI/RI035b1.jpg'
	},
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
