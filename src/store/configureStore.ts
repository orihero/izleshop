import storage from '@react-native-community/async-storage';
import { createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './slices';
import Reactotron from './reactotron.config'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
//@ts-ignore
export let store = createStore(persistedReducer, Reactotron?.createEnhancer())
export let persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
