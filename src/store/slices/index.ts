import { combineReducers } from 'redux';
import cartSlice from './cartSlice';
import favoritesSlice from './favoritesSlice';
import userSlice from './userSlice';

export default combineReducers({
	favorites: favoritesSlice,
	cart: cartSlice,
	user: userSlice, 
});
