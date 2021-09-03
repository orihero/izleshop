import { combineReducers } from "redux";
import cartSlice from "./cartSlice";
import favoritesSlice from "./favoritesSlice";

export default combineReducers({
    favorites: favoritesSlice,
    cart: cartSlice
})