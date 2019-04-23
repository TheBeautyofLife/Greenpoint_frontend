import Vue from 'vue';
//import VueAxios from 'vue-axios';
//import VueAuthenicate from 'vue-authenticate'; 
import axios from 'axios';

/** The api link is constantly changing  **/
const API_URL = 'http://3622174d.ngrok.io';

export class APIService {
    getProducts() {
        const url = `${API_URL}/api/getproducts/`;
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
  // This is the x Auth of the users authUser
   
 // Vue.use(VueAxios, axios)



/* const cors = require('cors')
const express = require('express')
const cloudinary = require('cloudinary-core')
const multipart = require('connect-multiparty')
const bodyParser = require('body-parser');


const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Multiparty middleware
const multipartMiddleware = multipart();


cloudinary.config({
       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
       api_key: process.env.CLOUDINARY_API_KEY,
       api_secret: process.env.CLOUDINARY_API_SECRET
   });


app.post('/upload', multipartMiddleware, function (req, res) {

    cloudinary.uploader.upload(req.files.video.path, function (result) {
            return res.json({ 'status': true })
        });
}),

app.get('/get', multipartMiddleware, function (req, res) {
    cloudinary.v2.api.tags({
        resource_type: 'image'
    },
    function (error, result) {
        return res.json(result);
    });
}) */