import React from 'react';

import { View } from 'react-native';
import { LoginView, RegisterView } from './views';
import Header from 'components/navigation/Header';
import CustomTabView from 'components/general/CustomTabView';

import { styles } from './style';
import { strings } from 'locales/locales';
import { EdgeInsets } from 'react-native-safe-area-context';

interface IAuthViewProps {
	insets: EdgeInsets;
}

const AuthView = ({ insets }: IAuthViewProps) => {
	return (
		<View style={[styles.preContainer, { paddingTop: insets.top }]}>
			<View style={styles.container}>
				<Header hideRightIcon title={strings.welcome} />
				<CustomTabView
					items={[
						{
							title: strings.toComeIn || '',
							component: () => <LoginView />,
						},
						{
							title: strings.create || '',
							component: () => <RegisterView />,
						},
					]}
				/>
			</View>
		</View>
	);
};

export default AuthView;
