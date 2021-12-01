import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requests } from 'api/requests';
import CommentsView from './view';

const CommentsController = ({}) => {
	const [comments, setComments] = useState([]);

	let effect = async () => {
		let res = await requests.product.getComments();

		setComments(res.data);
	};

	useEffect(() => {
		effect();
	}, []);

	return <CommentsView comments={comments} />;
};

export default CommentsController;

const styles = StyleSheet.create({});
