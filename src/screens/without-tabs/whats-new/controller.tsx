import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import WhatsNewView from './view';

const WhatsNewController = () => {
	const [news, setNews] = useState([]);
	let effect = async () => {
		let res = await requests.product.getNews();
		setNews(res.data);
	};

	useEffect(() => {
		effect();
	}, []);
	return <WhatsNewView {...{ news }} />;
};

export default WhatsNewController;
