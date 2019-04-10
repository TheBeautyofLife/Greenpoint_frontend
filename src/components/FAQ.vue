<template>
    <div id="viewall">
        <h1 class="products">All Products</h1>

        <table class="table">
            <thead>
             <th> Product name</th>    
            </thead>
           <tbody>
                <td>{{ products.productName }}</td>
    
           </tbody>
        
        </table>

    </div>

</template>

<script>
    import {APIService} from '../APIservice.js';

    const API_URL = 'http://3622174d.ngrok.io';
    const apiService = new APIService();

    export default{
        name: 'Faq',
        data() {
            return {
                products: [],
            };
        },

        methods: {

            getProducts() {
                apiService.getProducts().then((data) => {
                  this.products = data.data;
                   /*this.numberOfProducts = data.count; */
                   console.log(data);
                });
                
            },
        },

        mounted(){
            this.getProducts();
        }
    }
</script>