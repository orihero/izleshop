import storage from '@react-native-community/async-storage';
import { createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './slices';
import Reactotron from './reactotron.config';
import { strings } from 'locales/locales';

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//@ts-ignore
export let store = createStore(persistedReducer, Reactotron?.createEnhancer());
export let persistor = persistStore(store);

store.subscribe(() => {
	let lang = strings.getLanguage();
	console.log({ lang });
	let l = 'kk';
	switch (store.getState().user.languageIndex) {
		case 0:
			l = 'kk';
			break;
		case 1:
			l = 'ru';
			break;
		case 2:
			l = 'uz';
		default:
			l = 'uz';
	}
	if (lang !== l) {
		strings.setLanguage(l);
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
