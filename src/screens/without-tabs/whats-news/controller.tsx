import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import WhatsNewsView from './view';

const WhatsNewsController = () => {
	const [news, setNews] = useState([]);
	let effect = async () => {
		let res = await requests.product.getNews();
		setNews(res.data);
	};

	useEffect(() => {
		effect();
	}, []);
	return <WhatsNewsView {...{ news }} />;
};

export default WhatsNewsController;
