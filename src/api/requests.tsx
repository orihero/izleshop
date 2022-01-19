import axios from 'axios';
import { store } from 'store/configureStore';
import { UserData, UserFullData } from 'store/slices/userSlice';
import * as ImagePicker from 'react-native-image-picker';

export let url = 'https://izleshop.uz/api';

axios.interceptors.request.use((e) => {
	if (!!store.getState().user.token)
		e.headers.Authorization = `Bearer ${store.getState().user.token}`;
	return e;
});

axios.interceptors.response.use((e) => {
	if (!!e?.data?.status && !!e?.data?.message) {
		throw { statsus: e.data.status, message: e.data.message };
	}

	return e;
});
//?page=${page}&pageSize=${pageSize}

export let formData = (rawData) => {
	let form = new FormData();
	Object.keys(rawData).forEach((key) => {
		if (Array.isArray(rawData[key])) {
			let obj = rawData[key];
			for (let index in obj) {
				form.append(`${key}[${index}]`, obj[index]);
			}
			return;
		}
		if (typeof rawData[key] === 'object') {
			let obj = rawData[key];
			let i = 0;
			Object.keys(obj).forEach((id, index) => {
				if (obj[id]) form.append(`${key}[${i++}]`, parseInt(id));
			});
			return;
		}
		form.append(key, rawData[key]);
	});
	return form;
};

export let requests = {
	helpers: {
		getRegions: () => {
			return axios.get(`${url}/GetRegions`);
		},
		getCity: () => {
			return axios.get(`${url}/GetCities`);
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
		getProducts: (params: any) => {
			return axios.get(`${url}/getProducts`, {
				params,
			});
		},
		getCategories: () => {
			return axios.get(`${url}/getCategories`);
		},
		getBrands: () => {
			return axios.get(`${url}/getBrands`);
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
		getNews: () => {
			return axios.get(`${url}/getNews`);
		},
		getDetails: (id: string) =>
			axios.get(`${url}/getProductDetails?id=${id}`),
		getComments: () => axios.get(`${url}/getReviews`),
		makeOrder: (credentials: any) =>
			axios.post(`${url}/makeOrder`, credentials),
		getDollarRate: () => axios.get(`${url}/getDollarRate`),

		createReview: (data: {
			user_name: string | number;
			product_id: string | number;
			message: string;
			image: ImagePicker.Asset;
		}) => {
			let form = new FormData();

			Object.keys(data).forEach((e) => {
				if (e == 'image') {
					form.append(e, {
						uri: data.image.uri,
						type: data.image.type,
						name: 'image.jpg',
						// data: data.image.base64,
					});

					return;
				}
				form.append(e, data[e]);
			});

			return axios.post(`${url}/createReview`, form, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
		},
	},
};
