import React, { useEffect, useState } from 'react';
import { requests } from 'api/requests';
import MyReviewsView from './view';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/slices/userSlice';

const MyReviewsController = () => {
	const [comments, setComments] = useState([]);
	let user = useSelector(selectUser);

	let effect = async () => {
		let res = await requests.product.getComments();
		let comments = res.data.filter(
			(item) => item.user_id == user.userData?.id
		);
		setComments(comments);
	};

	useEffect(() => {
		effect();
	}, []);

	return <MyReviewsView comments={comments} />;
};

export default MyReviewsController;
