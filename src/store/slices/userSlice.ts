import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

let initialState = {
    phone: "",
    name: "",
};
let userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUserPhone: (state, payload,) => {
            return { ...state, phone: payload.payload }
        },
        setUserName: (state, payload) => {
            return { ...state, name: payload.payload }
        },
        setUserLanguage: (state, payload) => {
            return { ...state, language: payload.payload }
        },
    }
})
export let selectUser = (state: RootState) => state.user
export let { setUserLanguage, setUserName, setUserPhone } = userSlice.actions
export default userSlice.reducer