import axios from 'axios';
const API_URL = 'http://3622174d.ngrok.io';

export class APIService{
getProducts() {
        const url = `${API_URL}/api/getproducts/`;
        return axios.get(url).then(response => response.data);
    }

postProduct() {
    //post method
}

    //auth method
}