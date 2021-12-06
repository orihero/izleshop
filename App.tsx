import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppRouter from 'routes/AppRouter';
import { store, persistor } from 'store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { LogBox, StatusBar } from 'react-native';
import { colors } from 'constants/colors';

const App = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);
	LogBox.ignoreLogs(['Warning: ...']);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaProvider>
					<AppRouter />
					<StatusBar
						barStyle="dark-content"
						backgroundColor={colors.white}
					/>
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;

export { App };
