import axios from "axios"

export let url = 'http://izle-shop.shopsecurity.uz/api'
axios.interceptors.request.use((e)=>{
    e.headers.Authorization='Bearer 28|IFED9mLtwjkz5rnHuc50qFoZma8so2T8AdrandZz'
    return e;
}) 

export let requests = {
    product: {
        getProducts: () => {
            return axios.get(`${url}/product`)
        }
    }
}