import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import OurPartnersView from './view';

const OurPartnersController = () => {
	const [partners, setPartners] = useState([]);
	let effect = async () => {
		let res = await requests.product.getPartners();
		setPartners(res.data);
	};

	useEffect(() => {
		effect();
	}, []);
	return <OurPartnersView {...{ partners }} />;
};

export default OurPartnersController;
