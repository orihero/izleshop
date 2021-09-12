import React from 'react';

import { View } from 'react-native';
import Login from './modules/login';
import Register from './modules/register';
import Header from 'components/navigation/Header';
import CustomTabView from 'components/general/CustomTabView';

import { styles } from './styles';
import { strings } from 'locales/locales';
import { EdgeInsets } from 'react-native-safe-area-context';
import { AuthScreenRouteProp } from './controller';

interface IAuthViewProps {
	insets: EdgeInsets;
	route: AuthScreenRouteProp;
}

const AuthView = ({ insets, route }: IAuthViewProps) => {
	return (
		<View style={[styles.preContainer, { paddingTop: insets.top }]}>
			<View style={styles.container}>
				<Header
					hideRightIcon
					disableGoBack={!route.params.cangoBack}
					title={strings.welcome}
				/>
				<CustomTabView
					items={[
						{
							title: strings.toComeIn || '',
							component: () => <Login />,
						},
						{
							title: strings.create || '',
							component: () => <Register />,
						},
					]}
				/>
			</View>
		</View>
	);
};

export default AuthView;
