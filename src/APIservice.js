import Vue from 'vue';
//import VueAxios from 'vue-axios';
//import VueAuthenicate from 'vue-authenticate'; 
import axios from 'axios';

/** The api link is constantly changing  **/
const HTTP = axios.create({ 
    baseURL: '',

    headers: {
    Authorization: 'Bearer {token}
    '}
})

export class APIService {
    getProducts() {
        const url = `${HTTP}/api/getproducts/`;
        return axios.get(url).then(response => response.data);
    }

    getProduct() {
        //
    }

    postProduct() {
          const url = `${API_URL}/api/getproducts/`;
          return axios.post(url).then(response => response.data);
    }

 

}
