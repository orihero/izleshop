/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRouter from 'routes/AppRouter';

const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<SafeAreaProvider>
				<AppRouter />
			</SafeAreaProvider>
		</View>
	);
};

export default App;
