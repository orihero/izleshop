import axios from 'axios';
import { store } from 'store/configureStore';
import { UserFullData } from 'store/slices/userSlice';

export let url = 'http://izle-shop.shopsecurity.uz/api';

axios.interceptors.request.use((e) => {
	e.headers.Authorization = `Bearer ${store.getState().user.token}`;
	return e;
});

export let requests = {
	auth: {
		requestLogin: (phone: string) =>
			axios.post(`${url}/sendRequest`, { phone }),
		login: (phone: string, code: string) =>
			axios.get<UserFullData>(`${url}/login?phone=${phone}&code=${code}`),
		editProfile: (id?: string | number, payload?: any) =>
			axios.post<UserFullData>(`${url}/edit/profile/${id}`, payload),
	},
	product: {
		getProducts: () => {
			return axios.get(`${url}/getProducts`);
		},
		getCategories: () => {
			return axios.get(`${url}/getCategories`);
		},
		getBanners: () => {
			return axios.get(`${url}/getBanners`);
		},
		profile: () => {
			return axios.get(`${url}/profile`);
		},
	},
};
