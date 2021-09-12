import { strings } from 'locales/locales';

const img = require('mockup/images/galaxy_a72_purple.png');
const paymeLogo = require('mockup/images/payme.png');
const clickLogo = require('mockup/images/click.png');
const img1 = require('mockup/images/phone1.png');
const img2 = require('mockup/images/phone2.png');

export interface IAccordionItem {
	key: string;
	value: string;
	row: boolean;
}

export interface IAccordionContent {
	preTitle: string;
	items: IAccordionItem[];
}

export interface IAccordion {
	title: string;
	finally: string;
	content: IAccordionContent[];
}

export const accordionData: IAccordion[] = [
	{
		title: 'В рассрочку',
		finally:
			'По вопросам получения товаров в рассрочку, звоните по номеру +99871 123 45 67',
		content: [
			{
				preTitle: '',
				items: [
					{
						key: 'Ежемесячный платеж',
						value: '677 500 сум',
						row: true,
					},
					{
						key: 'Срок в месяцах',
						value: '12 месяцев',
						row: true,
					},
					{
						key: 'Общая суммма',
						value: '8 130 000 сум',
						row: true,
					},
				],
			},
		],
	},
	{
		title: 'Информация',
		finally: '',
		content: [
			{
				preTitle: '',
				items: [
					{
						key: 'Модель',
						value: 'A725',
						row: true,
					},
					{
						key: 'Производитель',
						value: 'Samsung',
						row: true,
					},
					{
						key: 'Наличие',
						value: 'Есть в наличие',
						row: true,
					},
				],
			},
		],
	},
	{
		title: 'Характеристика',
		finally:
			'Перед покупкой уточняйте характеристики и комплектацию у продавца.',
		content: [
			{
				preTitle: 'Сматрфон зарегистрирован в системе Uzimei',
				items: [],
			},
			{
				preTitle: 'Подробные характеристики',
				items: [
					{
						key: 'Тип',
						value: 'Смартфон',
						row: true,
					},
					{
						key: 'Версия OC на начало продаж',
						value: 'Android 11',
						row: true,
					},
					{
						key: 'Тип корпуса',
						value: 'Классический',
						row: true,
					},
					{
						key: 'Конструкция',
						value: 'Влагозащита',
						row: true,
					},
					{
						key: 'Степень защиты',
						value: 'IP67',
						row: true,
					},
					{
						key: 'Количество SIM-карт',
						value: '2',
						row: true,
					},
					{
						key: 'Тип SIM-карты',
						value: 'Nano SIM',
						row: true,
					},
					{
						key: 'Бесконтактная оплата',
						value: 'Есть',
						row: true,
					},
					{
						key: 'Вес',
						value: '203 гр',
						row: true,
					},
					{
						key: 'Размеры (ШхВхТ)',
						value: '77.4х165х8.4 мм',
						row: true,
					},
				],
			},
			{
				preTitle: 'Экран',
				items: [
					{
						key: 'Тип экрана',
						value: 'Цветной Super AMOLED, сенсорный',
						row: true,
					},
					{
						key: 'Диагональ',
						value: '6.7 дюйм',
						row: true,
					},
					{
						key: 'Размер изображения',
						value: '2400х1080',
						row: true,
					},
					{
						key: 'Число пикселейна дюйм (PPI)',
						value: '393',
						row: true,
					},
					{
						key: 'Соотношение сторон',
						value: '20:9',
						row: true,
					},
					{
						key: 'Частота обновления экрана',
						value: '90 Гц',
						row: true,
					},
					{
						key: 'Автоматический поворот экрана',
						value: 'Есть',
						row: true,
					},
				],
			},
			{
				preTitle: 'Мультимедийные возможности',
				items: [
					{
						key: 'Количество основных (тыловых) камер',
						value: '4',
						row: true,
					},
					{
						key: 'Основные (тыловые) камеры',
						value: 'Широкоугольная 64 МП F/1.80, сверхширокоугольная 12 МП F/2.20, телефото 8 МП 3х F/2.40, макро 5 МП F/2.40',
						row: false,
					},
					{
						key: 'Функции основной (тыловой) фотокамеры',
						value: 'Автофокус, оптическая стабилизация',
						row: false,
					},
					{
						key: 'Фотовспышка',
						value: 'Тыльная',
						row: true,
					},
					{
						key: 'Фронтальная камера',
						value: 'Есть, 32 МП',
						row: true,
					},
					{
						key: 'Аудио',
						value: 'MP3, стереодтнамики',
						row: true,
					},
					{
						key: 'Разъем для наушников',
						value: 'Mini jack 3.5 mm',
						row: true,
					},
				],
			},
			{
				preTitle: 'Связь',
				items: [
					{
						key: 'Стандарт',
						value: 'GSM 900/1800/1900, 3G, 4G, LTE',
						row: true,
					},
					{
						key: 'Интерфейсы',
						value: 'Wi-Fi 802, 11 ac, Bluetooth 5.0, NFC',
						row: true,
					},
					{
						key: 'Геопозиционирование',
						value: 'BeiDou, A-GPS, Galileo, GPS',
						row: true,
					},
				],
			},
			{
				preTitle: 'Память и процессор',
				items: [
					{
						key: 'Процессор',
						value: 'Qualcomm Snapdragon 720G',
						row: true,
					},
					{
						key: 'Количество ядер процессора',
						value: '8',
						row: true,
					},
					{
						key: 'Видеопроцессор',
						value: 'Andreno 618',
						row: true,
					},
					{
						key: 'Объем встроенной памяти',
						value: '128 ГБ',
						row: true,
					},
					{
						key: 'Объем оперативной  памяти',
						value: '6 ГБ',
						row: true,
					},
					{
						key: 'Слот для карты памяти',
						value: 'Есть, объемом до 1000 ГБ, совмещенный с SIM-картой',
						row: true,
					},
				],
			},
			{
				preTitle: 'Питание',
				items: [
					{
						key: 'Тип аккумулятора',
						value: 'Li- polymer',
						row: true,
					},
					{
						key: 'Емкость аккумулятора',
						value: '5000 мА/ч',
						row: true,
					},
					{
						key: 'Аккумулятор',
						value: 'Несъемный',
						row: true,
					},
					{
						key: 'Время работы в режиме разговора',
						value: '40 час',
						row: true,
					},
					{
						key: 'Время работы в режиме прослушивания музыки',
						value: '146 час',
						row: true,
					},
					{
						key: 'Тип разъема для зарядки',
						value: 'USB Type-C',
						row: true,
					},
					{
						key: 'Функция быстрой зарядки',
						value: 'Есть',
						row: true,
					},
				],
			},
			{
				preTitle: 'Другие функции',
				items: [
					{
						key: 'Управление',
						value: 'Голосовой набор, голосовое управления',
						row: true,
					},
					{
						key: 'Режим полета',
						value: 'Есть',
						row: true,
					},
					{
						key: 'Датчики',
						value: 'Освещенности, приблежения, холла, гироскоп, компас, считывание отпечатка пальца',
						row: true,
					},
					{
						key: 'Расположение сканера отпечатка пальца',
						value: 'Экран',
						row: true,
					},
					{
						key: 'Фонарик',
						value: 'Есть',
						row: true,
					},
					{
						key: 'Использование в качестве USB-накопителя',
						value: 'Есть',
						row: true,
					},
				],
			},
			{
				preTitle: 'Дополнительная информация',
				items: [
					{
						key: 'Комплектация',
						value: 'Кабель USB Type-C, зарядное устройство (15 Вт), инструмент для извлечения SIM-карты \nГарантия 1 год',
						row: false,
					},
				],
			},
		],
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
		uri: 'https://cdn.alzashop.com/Foto/f16/RI/RI035b1.jpg',
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
