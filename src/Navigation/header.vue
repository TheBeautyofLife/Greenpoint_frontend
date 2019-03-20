<template>
<!-- Header content -->

    <header class="head--container">
        <div class='greenpoint-logo'><img src= "../assets/imgs/_logo.png" class="logo logo--size" /></div>
        
        <div class="search-bar user-icon menu-dropdwn" id="top-menu">
            <div id="search--container search--icon" class="search--container box">
                <!--This is the drop down menu for the search option-->
                <b-dropdown class="drpdwn--list box-1" variant="link" size="sm" no-caret>
                    <template slot="button-content"><fa-icon id="dropdwn-s" icon="chevron-down" /></template>
                        <b-dropdown-item>Large household...</b-dropdown-item>
                        <b-dropdown-item>Small household...</b-dropdown-item>
                        <b-dropdown-item>Information tech...</b-dropdown-item>
                        <b-dropdown-item>Consumer equipment</b-dropdown-item>
                        <b-dropdown-item>Lighting equipment</b-dropdown-item>
                        <b-dropdown-item>Electrical and...</b-dropdown-item>
                        <b-dropdown-item>Monitoring and...</b-dropdown-item>
                </b-dropdown>

                <input type="search" class="search--bar-box" placeholder="Search for a product or parts... " />
                <div class="search--icon box-2">Search  <fa-icon id="search--icon" icon="search"/> </div>
            </div>

    <div class="user--container ">
        <!-- This is the section where the users icon will appear-->
        <div id="active--user-icon">
           <div class="Usr--icon"><fa-icon icon="user"/></div> 
           <div class="Usr--name Usr--name"> My name </div> 
        </div>
        <div>
            <b-dropdown dropright variant="link" size="lg" no-caret>
                <template slot="button-content"><fa-icon icon="chevron-down"></fa-icon></template>

                <b-dropdown-item>Login</b-dropdown-item>
                <b-dropdown-item>Register</b-dropdown-item>
                 <b-dropdown-item>Post items</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>My account</b-dropdown-item>
                <b-dropdown-item>Settings</b-dropdown-item>

            </b-dropdown>
        </div>
        <!---------------------------------------------------------->

        <!-- Drop down menu-->
       
    </div>

        </div>
    </header>
    
<!---- Header content ---->

</template>

<style lang="scss">
@import "../assets/css/_master.scss"

</style>


