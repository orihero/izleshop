import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppRouter from 'routes/AppRouter';
import { store, persistor } from 'store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
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
