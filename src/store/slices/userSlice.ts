import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

let initialState = {
    phone: "",
    name: "",
    languageIndex: 0
};
let userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUserPhone: (state, payload: PayloadAction<string>) => {
            return { ...state, phone: payload.payload }
        },
        setUserName: (state, payload: PayloadAction<string>) => {
            return { ...state, name: payload.payload }
        },
        setUserLanguage: (state, payload: PayloadAction<number>) => {
            return { ...state, language: payload.payload }
        },
        userLoggedOut: () => {
            return initialState
        }
    }
})
export let selectUser = (state: RootState) => state.user
export let { setUserLanguage, setUserName, setUserPhone, userLoggedOut } = userSlice.actions
export default userSlice.reducer