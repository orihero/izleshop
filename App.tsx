import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppRouter from 'routes/AppRouter';
import { store, persistor } from 'store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';

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
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;

export { App };
