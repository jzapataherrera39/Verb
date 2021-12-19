<template>
  <v-app>
    
    <v-main>
     
      
      
      <br>
    
      <h1 class="title"><span style="font-size: 56px;">VERB TO BE</span> </h1>

      <br>
<div class="icon">
      <router-link to="/entrada">
  <v-btn
   class="mx-2"
  color="accent"
  depressed
  elevation="24"
  outlined
  plain
  raised
  rounded
  small
  text
  tile
  x-large
  x-small
>
 <v-icon color="black">start</v-icon>
</v-btn>
 </router-link>
            </div>
         
           
    </v-main>
  </v-app>
  
</template>

<script>
export default {
  name: 'Inicio',
  components: {
    
  },
  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  background: url('../../models/img/background.jpg') no-repeat center center fixed !important;
  background-size: auto;
  
}
.title {
  color:  rgb(0, 0, 0);
position: relative;
  bottom: -350px;
   right: -450px;
}

body{
  margin: 0; 
  padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.icon {
    align-content: center;
    align-items: center;
    padding-left: 8%;
     position: relative;
     left: 80px;
vertical-align: 40px;

    
}

</style>