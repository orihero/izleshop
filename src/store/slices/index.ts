import { combineReducers } from "redux";
import favoritesSlice from "./favoritesSlice";

export default combineReducers({
    favorites: favoritesSlice
})