import React, { useState } from 'react';
import LoginView from './view';

const LoginController = () => {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	const onPress = () => {
		console.log('onPressed in Login!');
	};

	return (
		<LoginView
			phone={phone}
			setPhone={setPhone}
			password={password}
			setPassword={setPassword}
			onPress={onPress}
		/>
	);
};

export default LoginController;
