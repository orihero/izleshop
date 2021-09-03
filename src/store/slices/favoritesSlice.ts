import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItemModel } from 'src/screens/tabs/home/components/ProductItem'
import { RootState } from '../configureStore';

let initialState: { [key: string]: any } = {};


export const counterSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductItemModel>) => {
            state[action.payload.id] = action.payload
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state = Object.keys(state).reduce((p, c) => {
                if (c === action.payload) {
                    return p;
                }
                return { ...p, [c]: state[c] };
            }, {})
            return state;
        },
        clearCart: () => { }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, clearCart, removeItem } = counterSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectFavorites = (state: RootState) => state.favorites
export const selectFavoritesList = (state: RootState) => Object.keys(state.favorites).map((e) => state.favorites[e])


export default counterSlice.reducer