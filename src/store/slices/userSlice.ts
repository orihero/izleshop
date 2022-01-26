import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { strings } from 'locales/locales';
import { RootState } from '../configureStore';

export interface UserData {
	id?: number;
	image_id?: any;
	name?: any;
	first_name?: any;
	second_name?: any;
	last_name?: any;
	phone?: string;
	code?: any;
	active?: number;
	email?: string;
	sex?: number;
	address?: any;
	birthday?: any;
	email_verified_at?: any;
	is_admin?: number;
	created_at?: Date;
	updated_at?: Date;
}

export interface UserFullData {
	succes: boolean;
	userData: UserData;
	token: string;
	dollarRate: number;
	orders: any[];
}

let initialState: {
	token: string;
	userData?: UserData;
	languageIndex: number;
	dollarRate: number;
	orders: [];
} = {
	languageIndex: 1,
	token: '',
	dollarRate: 1,
};
let userSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {
		setUserPhone: (state, action: PayloadAction<string>) => {
			return {
				...state,
				userData: { ...state.userData, phone: action.payload },
			};
		},
		setUserName: (state, action: PayloadAction<string>) => {
			return {
				...state,
				userData: { ...state.userData, first_name: action.payload },
			};
		},
		setUserLanguage: (state, action: PayloadAction<number>) => {
			// let l = 'kk';
			// console.log('ru');

			// switch (action.payload) {
			// 	case 0:
			// 		l = 'kk';
			// 		break;
			// 	case 1:
			// 		l = 'ru';
			// 		break;
			// 	case 2:
			// 		l = 'uz';
			// 	default:
			// 		l = 'uz';
			// }
			// strings.setLanguage(l);
			// strings.setContent(l);
			return { ...state, languageIndex: action.payload };
		},
		setUserData: (state, action: PayloadAction<UserFullData>) => {
			return {
				...state,
				userData: action.payload.userData,
				token: action.payload.token,
			};
		},
		userLoggedOut: (state) => {
			return { dollarRate: state.dollarRate };
		},
		setProfileData: (state, action: PayloadAction<UserData>) => {
			return { ...state, userData: action.payload };
		},
		setDollarRate: (state, action: PayloadAction<number>) => {
			return { ...state, dollarRate: action.payload };
		},
		setUserOrders: (state, action: PayloadAction<any[]>) => {
			return { ...state, orders: action.payload };
		},
	},
});
export let selectDollarRate = (state: RootState) => state.user.dollarRate;
export let selectUser = (state: RootState) => state.user;
export let {
	setUserLanguage,
	setUserName,
	setUserPhone,
	userLoggedOut,
	setUserData,
	setProfileData,
	setDollarRate,
	setUserOrders,
} = userSlice.actions;

export default userSlice.reducer;
