<template>
<!-- Header content -->

    <header class="head--container">
        <div class='greenpoint-logo'><img src= "../assets/imgs/_logo.png" class="logo logo--size" /></div>
        
        <div class="search-bar user-icon menu-dropdwn" id="top-menu">
            <div id="search--container search--icon" class="search--container box">
                <!--This is the drop down menu for the search option-->
                <span class="drpdwn--list box-1"><fa-icon id= "dropdwn-s" icon="chevron-down" /></span>
                <input type="search" class="search--bar-box" placeholder="Search for a product or parts... " />
                <span class="search--icon box-2">Search  <fa-icon id="search--icon" icon="search"/> </span>
            </div>

    <div class="user--container ">
        <!-- This is the section where the users icon will appear-->
        <div id="active--user-icon">
           <span class="Usr--icon Usr--image"><fa-icon icon="user"/></span> 
           <span class="Usr--name Usr--name">My name </span> 
           <span class="line"></span>
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


