<template>
  <v-app>
    
    

    <v-main>
      <br>
      <h1 class="title"><span style="font-size: 100px;">VERB</span> </h1>
      <h3 class="subtitle"><span style="font-size: 100px;">TO BE</span></h3>
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
              <v-icon color="white">START</v-icon>
            </v-btn>
            </router-link>
            </div>
         
  
            
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'inicio', 
  components: {
    
  },

  data: () => {
  
    return {
          
    
    };
  }
};
</script>

<style>

#app {
  background: url('../assets/Background/Fondo_inicio.jpg') no-repeat center center fixed !important;
  background-size: cover;
  
}

.title {
   align-content: right;
    align-items: right;
     padding-top: 90px;
    padding-left: 20%;
    position: relative;
  bottom: -90px;
   right: 300px;
   font-size: 50px;
  width: -100px;
  display: flex;
  justify-content: center;

  /* Fin del codigo para centrar*/
}
.subtitle {
align-content: right;
    align-items: right;
     padding-top: 90px;
    padding-left: 20%;
    position: relative;
  bottom: -90px;
   right: 300px;
   font-size: 50px;
  width: -100px;
  display: flex;
  justify-content: center;
}

body{
  margin: 0; 
  padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1 {
  color: black;
}

h3{
  color: black;
}
.icon {
    align-content: right;
    align-items: right;
    padding-left: 55%;
    position: relative;
  bottom: 590px;
   right: -200px;
   font-size: 50px;
    align-content: right;
    align-items: right;
     padding-top: 480px;
    position: relative;
    

}
</style>
