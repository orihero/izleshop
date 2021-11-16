import axios from 'axios';
import { store } from 'store/configureStore';
import { UserData, UserFullData } from 'store/slices/userSlice';

export let url = 'https://izleshop.uz/api';

axios.interceptors.request.use((e) => {
	if (!!store.getState().user.token)
		e.headers.Authorization = `Bearer ${store.getState().user.token}`;
	return e;
});

axios.interceptors.response.use(e => {
	if (!!e?.data?.status && !!e?.data?.message) {
		throw {}
	}
	return e
})

export let requests = {
	helpers: {
		getRegions: () => {
			return axios.get(`${url}/getRegions`);
		},
	},
	auth: {
		requestLogin: (phone: string) =>
			axios.post(`${url}/sendRequest`, { phone }),
		login: (phone: string, code: string) =>
			axios.get<UserFullData>(`${url}/login?phone=${phone}&code=${code}`),
		editProfile: (id?: string | number, payload?: any) =>
			axios.post<UserData>(`${url}/edit/profile`, payload),
	},
	product: {
		getProducts: (params?: any) => {
			return axios.get(`${url}/getProducts`, {
				params,
			});
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
		getUserOrders: () => {
			return axios.get(`${url}/getUserOrders`);
		},
		getPartners: () => {
			return axios.get(`${url}/getPartners`);
		},
		getDetails: (id: string) =>
			axios.get(`${url}/getProductDetails?id=${id}`),
		makeOrder: (credentials) => axios.post(`${url}/makeOrder`, credentials),
	},
};
