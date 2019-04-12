import axios from 'axios';

/** The api link is constantly changing  **/
const API_URL = 'http://3622174d.ngrok.io';

export class APIService{
    getProducts() {
        const url = `${API_URL}/api/getproducts/`;
        return axios.get(url).then(response => response.data);
    }

    getProduct(){
        const url = `${API_URL}/api/getproducts/`;
        return axios.get
    }


    postProduct() {
       //post method
    }

    authUser(){
    //auth method
    }
    
}